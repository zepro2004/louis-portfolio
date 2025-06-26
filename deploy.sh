#!/bin/bash

# Exit if any command fails
set -e

# Path to your GitHub Pages repo
DEPLOY_DIR=../zepro2004.github.io/

# Build the project
npm run build

# Copy build to deploy repo
rsync -av --delete dist/ $DEPLOY_DIR/

# Optional: auto-commit
cd $GH_PAGES_DIR
git add .
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push

# Return to the original directory
cd -
