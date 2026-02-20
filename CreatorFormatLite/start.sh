#!/bin/bash
# Start the Expo development server with proper Node.js support
cd "$(dirname "$0")"

# Make node modules executable
chmod +x node_modules/.bin/* 2>/dev/null || true

# Start expo with npm
npm start

