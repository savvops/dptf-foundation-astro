/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e4d8c',
          dark: '#163a6d',
          light: '#e8f0f8',
        },
        secondary: {
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d4',
        },
        accent: {
          DEFAULT: '#2d8a5e',
          dark: '#236b49',
          light: '#e8f5ee',
        },
        success: '#28a745',
        warning: '#ffc107',
        dark: '#1a1a2e',
      },
      fontFamily: {
        sans: ['PT Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
