# 🚀 Sarathi - Quick Start Guide

## सारथी - हाथ में फ़ोन, हर काम डन!

### ⚡ 3-Step Setup

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Create Asset Placeholders
Run this command to create temporary SVG assets:
```bash
node create-assets.js
```

**Note:** For a production app, replace these SVG files with proper PNG images.

#### Step 3: Start the App
```bash
npm start
```

Then:
- Press `a` for Android
- Press `i` for iOS  
- Or scan the QR code with Expo Go app

---

## 📱 What You'll See

### 1. Splash Screen (2.5 seconds)
- Beautiful gradient background
- "सारथी" logo
- Bilingual slogan

### 2. Home Screen
- Current status dashboard
- Upcoming tasks
- Voice assistant button (bottom right)

### 3. Four Main Tabs

#### 🏠 Home
- View all pending tasks
- Quick access to urgent items
- Tap voice button for future AI features

#### 📄 Documents (Sarkari Vault)
- Tap `+` to add documents
- Choose type: Aadhaar, PAN, License, etc.
- Set expiry dates
- Get alerts 15 days before expiry

#### 💊 Health
- Tap `+` to add medicines
- Set dosage and time
- Check off when taken
- View health score

#### ⚙️ Settings
- Switch language (Hindi ↔ English)
- Toggle notifications
- View app info

---

## 🎯 Try These Features

### Test Document Tracking
1. Go to **Documents** tab
2. Tap the **+** button
3. Select **Aadhaar Card**
4. Enter a number (e.g., "1234 5678 9012")
5. Set expiry date 10 days from today (format: YYYY-MM-DD)
6. Save
7. Go to **Home** - see the alert!

### Test Medicine Reminder
1. Go to **Health** tab
2. Tap the **+** button
3. Enter medicine name (e.g., "Vitamin D")
4. Enter dosage (e.g., "1 tablet")
5. Select time (Morning/Afternoon/Evening/Night)
6. Save
7. Check the box to mark as taken

### Test Language Switch
1. Go to **Settings** tab
2. Tap on **हिंदी** or **English**
3. Watch entire UI change instantly!
4. Navigate through all screens

---

## 🎨 App Features

✅ **Bilingual** - Full Hindi & English support  
✅ **Document Vault** - Track 6 types of documents  
✅ **Bill Manager** - Never miss a payment  
✅ **Health Tracker** - Medicine reminders  
✅ **Voice Button** - Ready for AI integration  
✅ **Smart Alerts** - Expiry notifications  
✅ **Offline First** - All data saved locally  
✅ **Beautiful UI** - Modern, clean design  

---

## 🎨 Design Theme

**Colors:**
- 🔵 Deep Royal Blue (#1E3A8A) - Trust & Authority
- 🟡 Golden Yellow (#F59E0B) - Energy & Guidance

**Accessibility:**
- Large buttons
- High contrast text
- Simple navigation
- Intuitive icons

---

## 📱 Device Requirements

- **Android**: 5.0 (Lollipop) or higher
- **iOS**: 11.0 or higher
- **Expo Go** app (for testing)

---

## 🆘 Need Help?

### App won't start?
```bash
npm start -- --reset-cache
```

### Missing assets error?
Run the asset creation script:
```bash
node create-assets.js
```

### Data not saving?
- Check app permissions
- Restart the app
- Clear app data and try again

---

## 🚀 Next Steps

1. **Add Real Assets**: Replace SVG placeholders with PNG images
2. **Test on Device**: Install Expo Go and scan QR code
3. **Customize**: Modify colors, add features
4. **Backend**: Set up FastAPI server (see DEVELOPMENT.md)
5. **Deploy**: Build APK/IPA for distribution

---

## 📚 More Information

- **Full Setup**: See `SETUP_GUIDE.md`
- **Development**: See `DEVELOPMENT.md`
- **README**: See `README.md`

---

**Made with ❤️ for India**

**हाथ में फ़ोन, हर काम डन!**
