# Script to push code to GitHub repository
# Run this in PowerShell (you may need to run as Administrator if file locks persist)

cd d:\growthbyte

# Step 1: Remove corrupted .git directory
Write-Host "Removing corrupted .git directory..." -ForegroundColor Yellow
if (Test-Path .git) {
    # Try to remove lock files first
    Get-ChildItem .git -Recurse -File | Where-Object { $_.Name -like "*.lock" } | Remove-Item -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    Remove-Item .git -Recurse -Force -ErrorAction SilentlyContinue
}

# Step 2: Initialize git repository
Write-Host "Initializing git repository..." -ForegroundColor Green
git init

# Step 3: Add remote repository
Write-Host "Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/yashwanthk-ThinkByte/GrowthByte-2.git

# Step 4: Stage all files (respecting .gitignore)
Write-Host "Staging files (respecting .gitignore)..." -ForegroundColor Green
git add .

# Step 5: Check what will be committed
Write-Host "`nFiles to be committed:" -ForegroundColor Cyan
git status --short

# Step 6: Create initial commit
Write-Host "`nCreating initial commit..." -ForegroundColor Green
git commit -m "Initial commit: GrowthByte project"

# Step 7: Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

Write-Host "`nDone! Code pushed successfully." -ForegroundColor Green
