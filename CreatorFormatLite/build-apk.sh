#!/bin/bash

# CreatorFormatLite - APK Build Script
# This script builds the Android APK using EAS Build (Expo's cloud build service)

set -e

echo "=========================================="
echo "🚀 CreatorFormatLite APK Build"
echo "=========================================="
echo ""

PROJECT_PATH="/Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite"

# Step 1: Verify Node version
echo "📋 Step 1: Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
  echo "❌ Node.js 20 or higher required (found: $(node -v))"
  exit 1
fi
echo "✅ Node.js $(node -v) - Compatible"
echo ""

# Step 2: Navigate to project
echo "📋 Step 2: Navigating to project..."
cd "$PROJECT_PATH"
echo "✅ Working directory: $(pwd)"
echo ""

# Step 3: Verify dependencies
echo "📋 Step 3: Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "⚠️  node_modules not found, installing..."
  npm install --legacy-peer-deps
else
  echo "✅ Dependencies installed"
fi
echo ""

# Step 4: Check eas-cli
echo "📋 Step 4: Checking EAS CLI..."
if npm list eas-cli > /dev/null 2>&1; then
  echo "✅ EAS CLI installed"
else
  echo "⚠️  Installing EAS CLI..."
  npm install -D eas-cli
fi
echo ""

# Step 5: Build APK
echo "📋 Step 5: Building APK with EAS..."
echo ""
echo "This will:"
echo "  1. Upload your code to Expo's build servers"
echo "  2. Compile the Android APK"
echo "  3. Provide a download link when complete"
echo ""
echo "Build typically takes 5-10 minutes..."
echo ""

npx eas build --platform android --message "Build APK for testing"

echo ""
echo "=========================================="
echo "✅ Build submitted to EAS!"
echo "=========================================="
echo ""
echo "📊 Monitor your build at:"
echo "   https://expo.dev/accounts/asoumail/projects/creator-format-lite"
echo ""
echo "Once complete, you can:"
echo "1. Download the APK directly to your computer"
echo "2. Transfer to your Android phone"
echo "3. Install: adb install -r app.apk"
echo "   Or drag & drop APK to phone and install"
echo ""

