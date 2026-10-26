# AOMediaTech Ltd — Push to GitHub and deploy to Render

## 1. Push from Windows
1. Extract this ZIP to a normal folder, for example `C:\AOMediaTechLtd_website`.
2. Install Git for Windows if needed: https://git-scm.com/download/win
3. Create an **empty** GitHub repository: https://github.com/new
   - Suggested repository name: `aomediatechltd-website`
   - Do not initialize it with a README, `.gitignore`, or license.
4. Double-click `PUSH_TO_GITHUB_WINDOWS.bat` in the extracted folder.
5. Paste your GitHub repository HTTPS URL when asked, such as `https://github.com/YOUR-USERNAME/aomediatechltd-website.git`.
6. Sign in to GitHub if Git requests authentication. Do not share passwords or tokens in chat.

### Manual Git commands (alternative)
Open Command Prompt in this folder and run:

```bash
git init
git add .
git commit -m "Initial AOMediaTech Ltd website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aomediatechltd-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git says your name/email are not configured, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then repeat the commit and push commands as needed.

## 2. Deploy on Render
1. Open https://dashboard.render.com/ and sign in.
2. Select **New + → Static Site**.
3. Connect GitHub and select `aomediatechltd-website`.
4. Set the following:
   - **Branch:** `main`
   - **Root Directory:** leave blank
   - **Build Command:** leave blank
   - **Publish Directory:** `.`
5. Click **Create Static Site** and wait for the deploy to finish.
6. Open the `onrender.com` URL Render assigns to the service.

If you already have a Render service named `heavy`, open that service and check its settings before creating another service. Do not assume `heavy.onrender.com` is available or belongs to your account.

## 3. Before public launch
- Update the placeholder contact details in `index.html`.
- The contact form is a demo and does not send messages yet. Connect a form backend/service before relying on it.
- Add approved project images, logo, and testimonials.
- Test all links and mobile layout.
- Add your custom domain in Render later if you own one.

## Included
- `index.html` — homepage and service sections
- `styles.css` — responsive black-and-gold styling
- `script.js` — mobile menu and demo form interaction
- `.gitignore` — common exclusions
- `PUSH_TO_GITHUB_WINDOWS.bat` — helper to initialize Git and push to GitHub
- `DEPLOY_TO_RENDER.md` — complete publishing guide

This is a static front-end starter; it does not include a database, admin dashboard, online payments, or a working message-delivery backend.
