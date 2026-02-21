# 🚀 APK Build Guide - CreatorFormatLite

## Overview

This guide explains how to compile and generate an APK for your Android device from the CreatorFormatLite Expo project.

---

## Option 1: EAS Cloud Build (Recommended) ☁️

EAS Build is Expo's cloud service that compiles your app on their servers. This is the **easiest and most reliable** method.

### Prerequisites
- Node.js 20 or higher ✅ (you have this)
- Expo account (free at https://expo.dev)
- Project logged in to Expo

### Step 1: Login to Expo
```bash
npx expo login
# Enter your email and password
```

### Step 2: Build APK
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npx eas build --platform android
```

### Step 3: Monitor Build
```
Build is uploading to EAS servers...
Compiling Android APK (5-10 minutes)...
✅ Build complete!
```

### Step 4: Download APK
Visit: https://expo.dev/accounts/asoumail/projects/creator-format-lite

You'll see your build with a download link.

### Step 5: Install on Phone
**Option A: Direct APK Install**
```bash
# Download APK from EAS dashboard
# Then transfer to phone and tap to install
```

**Option B: Using ADB**
```bash
adb install -r /path/to/CreatorFormatLite.apk
```

---

## Option 2: Local Build (Advanced) 💻

Build the APK locally on your machine. This requires Android SDK setup.

### Prerequisites
- Android SDK installed
- JAVA_HOME configured
- Android NDK (optional)

### Step 1: Install Build Tools
```bash
# Install Android SDK components
sdkmanager "build-tools;34.0.0"
sdkmanager "platforms;android-34"
sdkmanager "ndk;26.1.10909125"
```

### Step 2: Prebuild Android Native Files
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npx expo prebuild --platform android --clean
```

### Step 3: Build APK
```bash
cd android
./gradlew assembleRelease
```

### Step 4: Find APK
```
app/build/outputs/apk/release/app-release.apk
```

### Step 5: Install
```bash
adb install -r app/build/outputs/apk/release/app-release.apk
```

---

## Option 3: EAS Local Build 🔧

Use EAS Build locally on your machine (faster, no cloud).

### Prerequisites
- Docker installed
- 10 GB free disk space

### Build
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npx eas build --platform android --local
```

---

## Comparison

| Method | Speed | Setup | Best For |
|--------|-------|-------|----------|
| **EAS Cloud** | 5-10 min | Easy | Everyone |
| **Local Build** | 15-30 min | Hard | CI/CD systems |
| **EAS Local** | 10-15 min | Medium | Offline building |

---

## Recommended Flow

### First Time
1. Use **EAS Cloud Build** (easiest)
2. Download APK from dashboard
3. Install on phone

### Quick Testing
1. Use **EAS Cloud Build**
2. Use QR code to test immediately on phone
3. Download APK when ready to install

### Production
1. Use **EAS Cloud Build** for reliability
2. Set up Git integration for automatic builds

---

## APK Installation Methods

### Method 1: Direct Tap (Easiest)
1. Download APK to phone
2. Open file manager
3. Tap the APK file
4. Choose "Install"

### Method 2: ADB (Command Line)
```bash
# Requires Android SDK tools installed
adb install -r /path/to/app.apk
```

### Method 3: Scrcpy (Mirror Phone to PC)
```bash
# Show phone screen on computer
scrcpy

# Drag and drop APK into window
```

---

## Build Troubleshooting

### Build Fails with Gradle Error
**Solution**:
```bash
# Clear Gradle cache
rm -rf ~/.gradle/caches
# Rebuild
npx eas build --platform android --clear-cache
```

### Build Slow or Timeout
**Solution**:
```bash
# Increase memory
export GRADLE_OPTS="-Xmx4g -XX:+UseG1GC"
# Rebuild
npx eas build --platform android
```

### APK Won't Install on Phone
**Solution**:
```bash
# Check Android version requirement
# If phone is older, may need to adjust targetSdkVersion in app.json

# Try uninstalling previous version first
adb uninstall com.creatorformatlite.app
adb install -r app.apk
```

### Can't Login to Expo
**Solution**:
```bash
# Clear login cache
npx expo logout
# Login again
npx expo login
```

---

## QR Code Testing (Instant)

During EAS build, you can test immediately:

```bash
npx eas build --platform android --wait
# Scan QR code with Expo Go app
# Test immediately without installing
```

---

## File Locations

| Item | Location |
|------|----------|
| Project | `/Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite` |
| Android folder | `./android/` |
| APK (local) | `./android/app/build/outputs/apk/release/` |
| EAS Builds | https://expo.dev/accounts/asoumail/projects/creator-format-lite |
| Package name | `com.creatorformatlite.app` |

---

## Post-Build

### Verify APK
```bash
# Check APK info
aapt dump badging /path/to/app.apk | grep package
```

### Share APK
```bash
# Upload to cloud storage or QR code service
# Share link with friends to test
```

### Update After Changes
```bash
# Make changes to code
# Rebuild with:
npx eas build --platform android --message "Fixed bug: ..."
```

---

## What Gets Built

The APK includes:
- ✅ Your React Native code
- ✅ All dependencies (React, Expo, etc.)
- ✅ Assets (images, fonts, etc.)
- ✅ Native modules (permissions, file system, etc.)
- ✅ Configuration (app.json settings)

---

## Next Steps

1. **Run Build**: `npx eas build --platform android`
2. **Wait 5-10 minutes** for build to complete
3. **Download APK** from EAS dashboard
4. **Install on phone**: Download and tap, or use ADB
5. **Test the app** on your Android device
6. **Share with others** if desired

---

## Support

If you encounter issues:

1. **Check build logs** on EAS dashboard
2. **Run `npx eas build --platform android --verbose`** for details
3. **Check console logs** with `npx eas build:view --platform android`
4. **Read error messages** - they're usually helpful

---

## Quick Commands

```bash
# Check project setup
npx expo doctor

# Build APK (EAS Cloud)
npx eas build --platform android

# Build locally
npx eas build --platform android --local

# View build history
npx eas build:list

# View specific build
npx eas build:view <BUILD_ID>

# Download APK
# (Get link from EAS dashboard)

# Install APK
adb install -r app.apk

# Uninstall app
adb uninstall com.creatorformatlite.app
```

---

**Status**: Ready to build! 🚀

Start with: `npx eas build --platform android`

