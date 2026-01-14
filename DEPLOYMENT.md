# Deployment Guide

## Pre-Deployment Checklist

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Verify the build output:**
   - Check that `dist/` folder is created
   - Verify `dist/index.html` exists
   - Check that `dist/assets/` folder contains JavaScript and CSS files

3. **Test locally:**
   ```bash
   npm run preview
   ```
   - This serves the production build locally
   - Verify the site works correctly

## Common Deployment Issues

### Issue: Only HTML shows, no JavaScript/CSS

**Solution:**
1. Ensure you're deploying the `dist` folder, not the `src` folder
2. Check that all assets are in the `dist/assets/` folder
3. Verify the base path in `vite.config.js` is set correctly

### Issue: 404 errors for assets

**Solution:**
1. Check if your hosting platform requires a specific base path
2. For subdirectories, update `base` in `vite.config.js`:
   ```js
   base: '/your-subdirectory/'
   ```

### Issue: MIME type errors

**Solution:**
- The configuration files (`.htaccess`, `_headers`, `netlify.toml`, `vercel.json`) should handle this
- Ensure your hosting platform is using the correct configuration file

## Platform-Specific Instructions

### Netlify
- Uses `netlify.toml` automatically
- Deploy the `dist` folder
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Uses `vercel.json` automatically
- Deploy the `dist` folder
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
- Update `vite.config.js` base to your repository name:
  ```js
  base: '/your-repo-name/'
  ```
- Deploy the `dist` folder contents

### Custom Server
- Upload the entire `dist` folder contents
- Ensure server supports SPA routing (redirect all routes to `index.html`)
- Use `.htaccess` for Apache servers

## Troubleshooting

1. **Check browser console** for specific errors
2. **Verify file paths** in the built `index.html`
3. **Check network tab** to see which files are failing to load
4. **Ensure all environment variables** are set in your hosting platform
