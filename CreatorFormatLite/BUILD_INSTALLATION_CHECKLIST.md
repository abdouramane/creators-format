# Android Build & Installation Checklist

## Pre-Build Checklist ✅

### Account Setup
- [ ] Create Expo account at https://expo.dev/signup
- [ ] Note your Expo email and password
- [ ] Test login works: `eas whoami` (should show error until you login)

### Computer Setup  
- [ ] Navigate to project: `cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite`
- [ ] Verify Node.js 18+: `node --version` (should show v18.x.x)
- [ ] Verify npm works: `npm --version`
- [ ] All dependencies installed: `npm ls` (should show no errors)

### Project Verification
- [ ] `npx tsc --noEmit` shows 0 errors
- [ ] `npm start` loads without errors (press Ctrl+C to stop)
- [ ] All code files present and valid

---

## Build Phase Checklist ✅

### Step 1: Login
- [ ] Run: `eas login`
- [ ] Enter your Expo email
- [ ] Enter your password
- [ ] Confirm: `eas whoami` shows your email

### Step 2: Build
- [ ] Run: `eas build --platform android`
- [ ] Wait for build to start (console shows "Queued for build")
- [ ] Monitor build progress (takes 10-15 minutes)
- [ ] Build completes (console shows download link)
- [ ] Copy download link from console

### Step 3: Download
- [ ] Open download link in browser
- [ ] APK file downloads to Downloads folder
- [ ] Verify file size (~100 MB)
- [ ] Move to easily accessible location if needed

---

## Pre-Installation Checklist (Android Phone) ✅

### Phone Preparation
- [ ] Connect to WiFi (for downloading APK if needed)
- [ ] Ensure at least 200 MB free storage
- [ ] Charge phone to at least 50%
- [ ] Know phone's lock code

### Enable Unknown Sources
- [ ] Unlock phone
- [ ] Open Settings app
- [ ] Go to: Security (or Apps & Notifications)
- [ ] Find: "Unknown Sources" or "Install Unknown Apps"
- [ ] Toggle ON
- [ ] Confirm the warning

---

## Installation Phase Checklist ✅

### Download APK to Phone
- [ ] Choose method:
  - [ ] Option A: Open download link on phone browser
  - [ ] Option B: Email APK link to yourself
  - [ ] Option C: Use USB cable file transfer
- [ ] Verify APK appears in Downloads folder
- [ ] File name: CreatorFormatLite.apk
- [ ] File size: ~100 MB

### Install APK
- [ ] Open file manager on phone
- [ ] Navigate to Downloads folder
- [ ] Tap CreatorFormatLite.apk file
- [ ] Tap "Install" button when prompted
- [ ] Watch progress bar fill
- [ ] Tap "Done" or "Open" when finished
- [ ] App now appears in app drawer

---

## Post-Installation Checklist ✅

### Initial Launch
- [ ] Find "CreatorFormat Lite" in app drawer
- [ ] Tap app to launch
- [ ] Grant permission for Photos (tap "Allow")
- [ ] Grant permission for Media (tap "Allow")
- [ ] Wait for app to fully load
- [ ] Home screen appears with "Select Media" button

### Feature Testing
- [ ] Tap "Select Media" button
- [ ] Gallery opens
- [ ] Pick an image
- [ ] Format Screen appears with 3 options
- [ ] Select "Reels / TikTok" (9:16)
- [ ] Tap "Convert"
- [ ] Wait for processing
- [ ] Convert button shows checkmark when done
- [ ] Tap "Save to Gallery"
- [ ] Confirm saved to gallery
- [ ] Tap "Start Over"
- [ ] Try with different format (Instagram 1:1)

### Permissions Verification
- [ ] Photos permission granted
- [ ] Media/Storage permission granted
- [ ] Camera permission (optional, for taking new photos)

---

## Troubleshooting Checklist ✅

### If Installation Fails
- [ ] Check "Unknown Sources" is ON
- [ ] Delete APK file and download again
- [ ] Try different installation method (USB instead of browser)
- [ ] Restart phone
- [ ] Clear file manager cache
- [ ] Try installing again

### If App Crashes on Launch
- [ ] Go to: Settings > Apps > CreatorFormat Lite
- [ ] Tap "Storage" > "Clear Cache"
- [ ] Tap "Force Stop"
- [ ] Restart phone
- [ ] Open app again
- [ ] Grant all permissions
- [ ] If still crashes, uninstall and reinstall APK

### If Permissions Won't Grant
- [ ] Go to: Settings > Apps > CreatorFormat Lite
- [ ] Tap "Permissions"
- [ ] Toggle ON: Photos/Gallery
- [ ] Toggle ON: Media/Storage
- [ ] Toggle ON: Camera (optional)
- [ ] Restart app

### If App is Slow
- [ ] Close other apps
- [ ] Clear phone cache: Settings > Storage > Clear Cache
- [ ] Restart phone
- [ ] Try with smaller image/video first

---

## Success Indicators ✅

You know it's working when:
- [ ] App launches without errors
- [ ] Home screen displays with button
- [ ] Can select image from gallery
- [ ] Format selection shows 3 options
- [ ] Convert button works
- [ ] Can save to gallery
- [ ] Converted file appears in gallery

---

## Build History & Updates

### View Build Info
```bash
# List all builds
eas build:list

# View specific build details
eas build:view [BUILD_ID]

# View build logs
eas build:view [BUILD_ID] --logs
```

### For Updates/New Builds
- [ ] Make code changes in project
- [ ] Run: `npx tsc --noEmit` (verify no errors)
- [ ] Run: `eas build --platform android`
- [ ] Wait for new build
- [ ] Download new APK
- [ ] Uninstall old app from phone
- [ ] Install new APK
- [ ] Verify updates work

---

## Important Notes

⚠️ **Remember:**
- Keep your Expo login info safe
- Save the APK file for easy reinstallation
- "Unknown Sources" must be ON to install APK
- App requires phone storage space
- Internet not needed to use app (offline-first)
- Can share APK directly with others
- Each build takes 10-15 minutes

✅ **You're Ready!**
Follow this checklist and you'll have the app running on your Android phone in under an hour.

---

## Support

If you get stuck:
1. Check the "Troubleshooting" section above
2. Review ANDROID_INSTALLATION_GUIDE.md
3. Visit https://docs.expo.dev
4. Check Expo forums: https://forums.expo.dev

---

**Status: READY TO BUILD AND INSTALL** ✅

Your app is production-ready. Follow the checklist above and you'll have it running on Android! 🚀

