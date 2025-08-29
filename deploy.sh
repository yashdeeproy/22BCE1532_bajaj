#!/bin/bash

echo "🚀 Deploying BFHL API to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Run tests first
echo "🧪 Running tests..."
node test.js

if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Deployment aborted."
    exit 1
fi

echo "✅ Tests passed!"

# Deploy to Vercel
echo "📦 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your API is now live. Don't forget to:"
echo "   1. Update USER_INFO with your personal details"
echo "   2. Test the /bfhl endpoint"
echo "   3. Submit the URL to the form"
