// This script runs automatically during Vercel's build step.
// It reads the SUPABASE_URL and SUPABASE_ANON_KEY environment variables
// (which you set in the Vercel dashboard) and writes them into config.js
// so you never have to edit config.js by hand or commit real keys to GitHub.

const fs = require('fs');

const url = process.env.SUPABASE_URL || 'YOUR_SUPABASE_PROJECT_URL';
const key = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

const content = `window.SUPABASE_URL = "${url}";\nwindow.SUPABASE_ANON_KEY = "${key}";\n`;

fs.writeFileSync('config.js', content);
console.log('config.js generated from environment variables.');
