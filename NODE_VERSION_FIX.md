# ⚠️ Node.js Version Compatibility Issue

## Problem

You're using **Node.js v24.14.0**, which is too new for Expo SDK 50.

The error:
```
Error: ENOENT: no such file or directory, mkdir 'node:sea'
```

This happens because Node.js 24 has breaking changes that Expo doesn't support yet.

---

## ✅ Solution: Downgrade to Node.js 20 LTS

### Option 1: Use NVM (Node Version Manager) - Recommended

#### Install NVM for Windows
1. Download: https://github.com/coreybutler/nvm-windows/releases
2. Install `nvm-setup.exe`
3. Open new PowerShell/CMD

#### Install and Use Node.js 20
```bash
# Install Node.js 20 LTS
nvm install 20

# Use Node.js 20
nvm use 20

# Verify version
node --version
# Should show: v20.x.x
```

#### Then reinstall dependencies
```bash
cd "J:/सारथी हाथ में फ़ोन, हर काम डन!"
Remove-Item -Recurse -Force node_modules
npm install
npm start
```

---

### Option 2: Uninstall Node 24 and Install Node 20

#### Step 1: Uninstall Current Node.js
1. Open **Settings** → **Apps** → **Installed apps**
2. Find **Node.js**
3. Click **Uninstall**

#### Step 2: Install Node.js 20 LTS
1. Go to: https://nodejs.org/
2. Download **20.x LTS** (NOT Current/Latest)
3. Install it
4. Restart your computer

#### Step 3: Reinstall Project Dependencies
```bash
cd "J:/सारथी हाथ में फ़ोन, हर काम डन!"
Remove-Item -Recurse -Force node_modules
npm install
npm start
```

---

### Option 3: Quick Workaround (May not work perfectly)

Try using the `--legacy-peer-deps` flag:

```bash
# Clean install
Remove-Item -Recurse -Force node_modules
npm install --legacy-peer-deps

# Start with cache clear
npm start -- --clear
```

---

## 🎯 Recommended Node.js Versions for Expo

| Expo SDK | Node.js Version |
|----------|----------------|
| SDK 50   | 18.x or 20.x LTS |
| SDK 51   | 20.x LTS |

**Current LTS (Long Term Support):** Node.js 20.x

---

## 🔍 Check Your Node Version

```bash
node --version
```

Should show: `v20.x.x` or `v18.x.x`

---

## 📋 After Fixing Node Version

Once you have Node.js 20 installed:

```bash
# 1. Navigate to project
cd "J:/सारथी हाथ में फ़ोन, हर काम डन!"

# 2. Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

# 3. Start the app
npm start
```

---

## 🚀 Expected Output

After fixing, you should see:

```
Starting project at J:\सारथी हाथ में फ़ोन, हर काम डन!

Starting Metro Bundler
› Metro waiting on exp://192.168.x.x:8081

› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web
```

---

## 💡 Why This Happens

- **Node.js 24** is very new (released recently)
- **Expo SDK 50** was built for Node.js 18/20
- Node.js 24 has breaking changes in:
  - File system APIs
  - Module resolution
  - Internal APIs that Expo uses

---

## 🔗 Helpful Links

- **NVM for Windows:** https://github.com/coreybutler/nvm-windows
- **Node.js Downloads:** https://nodejs.org/
- **Expo Requirements:** https://docs.expo.dev/get-started/installation/
- **Node.js LTS Schedule:** https://github.com/nodejs/release#release-schedule

---

**सारथी - हाथ में फ़ोन, हर काम डन!**

*Once you downgrade to Node.js 20, everything will work perfectly!* 🚀
