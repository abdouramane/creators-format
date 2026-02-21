#!/bin/bash

# Script to set up Git and push to GitHub

echo "🔧 Git Configuration & GitHub Push Setup"
echo "========================================"
echo ""

cd /Users/Abdourhamane/IdeaProjects/creators-format

# Check current git config
echo "📋 Current Git Configuration:"
echo "User: $(git config user.name)"
echo "Email: $(git config user.email)"
echo ""

# Ask for GitHub details if not configured
if [ -z "$(git config user.name)" ]; then
    echo "❌ Git user not configured"
    echo ""
    echo "To configure Git, run:"
    echo "  git config --global user.name 'Your Name'"
    echo "  git config --global user.email 'your.email@example.com'"
    echo ""
fi

# Check for remote
echo "📡 Remote Configuration:"
git remote -v
echo ""

if [ -z "$(git remote -v)" ]; then
    echo "❌ No remote configured"
    echo ""
    echo "To add GitHub remote, you have two options:"
    echo ""
    echo "Option 1: HTTPS (if you have a GitHub Personal Access Token)"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/creators-format.git"
    echo ""
    echo "Option 2: SSH (if you have SSH key set up)"
    echo "  git remote add origin git@github.com:YOUR_USERNAME/creators-format.git"
    echo ""
    echo "Then push with:"
    echo "  git push -u origin main"
    echo ""
else
    echo "✅ Remote found, pushing..."
    git push -u origin main
fi

