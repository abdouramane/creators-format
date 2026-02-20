# APK BUILD CHECKLIST

## Quick Summary
You have 2 options:

**OPTION 1: EAS Cloud Build (RECOMMENDED) - 20 minutes**
- [ ] Create Expo account at https://expo.dev/signup
- [ ] Run: npx eas login
- [ ] Run: npx eas build --platform android
- [ ] Wait 10-15 minutes
- [ ] Download APK
- [ ] Install on phone

**OPTION 2: Local Android SDK (Advanced) - 70 minutes**
- [ ] Install Android SDK tools
- [ ] Set environment variables
- [ ] Run: npx expo prebuild --platform android
- [ ] Run: ./gradlew assembleRelease
- [ ] Get APK from app/build/outputs/apk/release/
- [ ] Install on phone

---

## Option 1: EAS Build (START HERE!)

### Part A: Account Setup
- [ ] Open browser: https://expo.dev/signup
- [ ] Enter email or use GitHub
- [ ] Verify email
- [ ] Note down your credentials

### Part B: Terminal Login (1 minute)
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npx eas login
```
- [ ] Enter Expo email
- [ ] Enter Expo password
- [ ] Login successful

### Part C: Build APK (10-15 minutes)
```bash
npx eas build --platform android
```
- [ ] Build starts
- [ ] Building... (watch progress)
- [ ] Build completes
- [ ] Download link appears in terminal
- [ ] Copy download link

### Part D: Download APK
- [ ] Click download link (or paste in browser)
- [ ] APK downloads to ~/Downloads/
- [ ] File size should be ~100 MB
- [ ] Verify file: ls -lh ~/Downloads/*.apk

### Part E: Prepare Phone
- [ ] Unlock phone
- [ ] Open Settings
- [ ] Go to Security (or Privacy)
- [ ] Find "Unknown Sources" or "Install Unknown Apps"
- [ ] Toggle ON
- [ ] Confirm any warnings

### Part F: Install APK
**Method 1 (Easiest):**
- [ ] Download APK on phone (open link on phone browser)
- [ ] Open file manager
- [ ] Find Downloads folder
- [ ] Tap APK file
- [ ] Tap "Install"
- [ ] Wait for installation

**Method 2 (USB):**
- [ ] Connect phone via USB cable
- [ ] Select "File Transfer" mode
- [ ] Run: adb install ~/Downloads/app-release.apk
- [ ] Wait for installation

### Part G: Test App
- [ ] Find "CreatorFormat Lite" in app drawer
- [ ] Tap to launch
- [ ] Grant permissions (Photos, Media)
- [ ] Tap "Select Media"
- [ ] Pick image from gallery
- [ ] Choose aspect ratio
- [ ] Tap "Convert"
- [ ] Tap "Save to Gallery"
- [ ] Success! ✅

---

## Option 2: Local Android SDK

### Part A: Download SDK (~10 minutes, 1GB download)
```bash
mkdir -p ~/Android/Sdk
cd ~/Android/Sdk
curl -O https://dl.google.com/android/repository/commandlinetools-mac-10477973_latest.zip
```
- [ ] Download completes
- [ ] Extract: unzip -q commandlinetools-*.zip
- [ ] Remove zip: rm *.zip
- [ ] Organize: mkdir -p cmdline-tools/latest
- [ ] Move: mv cmdline-tools/* cmdline-tools/latest/

### Part B: Set Environment Variables
```bash
# Add to ~/.zshrc:
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/build-tools/33.0.2

# Apply:
source ~/.zshrc
```
- [ ] Edited ~/.zshrc
- [ ] Ran source ~/.zshrc
- [ ] Verified: echo $ANDROID_HOME (should show path)

### Part C: Install SDK Components (~10 minutes)
```bash
sdkmanager --licenses
# Press 'y' for each license
sdkmanager "platforms;android-33"
sdkmanager "build-tools;33.0.2"
sdkmanager "platform-tools"
```
- [ ] Licenses accepted
- [ ] Platforms installed
- [ ] Build-tools installed
- [ ] Platform-tools installed

### Part D: Generate Android Project
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
npx expo prebuild --clean --platform android
```
- [ ] Prebuild completes
- [ ] android/ folder created
- [ ] Check: ls android/

### Part E: Build APK (~20-30 minutes)
```bash
cd android
./gradlew assembleRelease
```
- [ ] Build starts
- [ ] Building... (watch progress)
- [ ] Build completes (see "BUILD SUCCESSFUL")
- [ ] APK created

### Part F: Find APK
```bash
ls -lh app/build/outputs/apk/release/
```
- [ ] app-release.apk exists
- [ ] File size ~100 MB
- [ ] Note the full path

### Part G: Install on Phone
- [ ] Enable Unknown Sources (same as Option 1)
- [ ] Connect phone via USB
- [ ] Run: adb install app/build/outputs/apk/release/app-release.apk
- [ ] Installation completes
- [ ] Test app (same as Option 1)

---

## Summary

Choose Option 1 (EAS Build):
- ✅ Only 20 minutes
- ✅ No SDK installation
- ✅ Professional quality
- ✅ Easiest
- ✅ RECOMMENDED

Only choose Option 2 if you want complete local control.

---

## Need Help?

Check these files:
- BUILD_APK_FINAL_ANSWER.md
- BUILD_APK_STEP_BY_STEP.md
- BUILD_APK_COMPLETE_GUIDE.md

All in: /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite/

---

## Quick Links

- Expo: https://expo.dev
- Create Account: https://expo.dev/signup
- EAS Build: https://docs.expo.dev/build/
- Android Docs: https://developer.android.com/

---

**Start with Option 1! It's faster and easier!** ⚡


