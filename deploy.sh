#!/bin/bash

# Stop the script if any command fails
set -e

echo "🚀 Starting deployment..."

# --- Configuration ---
GH_PAGES_DIR="../zepro2004.github.io/"
DEPLOY_BRANCH="main"

# --- Safety Check ---
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
rsync -av --delete --exclude='.git' dist/ "$GH_PAGES_DIR"
echo "✅ Sync complete."

# --- Git Commit and Push ---
echo "📖 Committing and pushing to GitHub..."
cd "$GH_PAGES_DIR"

# Check if branch exists
if ! git show-ref --quiet refs/heads/"$DEPLOY_BRANCH"; then
  echo "❌ Branch '$DEPLOY_BRANCH' does not exist."
  exit 1
fi

# Ensure we're on the correct branch
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
if [ "$CURRENT_BRANCH" != "$DEPLOY_BRANCH" ]; then
  echo "⚠️ You're on branch '$CURRENT_BRANCH' but expected '$DEPLOY_BRANCH'."
  echo "Switching..."
  git checkout "$DEPLOY_BRANCH"
fi

# Add and commit if there are any changes
if ! git diff --quiet || ! git diff --cached --quiet; then
  git add .
  git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
else
  echo "🟢 No changes to commit."
fi

# Push to the remote
git push origin "$DEPLOY_BRANCH" || echo "❌ Push failed. Check your remote or resolve conflicts."

echo "🎉 Deployment successful!"

cd -

