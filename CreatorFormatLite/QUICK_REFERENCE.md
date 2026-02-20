# 🚀 CREATORFORMAT LITE - QUICK START CARD

## ⚡ GET RUNNING IN 2 MINUTES

### Step 1: Go to Project
```bash
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
```

### Step 2: Start Dev Server
```bash
npm start
```

### Step 3: Open in Simulator
```
Press 'i' for iOS
Press 'a' for Android
```

**Done! App is running! 🎉**

---

## 📱 APP WALKTHROUGH

```
1. HomeScreen
   └─ Tap "Select Media"
   
2. Choose image or video from library
   
3. FormatScreen
   └─ Pick aspect ratio (9:16, 1:1, 16:9)
   └─ Tap "Convert"
   
4. ExportScreen (processing happens)
   └─ Preview result
   └─ Tap "Save to Gallery"
   
5. Done! Media saved to device
```

---

## 🔧 USEFUL COMMANDS

```bash
npm start                    # Start Expo dev server
npm run ios                  # iOS Simulator
npm run android              # Android Emulator

npm install                  # Install dependencies
./verify-setup.sh            # Verify installation

npx tsc --noEmit            # Check TypeScript
eas build --platform ios     # Build for iOS
eas build --platform android # Build for Android
```

---

## 📂 KEY FILES

```
App.tsx                 ← Main navigation
screens/                ← 3 UI screens
  ├─ HomeScreen.tsx
  ├─ FormatScreen.tsx
  └─ ExportScreen.tsx
services/               ← Processing logic
  ├─ imageService.ts
  └─ videoService.ts
app.json               ← Expo config
package.json           ← Dependencies
```

---

## 📚 DOCUMENTATION

- **QUICKSTART.md** - Full setup guide
- **BUILD_INSTRUCTIONS.md** - Build & deploy
- **README.md** - Feature overview

---

## 🎯 ASPECT RATIOS

- **9:16** → TikTok/Reels (vertical)
- **1:1** → Instagram (square)
- **16:9** → YouTube (landscape)

---

## ❓ COMMON ISSUES

**"expo not found"**
```bash
npm install -g expo-cli
```

**"Simulator not loading"**
```bash
npm start
# Then press 'i' or 'a' again
```

**"Permission denied"**
- Check app.json permissions
- Rebuild with: `npx expo prebuild --clean`

**"FFmpeg error"**
```bash
npm uninstall ffmpeg-kit-react-native
npm install ffmpeg-kit-react-native@latest
```

---

## 🎊 YOU'RE ALL SET!

Everything is installed and ready.

**Start now:** `npm start`

---

Created: February 15, 2026
Version: 1.0.0
Status: ✅ READY

