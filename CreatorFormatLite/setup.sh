#!/bin/bash

# CreatorFormat Lite Setup Script

echo "🚀 CreatorFormat Lite Setup"
echo "============================"
echo ""

# Check Node.js version
NODE_VERSION=$(node -v)
echo "✓ Node.js version: $NODE_VERSION"

# Check npm version
NPM_VERSION=$(npm -v)
echo "✓ npm version: $NPM_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo ""
echo "  npm start          # Start Expo server"
echo "  npm run ios        # Run on iOS simulator"
echo "  npm run android    # Run on Android emulator"
echo ""
echo "To build for production:"
echo ""
echo "  eas build --platform ios"
echo "  eas build --platform android"
echo ""

