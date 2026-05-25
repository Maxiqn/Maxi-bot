#!/bin/bash

# Quick Setup Script for Maxi Bot

echo "🤖 Maxi Bot - Quick Setup"
echo "═════════════════════════"

# Check Node.js version
echo ""
echo "📋 Checking Node.js..."
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)

if [ "$NODE_VERSION" -lt 24 ]; then
    echo "⚠️  Warning: Node.js 24 LTS is recommended."
    echo "Current version: $(node --version)"
else
    echo "✓ Node.js version: $(node --version)"
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if .env file exists
echo ""
echo "🔑 Setting up environment..."
if [ ! -f ".env" ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "✓ .env file created"
    echo ""
    echo "⚠️  Please edit .env file and add:"
    echo "   - DISCORD_TOKEN (your bot token)"
    echo "   - CLIENT_ID (your application ID)"
    echo ""
else
    echo "✓ .env file already exists"
fi

# Deploy commands
echo ""
echo "🚀 Deploying slash commands..."
echo "Note: Make sure your .env file is configured before proceeding."
echo ""
read -p "Deploy commands now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    node deploy-commands.js
else
    echo "Skipped command deployment."
    echo "Run 'node deploy-commands.js' when ready."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Edit .env with your Discord bot token and Client ID"
echo "  2. Run: npm start (production) or npm run dev (development)"
echo ""
echo "For more help, see SETUP.md"
