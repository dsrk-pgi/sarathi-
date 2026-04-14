# Sarathi - सारथी

**हाथ में फ़ोन, हर काम डन!**

A high-utility mobile app designed for the Indian masses, helping manage daily tasks, documents, bills, and health.

## Features

- 📱 **Bilingual Support**: Hindi and English
- 📄 **Sarkari Vault**: Secure document storage with expiry tracking
- 💡 **Smart Bill Manager**: Track electricity, water, and mobile bills
- 🏥 **Health Tracker**: Medicine reminders and health monitoring
- 🎤 **AI Voice Assistant**: Voice commands in Hindi
- 🎨 **Modern UI**: Deep Royal Blue and Golden Yellow theme

## Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation
- **State Management**: Context API
- **Notifications**: Expo Notifications
- **Storage**: AsyncStorage

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on Android/iOS:
   ```bash
   npm run android
   npm run ios
   ```

## Project Structure

```
sarathi-app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # App screens
│   ├── navigation/      # Navigation configuration
│   ├── context/         # Context providers
│   ├── utils/           # Utility functions
│   ├── constants/       # Constants and theme
│   └── locales/         # Language files
├── assets/              # Images and fonts
└── App.js              # Entry point
```

## License

MIT
