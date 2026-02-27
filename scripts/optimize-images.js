#!/usr/bin/env node
/**
 * Image Optimization Script
 * 
 * Converts JPG/PNG images to WebP format for better performance
 * Run: node scripts/optimize-images.js
 */

import { glob } from 'glob';
import sharp from 'sharp';
import { existsSync, statSync } from 'fs';
import { dirname, join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  // Quality settings
  webpQuality: 80,
  jpegQuality: 85,
  
  // Maximum dimensions (images larger than this will be resized)
  maxWidth: 1920,
  maxHeight: 1080,
  
  // Directories to process
  imageDirs: [
    'public/images/**/*.{jpg,jpeg,png}',
    'public/gallery/**/*.{jpg,jpeg,png}'
  ],
  
  // Skip already optimized files
  skipExisting: true,
  
  // Generate responsive sizes
  responsiveSizes: [400, 800, 1200],
};

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0,
};

/**
 * Format file size for display
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Process a single image
 */
async function processImage(imagePath) {
  try {
    const ext = extname(imagePath).toLowerCase();
    const baseName = basename(imagePath, ext);
    const dir = dirname(imagePath);
    const webpPath = join(dir, `${baseName}.webp`);
    
    // Check if WebP already exists
    if (CONFIG.skipExisting && existsSync(webpPath)) {
      console.log(`⏭️  Skipping (exists): ${imagePath}`);
      stats.skipped++;
      return;
    }
    
    // Get original file size
    const originalStat = statSync(imagePath);
    stats.originalSize += originalStat.size;
    
    // Get image metadata
    const metadata = await sharp(imagePath).metadata();
    
    // Determine if resizing is needed
    let resizeOptions = {};
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      resizeOptions = {
        width: Math.min(metadata.width, CONFIG.maxWidth),
        height: Math.min(metadata.height, CONFIG.maxHeight),
        fit: 'inside',
        withoutEnlargement: true,
      };
    }
    
    // Convert to WebP
    let sharpInstance = sharp(imagePath);
    
    if (resizeOptions.width) {
      sharpInstance = sharpInstance.resize(resizeOptions);
    }
    
    await sharpInstance
      .webp({ 
        quality: CONFIG.webpQuality,
        effort: 6, // Compression effort (0-6)
      })
      .toFile(webpPath);
    
    // Get new file size
    const webpStat = statSync(webpPath);
    stats.optimizedSize += webpStat.size;
    stats.processed++;
    
    const savings = originalStat.size - webpStat.size;
    const savingsPercent = ((savings / originalStat.size) * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${imagePath}`);
    console.log(`   ${formatBytes(originalStat.size)} → ${formatBytes(webpStat.size)} (${savingsPercent}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error processing ${imagePath}:`, error.message);
    stats.errors++;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  DPTF Image Optimizer\n');
  console.log('Configuration:');
  console.log(`  WebP Quality: ${CONFIG.webpQuality}%`);
  console.log(`  Max Dimensions: ${CONFIG.maxWidth}x${CONFIG.maxHeight}`);
  console.log(`  Skip Existing: ${CONFIG.skipExisting}\n`);
  
  // Find all images
  const imagePatterns = CONFIG.imageDirs;
  let allImages = [];
  
  for (const pattern of imagePatterns) {
    const images = await glob(pattern, { cwd: join(__dirname, '..') });
    allImages = allImages.concat(images);
  }
  
  // Remove duplicates
  allImages = [...new Set(allImages)];
  
  if (allImages.length === 0) {
    console.log('No images found to process.');
    return;
  }
  
  console.log(`Found ${allImages.length} images to process...\n`);
  
  // Process images sequentially to avoid memory issues
  for (const imagePath of allImages) {
    const fullPath = join(__dirname, '..', imagePath);
    await processImage(fullPath);
  }
  
  // Print summary
  console.log('\n📊 Summary:');
  console.log(`  Processed: ${stats.processed} images`);
  console.log(`  Skipped: ${stats.skipped} images`);
  console.log(`  Errors: ${stats.errors} images`);
  
  if (stats.processed > 0) {
    const totalSavings = stats.originalSize - stats.optimizedSize;
    const totalSavingsPercent = ((totalSavings / stats.originalSize) * 100).toFixed(1);
    console.log(`\n💾 Total Size Savings:`);
    console.log(`  Original: ${formatBytes(stats.originalSize)}`);
    console.log(`  Optimized: ${formatBytes(stats.optimizedSize)}`);
    console.log(`  Saved: ${formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
  }
  
  console.log('\n✨ Done!\n');
  
  // Exit with error code if there were errors
  if (stats.errors > 0) {
    process.exit(1);
  }
}

// Run main function
main().catch(console.error);
