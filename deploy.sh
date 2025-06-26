#!/bin/bash

# Path to your GitHub Pages repo
GH_PAGES_DIR=../zepro2004.github.io/

# Build the project
npm run build

# Clean and copy build files
rm -rf $GH_PAGES_DIR/*
cp -r dist/* $GH_PAGES_DIR/

# Optional: auto-commit
cd $GH_PAGES_DIR
git add .
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push

