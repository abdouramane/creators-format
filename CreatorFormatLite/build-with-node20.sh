#!/bin/zsh

# Set up NVM and build the project
set -e

echo "🔧 Setting up Node.js 20 with NVM..."

# Initialize NVM
export NVM_DIR="${HOME}/.nvm"
if [ -s "${NVM_DIR}/nvm.sh" ]; then
    source "${NVM_DIR}/nvm.sh"
    echo "✅ NVM loaded"
else
    echo "❌ NVM not found at $NVM_DIR/nvm.sh"
    echo "Please install NVM first: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    exit 1
fi

# Install Node 20
echo "📦 Installing Node.js 20..."
nvm install 20 || echo "Node 20 already installed"

# Use Node 20
echo "🔄 Switching to Node.js 20..."
nvm use 20

# Verify installation
echo ""
echo "✅ Node.js version:"
node -v
echo "✅ npm version:"
npm -v
echo ""

# Navigate to project
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite

# Clean install
echo "📦 Installing project dependencies..."
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Build APK
echo ""
echo "🚀 Building Android APK with EAS..."
echo "This may take 5-10 minutes..."
echo ""
npx eas build --platform android --clear-cache

echo ""
echo "✨ Build complete! Download your APK from the Expo dashboard."

