# Sarathi Development Guide

## 🎯 Project Overview

**Sarathi (सारथी)** is a high-utility mobile app designed for the Indian masses with the slogan "हाथ में फ़ोन, हर काम डन!" (Phone in hand, every task done!).

## 📋 Current Implementation Status

### ✅ Completed Features

#### Phase 1: Project Setup
- React Native Expo project initialized
- Complete folder structure
- Package dependencies configured
- Babel and build configuration

#### Phase 2: Design System
- **Theme Colors**:
  - Primary: Deep Royal Blue (#1E3A8A)
  - Secondary: Golden Yellow (#F59E0B)
  - Background: Light Gray (#F8FAFC)
- Custom components with consistent styling
- Shadow and spacing system
- Responsive layout

#### Phase 3: Bilingual Support
- Complete Hindi and English translations
- Language Context with AsyncStorage persistence
- Dynamic language switching
- Translation function (`t()`) for all UI elements

#### Phase 4: Navigation
- Bottom tab navigation (4 tabs)
- Custom tab bar styling
- Screen transitions
- Deep linking ready

#### Phase 5: Core Screens

**1. Home Screen**
- Current status dashboard
- Upcoming tasks aggregation
- Action cards with urgency indicators
- Voice assistant button (floating)
- Real-time data from all modules

**2. Documents Screen (Sarkari Vault)**
- Document type selection (6 types)
- Document number storage
- Expiry date tracking
- Visual expiry indicators
- Add/Delete functionality
- Color-coded status (expired, expiring soon, valid)

**3. Health Screen**
- Medicine list with checkbox
- Time-based categorization (morning, afternoon, evening, night)
- Dosage tracking
- Health score display
- Add/Delete/Update medicines
- Visual completion status

**4. Settings Screen**
- Language toggle (Hindi/English)
- Notification preferences
- App information
- Version display
- Privacy and terms placeholders

**5. Splash Screen**
- Gradient background
- App logo and name
- Bilingual slogan
- Auto-dismiss after 2.5 seconds

### 🔧 Technical Implementation

#### State Management
- **LanguageContext**: Manages app language and translations
- **DataContext**: Manages all app data (documents, bills, medicines)
- AsyncStorage for data persistence

#### Components
- **ActionCard**: Reusable card for tasks with urgency indicators
- **StatusCard**: Gradient card for displaying metrics
- **VoiceButton**: Animated floating action button

#### Utilities
- **notifications.js**: Notification scheduling and permissions
- **dateHelpers.js**: Date formatting and calculations

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd "J:/सारथी हाथ में फ़ोन, हर काम डन!"
npm install
```

### 2. Create Asset Files

**Option A: Use Placeholder Script**
```bash
node create-assets.js
```
This creates SVG placeholders. You'll need to convert them to PNG.

**Option B: Create Manually**
Create these files in the `assets/` folder:
- `icon.png` (1024x1024)
- `splash.png` (1242x2436)
- `adaptive-icon.png` (1024x1024)
- `favicon.png` (48x48)
- `notification-icon.png` (96x96)

Use the app colors:
- Background: #1E3A8A (Deep Royal Blue)
- Text/Icon: #F59E0B (Golden Yellow)

### 3. Start Development Server
```bash
npm start
```

### 4. Run on Device
- **Android**: Press `a` or run `npm run android`
- **iOS**: Press `i` or run `npm run ios`
- **Web**: Press `w` or run `npm run web`

Or scan the QR code with Expo Go app.

## 📱 Testing the App

### Test Scenarios

#### 1. Language Switching
1. Open Settings
2. Toggle between Hindi and English
3. Navigate through all screens
4. Verify all text changes

#### 2. Document Management
1. Go to Documents tab
2. Add a new document (e.g., Aadhaar)
3. Set expiry date within 15 days
4. Check Home screen for alert
5. Delete document

#### 3. Health Tracking
1. Go to Health tab
2. Add a medicine with dosage
3. Select time (morning/afternoon/evening/night)
4. Mark as taken
5. Verify status change

#### 4. Data Persistence
1. Add documents, bills, medicines
2. Close app completely
3. Reopen app
4. Verify all data is retained

## 🔮 Future Enhancements

### Backend Integration (Python FastAPI)

```python
# Example FastAPI structure
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Document(BaseModel):
    type: str
    number: str
    expiry_date: str

@app.post("/documents/")
async def create_document(document: Document):
    # Store in database
    return {"status": "success"}

@app.get("/documents/expiring")
async def get_expiring_documents():
    # Return documents expiring soon
    return {"documents": []}
```

### AI Voice Assistant

**Features to Implement:**
- Speech-to-text (Hindi support)
- Natural language processing
- Voice commands:
  - "अगला बिल कब भरना है?" (When is the next bill due?)
  - "मेरी दवा का समय?" (When should I take my medicine?)
  - "कौन से दस्तावेज़ समाप्त हो रहे हैं?" (Which documents are expiring?)

**Libraries:**
- `expo-speech` (already included)
- `@react-native-voice/voice`
- Backend: Python with `speech_recognition`

### SMS Bill Detection

**Approach:**
1. Request SMS permissions
2. Parse bill-related SMS
3. Extract amount, due date, type
4. Auto-add to bill manager

**Libraries:**
- `react-native-sms` or `expo-sms`
- Backend: Python regex patterns for Indian bill formats

### Cloud Sync

**Options:**
1. **Supabase** (Recommended)
   - PostgreSQL database
   - Real-time subscriptions
   - Built-in auth
   - Free tier available

2. **Firebase**
   - Firestore database
   - Cloud messaging
   - Analytics
   - Authentication

### Notification System

Already implemented in `src/utils/notifications.js`:
- Document expiry (15 days before)
- Bill reminders (3 days before)
- Medicine reminders (time-based)

**To Activate:**
```javascript
import { requestNotificationPermissions } from './src/utils/notifications';

// In App.js or relevant component
useEffect(() => {
  requestNotificationPermissions();
}, []);
```

## 🎨 Design Guidelines

### Accessibility
- Minimum touch target: 44x44 pixels
- High contrast ratios (WCAG AA compliant)
- Large, readable fonts (minimum 14px)
- Clear visual hierarchy

### Colors
```javascript
Primary: #1E3A8A    // Trust, authority
Secondary: #F59E0B  // Energy, guidance
Success: #10B981    // Positive actions
Warning: #F59E0B    // Attention needed
Danger: #EF4444     // Urgent actions
```

### Typography
- Headers: 20-24px, Bold
- Body: 14-16px, Regular
- Captions: 12-14px, Regular
- Support for Devanagari script (Hindi)

## 📊 Data Structure

### Documents
```javascript
{
  id: "unique_id",
  type: "Aadhaar Card",
  number: "1234 5678 9012",
  expiryDate: "2025-12-31",
  issueDate: "2020-01-01" // optional
}
```

### Bills
```javascript
{
  id: "unique_id",
  type: "Electricity",
  amount: 1500,
  dueDate: "2024-05-15",
  paid: false
}
```

### Medicines
```javascript
{
  id: "unique_id",
  name: "Paracetamol",
  dosage: "500mg",
  time: "morning",
  taken: false
}
```

## 🐛 Known Issues & Solutions

### Issue: Assets not loading
**Solution:** Ensure all PNG files exist in `assets/` folder with exact names.

### Issue: Language not persisting
**Solution:** AsyncStorage might need permissions. Check app permissions.

### Issue: Navigation errors
**Solution:** Clear Metro cache:
```bash
npm start -- --reset-cache
```

## 📚 Resources

### Documentation
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Design Tools
- [Figma](https://www.figma.com) - UI/UX design
- [Canva](https://www.canva.com) - Quick graphics
- [Coolors](https://coolors.co) - Color palettes

### Testing
- [Expo Go](https://expo.dev/client) - Test on real devices
- [Android Studio](https://developer.android.com/studio) - Android emulator
- [Xcode](https://developer.apple.com/xcode/) - iOS simulator

## 🤝 Contributing

### Code Style
- Use functional components with hooks
- Follow ESLint rules
- Add comments for complex logic
- Keep components under 300 lines

### Commit Messages
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring

## 📄 License

MIT License - Free to use and modify

---

**Made with ❤️ for India**

**सारथी - हाथ में फ़ोन, हर काम डन!**
