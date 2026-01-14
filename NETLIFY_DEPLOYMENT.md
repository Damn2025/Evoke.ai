# Complete Netlify Deployment Guide for EVOKE AI

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com)
- Your project code ready
- Node.js installed locally (for testing)

---

## Method 1: Deploy via Netlify Dashboard (Recommended for Beginners)

### Step 1: Prepare Your Project

1. **Ensure your project builds successfully:**
   ```bash
   cd evoke-app
   npm install
   npm run build
   ```

2. **Test the build locally:**
   ```bash
   npm run preview
   ```
   - Visit `http://localhost:4173` to verify everything works
   - Press `Ctrl+C` to stop the preview server

3. **Verify the `dist` folder was created:**
   - Check that `dist/index.html` exists
   - Check that `dist/assets/` folder contains JavaScript and CSS files

### Step 2: Push to GitHub (if not already done)

1. **Initialize Git (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `evoke-ai`)
   - Don't initialize with README

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/evoke-ai.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy on Netlify

1. **Go to Netlify Dashboard:**
   - Visit https://app.netlify.com
   - Sign in or create an account

2. **Add New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" (or GitLab/Bitbucket)
   - Authorize Netlify to access your GitHub account
   - Select your repository (`evoke-ai`)

3. **Configure Build Settings:**
   Netlify should auto-detect these settings (they're in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leave empty, or `evoke-app` if your repo root is one level up)

4. **Set Environment Variables (Important!):**
   - Click "Show advanced" → "New variable"
   - Add your EmailJS credentials:
     - `VITE_EMAILJS_PUBLIC_KEY` = your public key
     - `VITE_EMAILJS_SERVICE_ID` = your service ID
     - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - Click "Deploy site"

5. **Wait for Deployment:**
   - Netlify will install dependencies and build your site
   - This takes 2-5 minutes
   - Watch the deploy log for any errors

6. **Your Site is Live!**
   - Netlify will provide a URL like: `https://random-name-123.netlify.app`
   - You can customize it in Site settings → Domain settings

---

## Method 2: Deploy via Netlify CLI (For Advanced Users)

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```
- This will open your browser to authorize

### Step 3: Initialize Netlify

```bash
cd evoke-app
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Build command: `npm run build`
- Directory to deploy: `dist`

### Step 4: Set Environment Variables

```bash
netlify env:set VITE_EMAILJS_PUBLIC_KEY "your_public_key"
netlify env:set VITE_EMAILJS_SERVICE_ID "your_service_id"
netlify env:set VITE_EMAILJS_TEMPLATE_ID "your_template_id"
```

### Step 5: Deploy

```bash
netlify deploy --prod
```

---

## Method 3: Drag & Drop Deployment (Quickest)

1. **Build your project:**
   ```bash
   cd evoke-app
   npm run build
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/drop
   - Drag and drop the `dist` folder onto the page
   - Your site will be live in seconds!

**Note:** This method doesn't support environment variables or automatic deployments.

---

## Post-Deployment Checklist

### ✅ Verify Your Site Works

1. **Check the homepage loads correctly**
2. **Test navigation** - click through all sections
3. **Test the contact form** - verify EmailJS is configured
4. **Check mobile responsiveness**
5. **Test dark/light theme toggle**

### ✅ Custom Domain (Optional)

1. Go to Site settings → Domain settings
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

### ✅ Environment Variables

If you forgot to add EmailJS variables:
1. Go to Site settings → Environment variables
2. Add:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
3. Redeploy: Deploys → Trigger deploy → Deploy site

---

## Troubleshooting

### Issue: Build fails with "Module not found"

**Solution:**
- Ensure all dependencies are in `package.json`
- Check that `node_modules` is in `.gitignore`
- Netlify will run `npm install` automatically

### Issue: Site shows blank page

**Solution:**
1. Check browser console for errors (F12)
2. Verify `dist` folder contains `index.html` and `assets/` folder
3. Check that `netlify.toml` has correct redirects
4. Verify base path in `vite.config.js` (should be `/` or empty)

### Issue: Assets not loading (404 errors)

**Solution:**
- Check that `dist/assets/` folder exists
- Verify paths in `dist/index.html` are correct
- Clear browser cache and hard refresh

### Issue: Contact form not working

**Solution:**
- Verify environment variables are set in Netlify
- Check EmailJS configuration in browser console
- Ensure EmailJS service is active

### Issue: MIME type errors

**Solution:**
- The `netlify.toml` file should handle this automatically
- If issues persist, check Netlify deploy logs

---

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- You can configure branch-specific builds in Netlify settings

---

## Useful Netlify Features

1. **Deploy Previews:** Test changes before merging
2. **Split Testing:** A/B test different versions
3. **Forms:** Built-in form handling (alternative to EmailJS)
4. **Analytics:** Track site performance
5. **Functions:** Serverless functions for backend needs

---

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://community.netlify.com
- Check deploy logs in Netlify dashboard for specific errors

---

## Quick Reference

**Build Command:** `npm run build`  
**Publish Directory:** `dist`  
**Node Version:** (Netlify auto-detects, or set in `netlify.toml`)  
**Environment Variables:** Set in Netlify Dashboard → Site settings → Environment variables
