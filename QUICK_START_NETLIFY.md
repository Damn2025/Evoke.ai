# Quick Start: Deploy to Netlify in 5 Minutes

## 🚀 Fastest Method: Drag & Drop

1. **Build your project:**
   ```bash
   cd evoke-app
   npm run build
   ```

2. **Go to:** https://app.netlify.com/drop

3. **Drag the `dist` folder** onto the page

4. **Done!** Your site is live 🎉

---

## 📋 Recommended Method: GitHub Integration

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push
```

### Step 2: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repository
4. Netlify will auto-detect settings from `netlify.toml`

### Step 3: Add Environment Variables
In Netlify dashboard:
- Site settings → Environment variables
- Add:
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`

### Step 4: Deploy
Click "Deploy site" - Netlify will build and deploy automatically!

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] `netlify.toml` file exists
- [ ] Environment variables ready
- [ ] Code pushed to GitHub (if using Git method)

---

## 🔧 Configuration Files Created

✅ `netlify.toml` - Netlify configuration  
✅ `.nvmrc` - Node.js version specification

These files are already configured and ready to use!
