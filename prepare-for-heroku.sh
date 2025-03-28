#!/bin/bash

# Script to prepare the project for Heroku deployment

echo "Preparing the project for Heroku deployment..."

# Create assets directory if it doesn't exist
echo "Setting up assets directory..."
mkdir -p client/src/assets

# Copy image assets to the client/src/assets directory
echo "Copying image assets..."
cp attached_assets/*.png client/src/assets/

# Copy files with .heroku extension to their proper names
echo "Copying configuration files..."
cp vite.config.heroku.js vite.config.js
cp package.json.heroku package.json
cp server/index.heroku.ts server/index.ts

# Ensure the procfile exists
if [ ! -f "Procfile" ]; then
  echo "Creating Procfile..."
  echo "web: npm start" > Procfile
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
  echo "Initializing git repository..."
  git init
  git add .
  git commit -m "Initial commit for Heroku deployment"
fi

echo "Done! Now you can run the following commands to deploy to Heroku:"
echo ""
echo "  heroku login"
echo "  heroku create your-app-name"
echo "  heroku buildpacks:set heroku/nodejs"
echo "  heroku config:set NODE_VERSION=20.x"
echo "  git push heroku main"
echo ""
echo "After deployment, run 'heroku open' to open your app in a browser."