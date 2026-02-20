# INSTALLATION & BUILD INSTRUCTIONS

## 📍 Project Location
```
/Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
```

## ⚡ QUICK START (3 STEPS)

### 1️⃣ Install Dependencies
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npm install
```

### 2️⃣ Start Development Server
```bash
npm start
```

You'll see:
```
› Press s › switch to development build
› Press a › open Android
› Press i › open iOS simulator
› Press w › open web
› Press r › reload app
› Press m › toggle menu
```

### 3️⃣ Run on Device
Press `i` for iOS or `a` for Android

---

## 🏗️ BUILD INSTRUCTIONS

### iOS Build (App Store)

#### Option 1: Using EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Create Expo account at https://expo.dev/signup
# Then login
eas login

# Build for iOS
eas build --platform ios

# When complete, submit to App Store
```

#### Option 2: Local Build with Xcode
```bash
# Generate iOS project
npx expo prebuild --platform ios

# Open in Xcode
open ios/CreatorFormatLite.xcworkspace

# Build and run from Xcode
```

#### Option 3: Testing on Simulator
```bash
eas build --platform ios --local
```

### Android Build (Google Play)

#### Option 1: Using EAS Build (Recommended)
```bash
# Build for Android
eas build --platform android

# When complete, submit to Google Play Console
```

#### Option 2: Local Build
```bash
# Build APK for testing
eas build --platform android --local

# Or generate Android project
npx expo prebuild --platform android
```

---

## 📱 FIRST TIME SETUP

### Prerequisites Check
```bash
# Node.js (18+)
node --version

# npm (8+)
npm --version

# Expo CLI
expo --version
```

### Install Expo CLI (if needed)
```bash
npm install -g expo-cli
```

### For iOS Development
- Install Xcode from App Store
- Install iOS simulator
- Install CocoaPods: `sudo gem install cocoapods`

### For Android Development
- Install Android Studio
- Set up Android emulator
- Configure Android SDK

---

## 🔧 DEVELOPMENT WORKFLOW

### Start Expo Dev Server
```bash
npm start
```

### Test on iOS Simulator
```bash
npm run ios
# or in Expo menu: press i
```

### Test on Android Emulator
```bash
npm run android
# or in Expo menu: press a
```

### Hot Reload
Press `r` in terminal to reload app while running

### Debug
- Use React Native Debugger
- Check console output in terminal
- Use Chrome DevTools (press `j` in Expo)

---

## 📦 DEPENDENCIES INSTALLED

```json
{
  "@react-navigation/native": "^7.1.28",
  "@react-navigation/stack": "^7.7.1",
  "expo": "~54.0.33",
  "expo-file-system": "^18.0.10",
  "expo-image-manipulator": "^14.0.8",
  "expo-image-picker": "^17.0.10",
  "expo-media-library": "^18.2.1",
  "expo-status-bar": "~3.0.9",
  "ffmpeg-kit-react-native": "^6.0.2",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0"
}
```

All dependencies are already installed in `node_modules/`

---

## 🚀 PRODUCTION BUILD CHECKLIST

Before building for production:

- [ ] Test on iOS simulator
- [ ] Test on Android emulator
- [ ] Check all screens work
- [ ] Verify permissions display correctly
- [ ] Test media picker functionality
- [ ] Test image processing
- [ ] Test video processing
- [ ] Test export functionality
- [ ] Check no console errors
- [ ] Review UI on different screen sizes

---

## 🔐 APP SIGNING & DISTRIBUTION

### iOS Distribution

1. **Create Apple Developer Account**
   - Visit https://developer.apple.com
   - Enroll in Apple Developer Program ($99/year)

2. **Configure EAS Build**
   ```bash
   eas build --platform ios --auto-submit
   ```

3. **Submit to App Store**
   - Use App Store Connect
   - Submit for review
   - Wait for approval (1-3 days typically)

### Android Distribution

1. **Create Google Play Developer Account**
   - Visit https://play.google.com/console
   - Pay one-time fee ($25)

2. **Configure Signing**
   ```bash
   eas build --platform android
   ```

3. **Submit to Google Play**
   - Upload APK/AAB to Google Play Console
   - Fill in app details
   - Submit for review (typically approved in hours)

---

## 🐛 TROUBLESHOOTING

### "expo not found"
```bash
npm install -g expo-cli
```

### "Device not showing in simulator list"
```bash
# Restart Xcode or Android Studio
# Or use: xcrun simctl list
```

### "Permission denied" on iOS
- Check app.json permissions plugins
- Rebuild with: `npx expo prebuild --clean`

### "FFmpeg not working"
```bash
# Reinstall ffmpeg-kit
npm uninstall ffmpeg-kit-react-native
npm install ffmpeg-kit-react-native@latest
```

### "TypeScript errors"
```bash
# Check types
npx tsc --noEmit

# Clear cache and rebuild
rm -rf node_modules .expo
npm install
```

---

## 📊 BUILD SIZES

| Platform | Size | Type |
|----------|------|------|
| iOS | ~150MB | App |
| Android | ~100MB | APK |

---

## ⏱️ BUILD TIMES

| Task | Time |
|------|------|
| npm install | 5-10 min |
| npm start | 20-30 sec |
| npm run ios | 1-2 min |
| npm run android | 2-3 min |
| eas build (remote) | 15-30 min |
| eas build (local) | 10-20 min |

---

## 📝 APP CONFIGURATION

All configuration is in `app.json`:
- App name: "CreatorFormat Lite"
- Bundle ID (iOS): com.creatorformatlite.app
- Package (Android): com.creatorformatlite.app
- Version: 1.0.0
- Permissions: Image picker, Media library

---

## 🎯 NEXT STEPS

1. ✅ Run locally: `npm start`
2. ✅ Test on simulators: `npm run ios/android`
3. ✅ Create Expo account: https://expo.dev
4. ✅ Build for production: `eas build`
5. ✅ Submit to stores

---

## 📚 USEFUL COMMANDS REFERENCE

```bash
# Development
npm start                          # Start Expo server
npm run ios                        # iOS Simulator
npm run android                    # Android Emulator
npx expo prebuild                  # Generate native projects

# Building
eas build --platform ios           # iOS production build
eas build --platform android       # Android production build
eas build --platform ios --local   # Local iOS build
eas build --platform android --local # Local Android build

# Verification
./verify-setup.sh                  # Check installation
npx tsc --noEmit                   # Check TypeScript

# Cleanup
rm -rf node_modules                # Remove dependencies
rm -rf .expo                        # Clear Expo cache
npm cache clean --force            # Clear npm cache
```

---

## 🎊 YOU'RE READY!

Your CreatorFormat Lite app is ready to:
- ✅ Develop locally
- ✅ Test on simulators
- ✅ Build for production
- ✅ Deploy to App Store
- ✅ Deploy to Google Play

**Start now:**
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npm start
```

---

**Happy building! 🚀**

