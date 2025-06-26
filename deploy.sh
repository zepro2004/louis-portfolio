#!/bin/bash

# Stop the script if any command fails
set -e

echo "🚀 Starting deployment..."

# --- Configuration ---
# The directory of your local clone of the zepro2004.github.io repo.
# Note: Using a more descriptive variable name.
GH_PAGES_DIR="../zepro2004.github.io/"

# --- Safety Check ---
# Check if the deployment directory actually exists.
if [ ! -d "$GH_PAGES_DIR" ]; then
  echo "❌ Deployment Error: Directory $GH_PAGES_DIR does not exist."
  echo "Please clone your GitHub Pages repo next to your project folder."
  exit 1
fi

# --- Build Step ---
echo "📦 Building the project..."
npm run build
echo "✅ Build complete."

# --- Deploy Step ---
echo "🚚 Syncing files to $GH_PAGES_DIR..."
# Use rsync to copy files.
# --delete removes old files from the destination.
# --exclude='.git' is CRITICAL to prevent deleting the git repo in the destination.
rsync -av --delete --exclude='.git' dist/ "$GH_PAGES_DIR"
echo "✅ Sync complete."

# --- Git Commit and Push ---
echo "📖 Committing and pushing to GitHub..."
# Navigate into the GitHub Pages repo
cd "$GH_PAGES_DIR"

# Add all changes
git add .

# Commit with a timestamp
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to the remote repository
git push

echo "🎉 Deployment successful!"

# Return to the previous directory
cd -

