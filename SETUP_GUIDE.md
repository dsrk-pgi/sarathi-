# Sarathi App - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (will be installed automatically)
- Android Studio (for Android) or Xcode (for iOS)

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create Asset Files**
   
   Before running the app, you need to create placeholder images in the `assets/` directory:
   
   - `icon.png` (1024x1024)
   - `splash.png` (1242x2436)
   - `adaptive-icon.png` (1024x1024)
   - `favicon.png` (48x48)
   - `notification-icon.png` (96x96)
   
   **Quick Solution**: You can use solid color images with the app's primary color (#1E3A8A) as placeholders.

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Run on Device/Emulator**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app on your phone

## 📱 Features Implemented

### ✅ Phase 1-5 Complete

- [x] React Native Expo project initialized
- [x] Folder structure created
- [x] Splash screen with logo and slogan
- [x] Bottom tab navigation (Home, Documents, Health, Settings)
- [x] Bilingual support (Hindi/English toggle)
- [x] Home screen with action cards
- [x] Sarkari Vault for document management
- [x] Smart Bill Manager (UI ready)
- [x] Health Tracker with medicine reminders
- [x] Voice Assistant button (placeholder)

### 🎨 Design System

**Colors:**
- Primary: Deep Royal Blue (#1E3A8A)
- Secondary: Golden Yellow (#F59E0B)
- Background: Light Gray (#F8FAFC)

**Typography:**
- Large buttons for accessibility
- High-contrast text
- Support for Hindi and English fonts

### 🔧 Technical Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **State Management**: Context API
- **Storage**: AsyncStorage (local data persistence)
- **Notifications**: Expo Notifications
- **UI Components**: Custom components with Expo Vector Icons

## 📂 Project Structure

```
sarathi-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ActionCard.js
│   │   ├── StatusCard.js
│   │   └── VoiceButton.js
│   ├── screens/             # App screens
│   │   ├── HomeScreen.js
│   │   ├── DocumentsScreen.js
│   │   ├── HealthScreen.js
│   │   ├── SettingsScreen.js
│   │   └── SplashScreen.js
│   ├── navigation/          # Navigation setup
│   │   └── AppNavigator.js
│   ├── context/             # Context providers
│   │   ├── LanguageContext.js
│   │   └── DataContext.js
│   ├── utils/               # Utility functions
│   │   ├── notifications.js
│   │   └── dateHelpers.js
│   ├── constants/           # Theme and constants
│   │   └── theme.js
│   └── locales/             # Language files
│       ├── hi.js
│       └── en.js
├── assets/                  # Images and fonts
├── App.js                   # Entry point
├── package.json
└── app.json
```

## 🎯 Key Features

### 1. Dashboard (Home Screen)
- Shows upcoming deadlines
- Action cards for pending tasks
- Voice assistant button
- Real-time status updates

### 2. Sarkari Vault (Documents Screen)
- Store Aadhaar, PAN, Driving License, etc.
- Track expiry dates
- Visual indicators for expiring documents
- 15-day advance notifications

### 3. Smart Bill Manager
- Track electricity, water, mobile bills
- Due date reminders
- Payment status tracking

### 4. Health Tracker
- Medicine reminders
- Dosage tracking
- Time-based notifications
- Health score display

### 5. Settings
- Language toggle (Hindi/English)
- Notification preferences
- App information

## 🔔 Notifications

The app includes notification support for:
- Document expiry (15 days before)
- Bill payment reminders (3 days before)
- Medicine reminders (time-based)

## 🌐 Bilingual Support

Complete UI translation between:
- **Hindi (हिंदी)** - Default
- **English** - Secondary

Language preference is saved and persists across app restarts.

## 🚧 Next Steps (Future Enhancements)

1. **Backend Integration**
   - Set up FastAPI backend
   - Implement SMS parsing for bill detection
   - Add cloud sync with Supabase/Firebase

2. **AI Voice Assistant**
   - Integrate speech recognition
   - Add Hindi voice commands
   - Implement natural language processing

3. **Advanced Features**
   - OCR for document scanning
   - Bill payment integration
   - Calendar integration
   - Backup and restore

4. **UI Enhancements**
   - Add animations
   - Implement dark mode
   - Add more accessibility features

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler errors**
   ```bash
   npm start -- --reset-cache
   ```

2. **Asset loading issues**
   - Ensure all required images are in `assets/` folder
   - Check file names match exactly

3. **Navigation errors**
   - Clear cache and reinstall dependencies
   ```bash
   rm -rf node_modules
   npm install
   ```

## 📝 Development Tips

- Use `npm start` for development
- Test on both Android and iOS
- Use Expo Go app for quick testing
- Check console for errors and warnings

## 🤝 Contributing

This is a personal project designed for the Indian masses. Suggestions and improvements are welcome!

## 📄 License

MIT License - Feel free to use and modify for your needs.

---

**Made with ❤️ for India**
**सारथी - हाथ में फ़ोन, हर काम डन!**
