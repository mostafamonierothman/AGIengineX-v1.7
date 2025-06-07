#!/bin/bash

echo "🚀 Setting up ONE STEP Git hook for AGIengineX-v1.7..."

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Write pre-commit hook
cat << 'EOF' > .git/hooks/pre-commit
#!/bin/bash
echo "🔄 ONE STEP: Auto-committing changes..."
git add .
git commit -m "Auto-commit: ONE STEP update 🚀" || echo "Nothing to commit."
git push origin main
EOF

# Make it executable
chmod +x .git/hooks/pre-commit

echo "✅ ONE STEP hook installed! Now just SAVE → COMMIT → PUSH → DEPLOY 🚀"
