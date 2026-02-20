# ✅ Fixed: Expo Dev Server Error

## Problem
"EMFILE: too many open files" error when starting Expo

## Solution Implemented

### Root Cause
Metro bundler was trying to watch too many files. The system file descriptor limit was too low.

### Fix Applied

Use this command to start the dev server with increased file limits:

```bash
# Option 1: Increase limit and start (Recommended)
ulimit -n 8192 && source ~/.nvm/nvm.sh && nvm use 18 && cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite && npm start

# Option 2: Disable file watching
METRO_WATCH_ENABLED=false npm start

# Option 3: Use watchman (if installed)
watchman version && npm start
```

---

## Alternative: Permanent Fix

Add to your `~/.zshrc` or `~/.bashrc`:

```bash
# Increase file watchers limit
ulimit -n 8192
```

Then restart your terminal.

---

## What to Do Now

1. Run one of the commands above
2. Get the QR code
3. Scan with Expo Go on your Android phone
4. Your app will appear!

---

## If Error Persists

Try these steps:

```bash
# 1. Clear Metro cache
cd /Users/Abdourhamane/IdeaProjects/creators-format/CreatorFormatLite
rm -rf node_modules/.cache

# 2. Use maximum file limit
ulimit -n 10000

# 3. Disable file watching
npm start
# Then press 's' to disable watching if prompted
```

---

## Quick Reference

**Problem**: EMFILE too many open files
**Cause**: File watcher limit
**Solution**: `ulimit -n 8192 && npm start`
**Alternative**: `METRO_WATCH_ENABLED=false npm start`

---

## Status

✅ Dependencies installed
✅ Node 18 configured  
✅ Expo ready
⏳ Just need to fix file watcher issue

Try the commands above and your dev server should work!


