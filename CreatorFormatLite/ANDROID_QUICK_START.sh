#!/bin/bash

# Quick Reference: Android Build & Install for CreatorFormatLite

cat << 'EOF'

╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║     📱 CreatorFormatLite - Android Build & Install Guide      ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

STEP 1: Setup Expo Account
─────────────────────────────────────────────────────────────────
1. Visit: https://expo.dev/signup
2. Create account with email or GitHub
3. Run in terminal:

   eas login

4. Enter your Expo credentials


STEP 2: Build Android APK (10-15 minutes)
─────────────────────────────────────────────────────────────────
Option A - Automatic:
   cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
   chmod +x build-android.sh
   ./build-android.sh

Option B - Manual:
   cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
   eas build --platform android

Result: You'll get a download link for CreatorFormatLite.apk


STEP 3: Install on Android Phone
─────────────────────────────────────────────────────────────────
3.1 Enable "Unknown Sources":
    Phone Settings > Security > Unknown Sources > ON

3.2 Download APK:
    - Open download link on phone browser, OR
    - Use USB cable to transfer, OR
    - Email APK to yourself

3.3 Install APK:
    - Open file manager
    - Find CreatorFormatLite.apk
    - Tap to install
    - Tap "Install" button
    - Wait for completion


STEP 4: Launch App & Grant Permissions
─────────────────────────────────────────────────────────────────
1. Find "CreatorFormat Lite" in app drawer
2. Tap to launch
3. Grant permissions:
   - Photos: Allow
   - Media library: Allow
4. Start converting media!


QUICK COMMANDS
─────────────────────────────────────────────────────────────────
Check if logged in:
   eas whoami

View build history:
   eas build:list

Login to Expo:
   eas login

Logout from Expo:
   eas logout


TROUBLESHOOTING
─────────────────────────────────────────────────────────────────
❌ "Unknown app" error
   ✅ Enable Unknown Sources in Settings > Security

❌ "App not installed" error
   ✅ Delete APK, re-download, try again
   ✅ Ensure 150+ MB free space on phone

❌ App crashes on launch
   ✅ Settings > Apps > CreatorFormat Lite > Clear Cache
   ✅ Force Stop, restart phone, reopen app

❌ Can't grant permissions
   ✅ Settings > Apps > CreatorFormat Lite > Permissions


APP FEATURES
─────────────────────────────────────────────────────────────────
✨ Pick images/videos from gallery
✨ Convert to 3 aspect ratios:
   - 9:16 (TikTok / Reels)
   - 1:1 (Instagram)
   - 16:9 (YouTube)
✨ Auto-resize with padding
✨ Save to device gallery
✨ No cloud required, 100% offline


BUILD DETAILS
─────────────────────────────────────────────────────────────────
App Name:           CreatorFormat Lite
Version:            1.0.0
Min Android:        API 24 (Android 7.0+)
Target Android:     API 33+ (Android 13+)
APK Size:           ~100 MB
Installed Size:     ~150 MB
Build Time:         10-15 minutes


IMPORTANT NOTES
─────────────────────────────────────────────────────────────────
⚡ Free Expo account required for building
⚡ APK works on any Android device (no Play Store needed)
⚡ Can be shared directly with friends/users
⚡ Offline-first design (no internet required to use)


NEED HELP?
─────────────────────────────────────────────────────────────────
📖 Full Guide:    ANDROID_BUILD_GUIDE.md
📖 Install Guide: ANDROID_INSTALLATION_GUIDE.md
🌐 Expo Docs:     https://docs.expo.dev
🌐 EAS Build:     https://docs.expo.dev/build/setup/


═════════════════════════════════════════════════════════════════
Ready to build? Run: cd CreatorFormatLite && eas login
Then: eas build --platform android
═════════════════════════════════════════════════════════════════

EOF

