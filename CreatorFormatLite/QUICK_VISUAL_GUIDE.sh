#!/bin/bash

cat << 'EOF'

╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        📱 HOW TO TEST YOUR APP ON ANDROID PHONE 📱            ║
║                  CreatorFormatLite v1.0.0                      ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝


🏆 FASTEST WAY (2 MINUTES) - RECOMMENDED
═══════════════════════════════════════════════════════════════════

Step 1️⃣  INSTALL EXPO GO
────────────────────────────────────────────────────────────────
On your Android phone:

 📱 Phone > Google Play Store
       ↓
 🔍 Search: "Expo Go"
       ↓
 ⬇️  Tap "Install"
       ↓
 ✅ Installation complete


Step 2️⃣  START DEV SERVER
────────────────────────────────────────────────────────────────
On your Mac (open Terminal):

 $ cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
 $ npm start

Wait for:
 ✓ Metro Bundler starting...
 ✓ Expo running on http://localhost:8081

Terminal displays QR code:
 ┌──────────────────────┐
 │  [QR CODE PICTURE]   │
 │  (scan this with     │
 │   Expo Go app)       │
 └──────────────────────┘


Step 3️⃣  SCAN QR CODE
────────────────────────────────────────────────────────────────
On your phone:

 📱 Phone > Open Expo Go app
       ↓
 🎯 Tap "Scan QR code" button (usually at bottom)
       ↓
 📸 Point camera at QR code in terminal
       ↓
 ⏳ Wait 10-30 seconds for app to load
       ↓
 ✅ App appears on screen!


Step 4️⃣  TEST THE APP
────────────────────────────────────────────────────────────────

 🎬 What you see:
    ┌──────────────────────────┐
    │ CreatorFormat Lite       │
    │                          │
    │   [Select Media]         │
    │   (blue button)          │
    └──────────────────────────┘

 ✨ What to do:
    1. Tap "Select Media"
    2. Pick image from gallery
    3. Choose format: 9:16 or 1:1 or 16:9
    4. Tap "Convert"
    5. Wait for processing
    6. Tap "Save to Gallery"
    7. Done! ✅

 📸 Result:
    Converted image appears in your phone gallery


🎯 THAT'S IT!
═══════════════════════════════════════════════════════════════════

Your app is now running on your Android phone!

You can:
 ✅ Select images and videos
 ✅ Convert to different aspect ratios
 ✅ Save to gallery
 ✅ Make code changes and hot reload (saves auto-update on phone!)


⚡ TIPS
─────────────────────────────────────────────────────────────────

🔄 HOT RELOAD
   When you edit code on Mac:
   1. Save the file
   2. App automatically updates on phone!
   3. No rebuild needed

📸 MANUAL RELOAD
   If app doesn't reload:
   1. On Mac terminal, press 'r'
   2. OR shake phone to reload

📱 MULTIPLE PHONES
   You can test on multiple Android phones at once:
   1. Phone 1 scans QR code
   2. Phone 2 scans same QR code
   3. Both run the same app!
   4. Changes update on both instantly!

🔧 DEBUG
   Terminal shows app logs:
   LOG  Image selected
   WARN Warning message
   ERROR Error message


⚠️  IMPORTANT NOTES
─────────────────────────────────────────────────────────────────

 🌐 WiFi REQUIRED
    • Phone and Mac must be on SAME WiFi network
    • Check: Phone WiFi name = Mac WiFi name

 🔋 KEEP DEV SERVER RUNNING
    • npm start must keep running in terminal
    • Don't close terminal!
    • To stop: Press Ctrl+C

 ⏹️  TO STOP TESTING
    • Press Ctrl+C in terminal
    • Or close Expo Go app on phone


🆘 TROUBLESHOOTING
─────────────────────────────────────────────────────────────────

❌ "Can't find QR code"
   ✅ Make sure you're on same WiFi
   ✅ Try again: Terminal 'r' key
   ✅ Close Expo Go and re-scan

❌ "App won't load"
   ✅ Check phone WiFi is connected
   ✅ Check Mac WiFi is connected
   ✅ Restart Expo Go app
   ✅ Run: npm start again

❌ "Can't connect to server"
   ✅ Make sure npm start is running
   ✅ Check both on same WiFi
   ✅ Check Mac firewall isn't blocking

❌ "Permission errors"
   ✅ Phone > Settings > Apps > CreatorFormat Lite
   ✅ Tap Permissions
   ✅ Enable: Photos, Media, Camera

❌ "App crashes"
   ✅ Terminal: Press 'r' to reload
   ✅ Phone: Force close Expo Go
   ✅ Phone: Re-scan QR code


📊 OTHER OPTIONS (If you need APK file)
─────────────────────────────────────────────────────────────────

OPTION 2: Build APK from Cloud (15 minutes)
────────────────────────────────────────────
 1. Create Expo account: https://expo.dev/signup
 2. Run: eas login
 3. Run: eas build --platform android
 4. Wait 10-15 minutes
 5. Download APK
 6. Install on phone (Settings > Unknown Sources)
 → See: ANDROID_BUILD_GUIDE.md

Result: APK file you can share, works offline


OPTION 3: Build APK Locally (70 minutes)
────────────────────────────────────────
 1. Install Android SDK (30 min)
 2. Setup Gradle
 3. Run: npx expo prebuild --clean --platform android
 4. Run: cd android && ./gradlew assembleRelease
 5. Get APK (20 min build time)
 → See: LOCAL_BUILD_GUIDE.md

Result: Complete control, APK built locally


📋 COMPARISON TABLE
─────────────────────────────────────────────────────────────────

                  Expo Go    | Cloud APK  | Local APK
Setup Time        2 min      | 5 min      | 50 min
Build Time        None       | 15 min     | 20 min
Total Time        2 min      | 20 min     | 70 min
Hot Reload        ✅ Yes     | ❌ No      | ❌ No
Offline           ❌ Needs   | ✅ Yes     | ✅ Yes
                   WiFi
Share with Others ❌ No      | ✅ Yes     | ✅ Yes
Production Ready  ❌ Dev     | ✅ Yes     | ✅ Yes
Easy              ✅ Yes     | ✅ Yes     | ❌ No


🎯 RECOMMENDATION
─────────────────────────────────────────────────────────────────

USE EXPO GO RIGHT NOW! ⚡

Why?
 ✅ Takes 2 minutes
 ✅ No setup needed
 ✅ Test instantly
 ✅ Hot reload for development
 ✅ Perfect for active development

Build APK LATER (when ready to share):
 ✅ Use cloud build (easy)
 ✅ Takes only 15 minutes
 ✅ No local setup needed


🚀 NEXT STEPS RIGHT NOW
─────────────────────────────────────────────────────────────────

1️⃣  Go to Google Play Store on phone
    Search: "Expo Go"
    Install

2️⃣  Run on Mac:
    cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
    npm start

3️⃣  On phone:
    Open Expo Go
    Tap "Scan QR code"
    Point at terminal QR code

4️⃣  Wait 30 seconds

5️⃣  App is running! 🎉


═══════════════════════════════════════════════════════════════════

            THAT'S IT! YOU'RE READY TO TEST!

═══════════════════════════════════════════════════════════════════

Questions? See documentation files:
 📄 EXPO_GO_QUICK_START.md
 📄 HOW_TO_TEST_ON_ANDROID_PHONE.md
 📄 LOCAL_BUILD_GUIDE.md

Good luck! 🚀

EOF

