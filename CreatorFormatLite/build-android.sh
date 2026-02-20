#!/bin/bash

# CreatorFormatLite - Android Build & Install Helper Script

echo "================================"
echo "CreatorFormatLite - Android Build"
echo "================================"
echo ""

# Check if eas-cli is installed
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI not found. Installing..."
    npm install -g eas-cli
fi

echo "✅ EAS CLI found"
echo ""

# Check if user is logged in
echo "Checking Expo account login..."
if ! eas whoami &> /dev/null; then
    echo "❌ Not logged in to Expo"
    echo ""
    echo "Steps to fix:"
    echo "1. Create free Expo account at: https://expo.dev/signup"
    echo "2. Run: eas login"
    echo "3. Enter your credentials"
    echo ""
    exit 1
fi

echo "✅ Logged in to Expo"
echo ""

# Start build
echo "Starting Android APK build..."
echo "This will take 10-15 minutes..."
echo ""

cd "$(dirname "$0")"

# Run build
eas build --platform android

echo ""
echo "================================"
echo "Build Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Download the APK from the link above"
echo "2. Enable 'Unknown Sources' on your Android phone:"
echo "   Settings > Security > Unknown Sources > ON"
echo "3. Install APK:"
echo "   - Via USB: adb install CreatorFormatLite.apk"
echo "   - Via file: Copy APK to phone and tap to install"
echo "4. Launch app from app drawer"
echo ""

