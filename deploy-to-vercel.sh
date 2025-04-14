#!/bin/bash

# Priyanshu's Portfolio Vercel Deployment Script
echo "🚀 Priyanshu's Portfolio - Vercel Deployment Helper"
echo "=================================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Would you like to install it? (y/n)"
    read -r install_vercel
    if [[ $install_vercel == "y" ]]; then
        echo "Installing Vercel CLI..."
        npm install -g vercel
    else
        echo "Vercel CLI is required for deployment. Please install it manually:"
        echo "npm install -g vercel"
        exit 1
    fi
fi

# Navigate to the main-portfolio directory
echo "📁 Navigating to the main-portfolio directory..."
cd main-portfolio || {
    echo "❌ Failed to navigate to main-portfolio directory."
    echo "Make sure you're running this script from the root of the repository."
    exit 1
}

# Install dependencies
echo "📦 Installing dependencies..."
if command -v bun &> /dev/null; then
    bun install
elif command -v npm &> /dev/null; then
    npm install
else
    echo "❌ Neither bun nor npm found. Please install one of them."
    exit 1
fi

# Prompt user to log in to Vercel if not already logged in
echo "🔑 Checking Vercel login status..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "Please log in to Vercel:"
    vercel login
fi

# Build the project
echo "🏗️ Building project..."
if command -v bun &> /dev/null; then
    bun run build
else
    npm run build
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "Choose deployment options when prompted."
vercel

echo ""
echo "✅ Deployment process completed!"
echo "Visit your Vercel dashboard to see your deployed site."
