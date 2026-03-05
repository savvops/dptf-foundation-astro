# Client Guide: How to Edit Your Website

## 🎯 The Easy Way

**Your Edit Link:** `https://yourdomain.com/edit`

Bookmark this page! This is where you edit your website content.

---

## ✏️ Editing Content (Step by Step)

### Step 1: Go to Edit Page

Visit: **https://yourdomain.com/edit**

### Step 2: Find What to Edit

Click any folder:
- **Homepage** → Edit hero text, stats, etc.
- **About** → Edit board members, story
- **Programs** → Edit your programs
- **FAQ** → Edit questions & answers

### Step 3: Open the File

1. Click the folder name (e.g., "Homepage Sections")
2. You'll see a list of files on GitHub
3. Click the file you want to edit
4. Click the **✏️ pencil icon** (top right)

### Step 4: Make Changes

Edit the text between quotes:

```json
{
  "title": "EDIT THIS TEXT",
  "description": "Edit this text too"
}
```

### Step 5: Save Changes

1. Scroll down
2. Click **"Commit changes..."**
3. Click **"Commit changes"** (green button)

### Step 6: Wait

Your website updates automatically in **1-2 minutes**.

Refresh your website to see changes.

---

## 🖼️ Adding Images

### Upload New Image

1. Go to: https://github.com/savvops/dptf-foundation-astro/tree/main/public/images
2. Click **"Add file"** → **"Upload files"**
3. Drag your image(s) into the box
4. Click **"Commit changes"**

### Use Image in Content

After uploading, edit a content file and add:

```json
{
  "image": "/images/your-image-name.jpg"
}
```

### Image Tips

- **Size:** Make images smaller than 1MB
- **Name:** Use simple names (`photo.jpg`, not `My Photo (1).jpg`)
- **Folder:** Upload to `/images/members/` for board photos

---

## 🆘 Common Problems

### "I don't see the pencil icon"

- You need to be logged into GitHub
- Check with your developer that you have access

### "Changes aren't showing"

1. Wait 2 minutes
2. Press **Ctrl+F5** (hard refresh)
3. Check you clicked "Commit changes"

### "I broke something"

Don't worry! Contact your developer - GitHub saves all versions.

---

## 📞 Need Help?

Contact your developer with:
- What you were trying to do
- What went wrong
- Screenshot if possible

---

## 💡 Pro Tips

1. **Preview before saving** - Open your live site in another tab
2. **Change one thing at a time** - Easier to troubleshoot
3. **Keep images small** - Faster website = happier visitors
4. **Use simple file names** - No spaces or special characters

---

**Remember:** https://yourdomain.com/edit

*That's your control panel!*
