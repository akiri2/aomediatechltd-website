@echo off
setlocal
cd /d "%~dp0"
echo =============================================
echo AOMediaTech Ltd - GitHub Push Helper
echo =============================================
echo.
where git >nul 2>nul
if errorlevel 1 (
  echo Git was not found. Install Git for Windows from https://git-scm.com/download/win
  echo Then reopen this file.
  pause
  exit /b 1
)
if not exist .git git init
 git add .
 git commit -m "Initial AOMediaTech Ltd website"
if errorlevel 1 (
  echo.
  echo If Git says there is nothing to commit, that may be okay.
  echo If it says identity is unknown, run:
  echo   git config --global user.name "Your Name"
  echo   git config --global user.email "your-email@example.com"
  echo Then run this file again.
)
echo.
echo Create an EMPTY GitHub repository first at https://github.com/new
 echo Name suggestion: aomediatechltd-website
 echo Do not add a README, .gitignore, or license on GitHub.
echo.
set /p REPOURL=Paste the GitHub HTTPS repository URL (example: https://github.com/USERNAME/aomediatechltd-website.git):
if "%REPOURL%"=="" (
  echo No URL entered. Nothing was pushed.
  pause
  exit /b 1
)
git branch -M main
git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin "%REPOURL%"
) else (
  echo An origin remote already exists:
  git remote -v
  set /p REPLACE=Type YES to replace origin with the URL you entered: 
  if /I "%REPLACE%"=="YES" git remote set-url origin "%REPOURL%"
)
git push -u origin main
if errorlevel 1 (
  echo.
  echo Push failed. Check the repository URL, GitHub sign-in, and whether the repository already contains files.
  pause
  exit /b 1
)
echo.
echo SUCCESS: Website files pushed to GitHub.
echo Next: open https://dashboard.render.com and create a Static Site from this repository.
pause
