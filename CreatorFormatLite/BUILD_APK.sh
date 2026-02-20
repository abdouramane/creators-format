#!/bin/bash

# Complete Guide to Building APK for CreatorFormatLite

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║   CreatorFormatLite - Android APK Build Helper            ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check prerequisites
echo "Checking prerequisites..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found"
    exit 1
fi
echo "✅ Node.js: $(node -v)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found"
    exit 1
fi
echo "✅ npm: $(npm -v)"

# Check Java
if ! command -v java &> /dev/null; then
    echo "❌ Java not found - Installing..."
    # Would need to install Java
else
    echo "✅ Java: $(java -version 2>&1 | head -1)"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "THREE OPTIONS TO BUILD YOUR APK:"
echo ""
echo "1️⃣  EAS Build (Recommended - Cloud Build)"
echo "   • No Android SDK needed"
echo "   • Takes 10-15 minutes"
echo "   • Produces optimized APK"
echo "   • Can be done right now"
echo ""
echo "2️⃣  Local Gradle Build (Requires Android SDK)"
echo "   • Full local control"
echo "   • Requires 1GB Android SDK download"
echo "   • Takes 20-30 minutes build time"
echo "   • More complex setup"
echo ""
echo "3️⃣  Expo Go (For Testing Only)"
echo "   • No APK needed"
echo "   • Instant testing"
echo "   • Hot reload"
echo "   • Not for distribution"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "RECOMMENDED: Use EAS Build (Option 1)"
echo ""
echo "Steps:"
echo "1. eas login           (create free account if needed)"
echo "2. eas build --platform android"
echo "3. Wait 10-15 minutes"
echo "4. Download APK"
echo "5. Install on phone"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""

read -p "Continue with EAS Build? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Starting EAS Build..."
    echo ""

    # Check if logged in
    if ! eas whoami &> /dev/null; then
        echo "❌ Not logged into Expo/EAS"
        echo ""
        echo "Please run: eas login"
        echo "Then run: eas build --platform android"
        exit 1
    fi

    echo "✅ Logged into Expo"
    echo ""
    echo "Building APK... This will take 10-15 minutes"
    echo ""

    eas build --platform android

else
    echo "Canceled. To build later, run:"
    echo ""
    echo "  eas build --platform android"
    echo ""
fi

