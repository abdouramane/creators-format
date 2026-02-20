#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node 20
echo "📦 Installing Node.js 20 with NVM..."
nvm install 20
nvm use 20

# Verify Node version
echo "🔍 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
echo "Current Node version: v$(node -v | cut -d'v' -f2)"

if [ "$NODE_VERSION" -lt 20 ]; then
  echo "❌ Node.js 20 or higher is required!"
  exit 1
fi

echo "✅ Node.js 20 is active"

# Clean and install dependencies
echo "📦 Installing dependencies..."
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Build APK with EAS
echo "🚀 Building Android APK with EAS..."
npx eas build --platform android --clear-cache

