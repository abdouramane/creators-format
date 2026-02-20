# Android Build & Installation Guide for CreatorFormatLite

## Method 1: Using EAS Build (Cloud Build - Recommended)

This method builds the APK on Expo's servers without needing Android SDK installed locally.

### Prerequisites
- Expo account (free at https://expo.dev)
- EAS CLI (already installed)

### Steps

1. **Create Expo Account**
   - Go to https://expo.dev/signup
   - Sign up with email or GitHub

2. **Login to EAS**
   ```bash
   cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
   eas login
   ```
   - Enter your Expo account credentials

3. **Build APK**
   ```bash
   eas build --platform android --non-interactive
   ```
   - This will queue your build on Expo's servers
   - Takes 10-15 minutes typically
   - You'll get a download link when complete

4. **Download APK**
   - Wait for build to complete
   - Download the APK file from the provided link
   - Or run: `eas build:list` to see your builds

---

## Method 2: Local Build with Android Studio

### Prerequisites
- Android Studio installed
- Android SDK (API 30+)
- JDK 11 or higher

### Steps

1. **Generate Signed APK**
   ```bash
   cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
   expo prebuild --clean
   ```

2. **Open in Android Studio**
   ```bash
   open -a Android\ Studio android
   ```

3. **Build Signed APK**
   - In Android Studio: Build > Build Bundle(s) / APK(s) > Build APKs
   - Select "Release"
   - Android Studio will sign and build the APK

---

## Method 3: Using Expo Go App (Testing Only)

For quick testing without building APK:

1. **Download Expo Go**
   - Search "Expo Go" in Google Play Store
   - Install on your Android phone

2. **Start Dev Server**
   ```bash
   cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
   npm start
   ```

3. **Scan QR Code**
   - Open Expo Go app
   - Scan the QR code shown in terminal
   - App loads instantly for testing

---

## Installing APK on Android Phone

### Method A: Via USB Cable

1. **Enable USB Debugging**
   - On phone: Settings > About Phone > tap Build Number 7 times
   - Back to Settings > Developer Options
   - Enable "USB Debugging"

2. **Connect Phone to Computer**
   - Plug in USB cable
   - Select "File Transfer" mode when prompted

3. **Install APK**
   ```bash
   # Using adb (Android SDK)
   adb install CreatorFormatLite.apk
   ```
   Or manually:
   - Copy APK file to phone storage
   - Open file manager on phone
   - Tap APK file
   - Select "Install"

### Method B: Via File Transfer

1. **Copy APK to Phone**
   - Connect phone via USB
   - Drag APK to phone storage folder
   - Or email yourself the APK

2. **Install on Phone**
   - Open file manager
   - Navigate to Downloads or where you saved the APK
   - Tap the APK file
   - Tap "Install"
   - May need to enable "Unknown Sources":
     - Settings > Security > Unknown Sources (toggle ON)

### Method C: Via QR Code Link

1. **Share APK**
   - After build, get download link
   - Share link via QR code
   - Scan with phone browser
   - Download and install

---

## Step-by-Step: Complete Installation

### 1. Build the APK (Choose One Method)

**Option A: EAS Build (Recommended)**
```bash
# Login first
eas login

# Build
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
eas build --platform android

# Wait 10-15 minutes for build
# Get download link from console
```

**Option B: Local Build**
```bash
expo prebuild --clean
# Open android folder in Android Studio
# Build signed APK from IDE
```

### 2. Prepare Your Android Phone

```
Settings 
  → Security 
    → Unknown Sources 
      → Toggle ON
```

(This allows installing apps from outside Google Play Store)

### 3. Transfer APK to Phone

**Option A: USB Cable**
```bash
# Connect phone
# Run: adb install path/to/CreatorFormatLite.apk
adb install CreatorFormatLite.apk
```

**Option B: Email/Cloud**
- Email APK to yourself
- Download on phone
- Open and install

**Option C: Manual File Transfer**
- Connect phone via USB
- Drag APK to internal storage
- Open file manager on phone
- Find and tap APK
- Tap Install

### 4. Launch App

- Find "CreatorFormat Lite" in app drawer
- Tap to launch
- Grant permissions when prompted:
  - Photo library access
  - Camera access (optional)
  - Media library write access

---

## Troubleshooting

### "Unknown app" / Installation Blocked
**Solution**: Enable "Unknown Sources"
```
Settings > Security > Unknown Sources > ON
```

### "App not installed"
**Possible Causes**:
- Wrong Android version (need API 24+)
- Insufficient storage
- Corrupted APK

**Solution**:
- Download APK again
- Try different installation method
- Check phone has 100+ MB free space

### App Crashes on Launch
**Solutions**:
- Force stop app: Settings > Apps > CreatorFormat Lite > Force Stop
- Clear cache: Settings > Apps > CreatorFormat Lite > Storage > Clear Cache
- Reinstall app

### Permissions Not Granted
**Solution**:
- Manually grant permissions:
```
Settings 
  > Apps 
    > CreatorFormat Lite 
      > Permissions 
        > Photos (Allow)
        > Camera (Allow - optional)
```

---

## Features You Can Test

1. **Select Media**
   - Pick image or video from gallery
   - Take new photo/video

2. **Convert Format**
   - Choose aspect ratio: 9:16, 1:1, or 16:9
   - Tap "Convert"

3. **Save to Gallery**
   - View converted media
   - Save to device gallery
   - Start over for another conversion

---

## Build Information

- **App Name**: CreatorFormat Lite
- **Version**: 1.0.0
- **Min Android**: API 24 (Android 7.0)
- **Target Android**: API 33+ (Android 13+)
- **Bundle Size**: ~100 MB (APK) / ~150 MB (installed)

---

## Next Steps

1. **Build APK**
   - Run: `eas login` then `eas build --platform android`

2. **Install on Phone**
   - Follow installation method above

3. **Test Features**
   - Grant required permissions
   - Pick images/videos
   - Convert to different formats
   - Save to gallery

4. **Share with Users**
   - APK can be shared directly
   - No need for Google Play Store
   - Works on any Android device API 24+

---

## Additional Resources

- [Expo Docs](https://docs.expo.dev)
- [EAS Build Guide](https://docs.expo.dev/build/setup/)
- [Android Installation Guide](https://docs.expo.dev/guides/install-android/)


