#!/bin/bash

# CreatorFormat Lite - Installation Verification Script
# Run this to verify your setup is complete and correct

echo "🔍 CreatorFormat Lite - Installation Verification"
echo "=================================================="
echo ""

# Check if in correct directory
if [ ! -f "App.tsx" ]; then
    echo "❌ ERROR: App.tsx not found"
    echo "Make sure you're in the CreatorFormatLite directory"
    exit 1
fi

echo "✅ Directory check passed"
echo ""

# Check Node.js version
if command -v node &> /dev/null; then
    NODE_V=$(node -v)
    echo "✅ Node.js installed: $NODE_V"
else
    echo "❌ Node.js not found"
    exit 1
fi

# Check npm version
if command -v npm &> /dev/null; then
    NPM_V=$(npm -v)
    echo "✅ npm installed: $NPM_V"
else
    echo "❌ npm not found"
    exit 1
fi

echo ""
echo "📁 Project Files:"
echo "=================================================="

# Check core files
files=(
    "App.tsx"
    "index.js"
    "app.json"
    "package.json"
    "tsconfig.json"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
    fi
done

echo ""
echo "📁 Screen Files:"

screens=(
    "screens/HomeScreen.tsx"
    "screens/FormatScreen.tsx"
    "screens/ExportScreen.tsx"
)

for file in "${screens[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
    fi
done

echo ""
echo "📁 Service Files:"

services=(
    "services/imageService.ts"
    "services/videoService.ts"
)

for file in "${services[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
    fi
done

echo ""
echo "📁 Documentation Files:"

docs=(
    "README.md"
    "QUICKSTART.md"
    "SETUP_COMPLETE.md"
)

for file in "${docs[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
    fi
done

echo ""
echo "📦 Dependencies:"
echo "=================================================="

# Check key dependencies
if [ -d "node_modules" ]; then
    echo "✅ node_modules directory exists"

    # Check specific packages
    deps=(
        "react-native"
        "expo"
        "typescript"
        "@react-navigation/native"
        "@react-navigation/stack"
        "expo-image-picker"
        "expo-image-manipulator"
        "expo-media-library"
        "ffmpeg-kit-react-native"
    )

    for dep in "${deps[@]}"; do
        if [ -d "node_modules/$dep" ]; then
            echo "  ✅ $dep"
        else
            echo "  ❌ $dep (NOT INSTALLED)"
        fi
    done
else
    echo "❌ node_modules not found - run 'npm install'"
fi

echo ""
echo "🎯 Next Steps:"
echo "=================================================="
echo ""
echo "1. Start development server:"
echo "   npm start"
echo ""
echo "2. Run on simulator:"
echo "   npm run ios        # iOS"
echo "   npm run android    # Android"
echo ""
echo "3. See QUICKSTART.md for detailed instructions"
echo ""
echo "✅ Verification complete!"
echo ""

