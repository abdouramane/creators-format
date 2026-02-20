# CreatorFormat Lite - Quick Start Guide

## Overview

CreatorFormat Lite is a production-ready mobile app that converts images and videos to different aspect ratios optimized for social media platforms.

## Installation

### 1. Install Expo CLI (if not already installed)

```bash
npm install -g expo-cli
```

### 2. Navigate to project directory

```bash
cd CreatorFormatLite
```

### 3. Install dependencies

```bash
npm install
```

## Running the App

### Development Mode

```bash
npm start
```

This will start the Expo development server. You'll see options to:
- Press `i` to open iOS simulator
- Press `a` to open Android emulator
- Scan QR code with Expo Go app (mobile device)

### Run on iOS Simulator

```bash
npm run ios
```

Requires:
- macOS
- Xcode installed
- iOS simulator available

### Run on Android Emulator

```bash
npm run android
```

Requires:
- Android Studio installed
- Android emulator configured

## Building for Production

### Prerequisites

1. Create an Expo account: https://expo.dev/signup
2. Login to Expo CLI:

```bash
eas login
```

### iOS Build

For physical device or App Store:

```bash
eas build --platform ios
```

For local testing with simulator:

```bash
eas build --platform ios --local
```

### Android Build

For Google Play Store:

```bash
eas build --platform android
```

For local testing with APK:

```bash
eas build --platform android --local
```

## Project Structure

```
CreatorFormatLite/
├── App.tsx                    # Main app entry with navigation stack
├── index.js                   # Expo entry point
├── app.json                   # Expo configuration
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── README.md                  # Documentation
│
├── screens/
│   ├── HomeScreen.tsx         # Media picker screen
│   ├── FormatScreen.tsx       # Format selection screen
│   └── ExportScreen.tsx       # Export & save screen
│
└── services/
    ├── imageService.ts        # Image processing logic
    └── videoService.ts        # Video processing with FFmpeg
```

## Features

### HomeScreen
- Display app title
- "Select Media" button opens device library
- Pick images or videos

### FormatScreen
- Preview of selected media
- Choose aspect ratio:
  - **9:16** - Reels / TikTok format
  - **1:1** - Instagram square
  - **16:9** - YouTube landscape
- "Convert" button processes media
- "Back" button returns to home

### ExportScreen
- Show processed media preview
- Display file size
- "Save to Gallery" button saves to device
- "Start Over" button returns to home

## Permissions Handled

The app automatically requests permissions for:
- **Photo Library Access** - To pick media
- **Camera Access** - Alternative media picker option
- **Save to Media Library** - To save processed media

## Permissions Configuration (app.json)

```json
"plugins": [
  [
    "expo-image-picker",
    {
      "photosPermission": "Allow CreatorFormat Lite to access your photos.",
      "cameraPermission": "Allow CreatorFormat Lite to access your camera."
    }
  ],
  [
    "expo-media-library",
    {
      "photosPermission": "Allow CreatorFormat Lite to save media to your library.",
      "savePhotosPermission": "Allow CreatorFormat Lite to save photos."
    }
  ]
]
```

## Image Processing

- **Engine**: expo-image-manipulator
- **Format**: JPEG
- **Quality**: 0.8 (adjustable)
- **Aspect Ratios**: 9:16, 1:1, 16:9
- **Padding**: White background

## Video Processing

- **Engine**: ffmpeg-kit-react-native
- **Codec**: H.264
- **Container**: MP4
- **Compression**: Medium preset (CRF 28)
- **Audio**: AAC, 128kbps
- **Padding**: Black background

## Troubleshooting

### Expo Go not working
```bash
# Reinstall Expo
npm install -g expo-cli@latest

# Reset project cache
rm -rf .expo
```

### Build failing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Permission errors on iOS/Android
- Ensure you're using latest Expo SDK (~54.0.33)
- Rebuild native modules

### FFmpeg not found
```bash
# Reinstall ffmpeg-kit
npm install ffmpeg-kit-react-native@latest
```

## Performance Optimization

- Images compressed to JPEG with quality 0.8
- Videos use medium FFmpeg preset for faster processing
- Temporary files cleaned after save
- All processing done on device (no cloud dependency)

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React Native | 0.81.5 | Mobile framework |
| Expo | ~54.0.33 | Development platform |
| TypeScript | ~5.9.2 | Type safety |
| React Navigation | ^7.1.28 | Stack navigation |
| expo-image-picker | ^17.0.10 | Media selection |
| expo-image-manipulator | ^14.0.8 | Image processing |
| expo-media-library | ^18.2.1 | Save to gallery |
| ffmpeg-kit-react-native | ^6.0.2 | Video processing |

## File Sizes

- **iOS Build**: ~150MB
- **Android Build**: ~100MB

## Development Tips

1. **Hot Reload**: Press `R` in terminal to reload app
2. **Debug**: Use React Native Debugger or Chrome DevTools
3. **Logs**: Check terminal output for errors
4. **TypeScript**: All code is type-safe with strict mode

## Support & Issues

- Expo Docs: https://docs.expo.dev
- GitHub Issues: Create issue in repository
- Community: https://chat.expo.dev

## License

MIT

---

Happy coding! 🎉

