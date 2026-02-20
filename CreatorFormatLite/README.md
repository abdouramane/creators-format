# CreatorFormat Lite

A minimal production-ready cross-platform mobile app for converting images and videos to different aspect ratios.

## Features

- Pick images or videos from device library
- Convert to 3 aspect ratios:
  - 9:16 (Reels / TikTok)
  - 1:1 (Instagram)
  - 16:9 (YouTube)
- Automatic resizing with padding
- Save converted media to device gallery
- No accounts, no cloud, no advanced editing

## Tech Stack

- React Native
- Expo (latest)
- TypeScript
- expo-image-picker
- expo-image-manipulator
- expo-media-library
- ffmpeg-kit-react-native

## Setup & Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode and simulator
- Android: Android Studio and emulator

### Installation

```bash
cd CreatorFormatLite
npm install
```

## Running the App

### Development

```bash
# Start Expo development server
expo start

# Run on iOS simulator
expo start --ios

# Run on Android emulator
expo start --android
```

### Building

#### iOS Build

```bash
# Using EAS Build
eas build --platform ios --local

# Or use managed build
eas build --platform ios
```

#### Android Build

```bash
# Using EAS Build
eas build --platform android --local

# Or use managed build
eas build --platform android
```

## Project Structure

```
CreatorFormatLite/
├── App.tsx                 # Main app component with navigation
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── screens/
│   ├── HomeScreen.tsx     # Media picker
│   ├── FormatScreen.tsx   # Format selection
│   └── ExportScreen.tsx   # Export & save
└── services/
    ├── imageService.ts    # Image processing
    └── videoService.ts    # Video processing with FFmpeg
```

## Permissions

The app requests:
- Photo library access
- Camera access (for image picker)
- Media library save permission

All permissions are handled gracefully with fallback alerts.

## Error Handling

- Permission denied alerts
- Processing failure handling
- File operation error management
- User-friendly error messages

## Performance

- Minimal dependencies
- Optimized image compression (JPEG quality 0.8)
- Video processing with medium FFmpeg preset
- Caching with Expo's file system
- Efficient state management with React hooks

## Build Size

- iOS: ~150MB
- Android: ~100MB

