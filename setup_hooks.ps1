# setup_hooks.ps1
# AGIengineX-v1.7 ONE STEP FULL — Windows PowerShell version 🚀

Write-Host "🚀 Setting up ONE STEP Git hook for AGIengineX-v1.7 (PowerShell)..."

# Ensure .git/hooks folder exists
$hooksPath = ".git/hooks"
if (-not (Test-Path $hooksPath)) {
    New-Item -ItemType Directory -Path $hooksPath
    Write-Host "✅ Created hooks directory: $hooksPath"
}

# Create pre-commit hook content
$hookContent = @"
#!/bin/bash
echo '🔄 ONE STEP: Auto-committing changes...'
git add .
git commit -m 'Auto-commit: ONE STEP update 🚀' || echo 'Nothing to commit.'
git push origin main
"@

# Write to .git/hooks/pre-commit
$hookPath = "$hooksPath/pre-commit"
$hookContent | Out-File -Encoding ascii -FilePath $hookPath

# Make executable (Git for Windows honors this even on Windows)
git update-index --chmod=+x .git/hooks/pre-commit

Write-Host "✅ ONE STEP hook installed successfully! Now just SAVE → COMMIT → PUSH → DEPLOY 🚀"
