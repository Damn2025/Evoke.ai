# Environment Variables Troubleshooting Guide

## Quick Checklist

1. ✅ **File Location**: `.env` file must be in the `evoke-app/` directory (same level as `package.json`)
2. ✅ **Variable Prefix**: All variables MUST start with `VITE_`
3. ✅ **No Spaces**: No spaces around the `=` sign
4. ✅ **No Quotes Needed**: Don't wrap values in quotes unless they contain spaces
5. ✅ **Restart Required**: **MUST restart dev server** after changing `.env`

## Correct Format

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## Incorrect Formats (Don't Use)

```env
# ❌ Wrong - No VITE_ prefix
EMAILJS_PUBLIC_KEY=value

# ❌ Wrong - Spaces around =
VITE_EMAILJS_PUBLIC_KEY = value

# ❌ Wrong - Quotes not needed (unless value has spaces)
VITE_EMAILJS_PUBLIC_KEY="value"

# ❌ Wrong - Missing value
VITE_EMAILJS_PUBLIC_KEY=
```

## How to Verify It's Working

1. **Check Browser Console**: Open DevTools (F12) and look for the "📧 EmailJS Configuration Status" log
2. **Look for**: 
   - ✅ Green checkmarks = Working
   - ❌ Red X = Not configured
3. **Check the log output** - it will show:
   - Raw environment variables
   - Processed config
   - All VITE_ prefixed variables

## Common Issues

### Issue: Variables show as "Not Set"
**Solution**: 
- Verify `.env` file is in `evoke-app/` directory
- Check variable names start with `VITE_`
- **Restart the dev server** (stop with Ctrl+C, then `npm run dev`)

### Issue: Variables show but are empty
**Solution**:
- Check for typos in variable names
- Ensure no extra spaces
- Verify the values are actually set (not just placeholders)

### Issue: Still not working after restart
**Solution**:
1. Close the terminal completely
2. Open a new terminal
3. Navigate to `evoke-app/`
4. Run `npm run dev` again

## Testing Your Setup

1. Open your `.env` file
2. Replace the placeholder values with your actual EmailJS credentials
3. Save the file
4. **Stop the dev server** (Ctrl+C in terminal)
5. **Start it again**: `npm run dev`
6. Open browser console (F12)
7. Look for the EmailJS config log

## Example Working .env File

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=abc123xyz789
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

## Still Having Issues?

1. Check the browser console for the detailed log
2. Verify the `.env` file is saved
3. Make sure you're editing the correct `.env` file (in `evoke-app/` not root)
4. Try clearing browser cache and restarting
5. Check that Vite is actually running (you should see the Vite dev server URL)
