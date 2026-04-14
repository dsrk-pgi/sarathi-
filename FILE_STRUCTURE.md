# Sarathi - File Structure

```
J:/सारथी हाथ में फ़ोन, हर काम डन!/
│
├── 📱 App.js                          # Main entry point
│
├── 📦 package.json                    # Dependencies & scripts
├── ⚙️ app.json                        # Expo configuration
├── 🔧 babel.config.js                 # Babel configuration
├── 🚫 .gitignore                      # Git ignore rules
│
├── 🎨 assets/                         # Static assets
│   ├── README.md                      # Asset requirements
│   ├── icon.png                       # App icon (1024x1024)
│   ├── splash.png                     # Splash screen (1242x2436)
│   ├── adaptive-icon.png              # Android icon (1024x1024)
│   ├── favicon.png                    # Web favicon (48x48)
│   └── notification-icon.png          # Notification icon (96x96)
│
├── 📂 src/                            # Source code
│   │
│   ├── 🧩 components/                 # Reusable UI components
│   │   ├── ActionCard.js              # Task card with icon & urgency
│   │   ├── StatusCard.js              # Gradient metric card
│   │   └── VoiceButton.js             # Animated voice assistant button
│   │
│   ├── 📱 screens/                    # Main app screens
│   │   ├── SplashScreen.js            # App splash screen (2.5s)
│   │   ├── HomeScreen.js              # Dashboard with tasks
│   │   ├── DocumentsScreen.js         # Sarkari Vault
│   │   ├── HealthScreen.js            # Medicine tracker
│   │   └── SettingsScreen.js          # App settings
│   │
│   ├── 🧭 navigation/                 # Navigation setup
│   │   └── AppNavigator.js            # Bottom tab navigation
│   │
│   ├── 🔄 context/                    # State management
│   │   ├── LanguageContext.js         # Language & translations
│   │   └── DataContext.js             # App data (docs, bills, meds)
│   │
│   ├── 🛠️ utils/                      # Utility functions
│   │   ├── notifications.js           # Notification scheduling
│   │   └── dateHelpers.js             # Date formatting & calculations
│   │
│   ├── 🎨 constants/                  # Constants & theme
│   │   └── theme.js                   # Colors, sizes, shadows
│   │
│   └── 🌐 locales/                    # Language files
│       ├── hi.js                      # Hindi translations
│       └── en.js                      # English translations
│
├── 📚 Documentation/
│   ├── README.md                      # Project overview
│   ├── QUICKSTART.md                  # Quick start guide (3 steps)
│   ├── SETUP_GUIDE.md                 # Detailed setup instructions
│   ├── DEVELOPMENT.md                 # Developer guide
│   ├── PROJECT_SUMMARY.md             # Complete project summary
│   ├── FEATURES.md                    # Feature checklist
│   └── FILE_STRUCTURE.md              # This file
│
└── 🔨 Scripts/
    └── create-assets.js               # Asset placeholder generator

```

---

## 📁 Detailed File Descriptions

### Root Level

#### `App.js`
**Purpose:** Application entry point  
**Key Features:**
- Splash screen state management
- Provider wrappers (Language, Data)
- Navigation container setup
- Status bar configuration

#### `package.json`
**Purpose:** Project configuration  
**Contains:**
- Dependencies (React Native, Expo, Navigation)
- Scripts (start, android, ios, web)
- Project metadata

#### `app.json`
**Purpose:** Expo configuration  
**Contains:**
- App name and slug
- Icon and splash screen paths
- Platform-specific settings
- Notification configuration

---

### Source Code (`src/`)

#### Components (`src/components/`)

**ActionCard.js**
```javascript
// Reusable card for displaying tasks
Props:
  - icon: Icon name
  - title: Main text
  - subtitle: Secondary text
  - color: Theme color
  - urgent: Boolean for urgency
  - onPress: Tap handler
```

**StatusCard.js**
```javascript
// Gradient card for metrics
Props:
  - title: Card title
  - value: Metric value
  - icon: Optional icon
  - gradient: Color array
```

**VoiceButton.js**
```javascript
// Animated floating action button
Props:
  - onPress: Tap handler
Features:
  - Scale animation
  - Shadow effect
```

---

#### Screens (`src/screens/`)

**SplashScreen.js**
- Gradient background
- App branding
- Auto-dismiss timer
- Bilingual display

**HomeScreen.js**
- Dashboard overview
- Task aggregation
- Action cards
- Voice button
- Real-time updates

**DocumentsScreen.js**
- Document list
- Add/Delete operations
- Expiry tracking
- Modal form
- Type selection

**HealthScreen.js**
- Medicine list
- Time categorization
- Completion tracking
- Health score
- Modal form

**SettingsScreen.js**
- Language toggle
- Notification settings
- App information
- Links to policies

---

#### Navigation (`src/navigation/`)

**AppNavigator.js**
- Bottom tab setup
- 4 main tabs
- Icon configuration
- Header styling
- Translation integration

---

#### Context (`src/context/`)

**LanguageContext.js**
```javascript
State:
  - language: 'hi' | 'en'
  - translations: Object

Methods:
  - changeLanguage(lang)
  - t(key): Translation function
  - loadLanguage(): Load from storage
```

**DataContext.js**
```javascript
State:
  - documents: Array
  - bills: Array
  - medicines: Array

Methods:
  - addDocument(doc)
  - updateDocument(id, doc)
  - deleteDocument(id)
  - addBill(bill)
  - updateBill(id, bill)
  - deleteBill(id)
  - addMedicine(med)
  - updateMedicine(id, med)
  - deleteMedicine(id)
```

---

#### Utils (`src/utils/`)

**notifications.js**
```javascript
Functions:
  - requestNotificationPermissions()
  - scheduleDocumentExpiryNotification()
  - scheduleBillReminder()
  - scheduleMedicineReminder()
  - cancelAllNotifications()
```

**dateHelpers.js**
```javascript
Functions:
  - formatDate(dateString)
  - getDaysUntil(dateString)
  - isExpired(dateString)
  - isExpiringSoon(dateString, days)
  - formatCurrency(amount)
```

---

#### Constants (`src/constants/`)

**theme.js**
```javascript
Exports:
  - COLORS: Color palette
  - SIZES: Spacing system
  - FONTS: Font families
  - SHADOWS: Shadow presets
```

---

#### Locales (`src/locales/`)

**hi.js** (Hindi)
```javascript
Sections:
  - common: General terms
  - navigation: Tab labels
  - home: Dashboard text
  - documents: Vault text
  - bills: Bill manager text
  - health: Health tracker text
  - settings: Settings text
  - voice: Voice assistant text
```

**en.js** (English)
- Same structure as hi.js
- English translations

---

## 📊 File Statistics

### Total Files: 30+

**By Type:**
- JavaScript: 18 files
- Markdown: 7 files
- JSON: 2 files
- Config: 2 files
- Assets: 5 files (to be created)

**By Category:**
- Components: 3 files
- Screens: 5 files
- Context: 2 files
- Utils: 2 files
- Locales: 2 files
- Documentation: 7 files
- Configuration: 4 files

**Lines of Code:**
- JavaScript: ~2,500 lines
- Markdown: ~2,000 lines
- Total: ~4,500 lines

---

## 🎯 Key File Relationships

```
App.js
  ├─→ LanguageContext (wraps entire app)
  │     └─→ hi.js, en.js (translations)
  │
  ├─→ DataContext (wraps entire app)
  │     └─→ AsyncStorage (persistence)
  │
  └─→ AppNavigator
        ├─→ HomeScreen
        │     ├─→ ActionCard
        │     ├─→ StatusCard
        │     ├─→ VoiceButton
        │     └─→ DataContext (read)
        │
        ├─→ DocumentsScreen
        │     └─→ DataContext (CRUD)
        │
        ├─→ HealthScreen
        │     └─→ DataContext (CRUD)
        │
        └─→ SettingsScreen
              └─→ LanguageContext (change language)
```

---

## 🔍 Import Patterns

### Common Imports
```javascript
// React & React Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Context
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

// Theme
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

// Components
import ActionCard from '../components/ActionCard';
```

---

## 📦 Asset Requirements

### Required Files (in `assets/`)
1. **icon.png** - 1024x1024px
2. **splash.png** - 1242x2436px
3. **adaptive-icon.png** - 1024x1024px
4. **favicon.png** - 48x48px
5. **notification-icon.png** - 96x96px

### Design Specs
- Primary color: #1E3A8A
- Secondary color: #F59E0B
- Format: PNG with transparency
- Style: Modern, clean, trustworthy

---

## 🚀 Quick Navigation

**Want to:**
- **Start the app?** → See `QUICKSTART.md`
- **Understand features?** → See `FEATURES.md`
- **Learn development?** → See `DEVELOPMENT.md`
- **Get overview?** → See `README.md`
- **See full details?** → See `PROJECT_SUMMARY.md`

---

**सारथी - हाथ में फ़ोन, हर काम डन!**

*Made with ❤️ for India*
