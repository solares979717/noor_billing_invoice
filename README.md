# Noor Billing Pro — Deployment Guide

**Noor Mechanical Engineering Services Est.** — Ras Al Khor Industrial Area 1, Dubai, UAE

This version is wired to a **real Supabase database** and **real Supabase Auth login**, and now has a **public landing page separate from the staff portal**:

- `yourdomain.com` → public landing page for customers (services, contact, WhatsApp, map)
- `yourdomain.com/admin` → staff login + the billing system

## Files in this folder

| File | Purpose |
|---|---|
| `index.html` | Public landing page — this is what customers see |
| `logo.png` | Logo used on the landing page |
| `admin/index.html` | Staff portal (UI + styling) |
| `admin/app.js` | All app logic — saving/loading real data via Supabase |
| `admin/config.js` | Placeholder file — auto-filled by Vercel during deploy, you don't need to edit it |
| `build.js` | Small script Vercel runs to write your keys into `admin/config.js` at deploy time |
| `vercel.json` | Tells Vercel to run `build.js` and routes `/admin` correctly |
| `package.json` | Lets Vercel recognize this as a buildable project |
| `supabase-schema.sql` | Run this once in Supabase to create your tables |

## Step 1 — Create the Supabase project

1. Go to [supabase.com](https://supabase.com) → New Project
2. Wait for it to finish provisioning

## Step 2 — Run the schema

1. In your Supabase project, open **SQL Editor → New query**
2. Paste the entire contents of `supabase-schema.sql`
3. Click **Run** — this creates the `settings` and `invoices` tables

## Step 3 — Create your login

1. In Supabase, go to **Authentication → Users → Add User**
2. Enter your admin email and a password
3. This is what you'll use to log into the app

## Step 4 — Get your URL and anon key

1. In Supabase, go to **Project Settings → API**
2. Copy the **Project URL**
3. Copy the **anon public** key
4. Keep these two values somewhere handy — you'll paste them directly into Vercel in Step 6 (not into any file)

## Step 5 — Push to GitHub (admin/config.js stays with placeholder text — that's fine)

1. Open **GitHub Desktop** → Add this folder as a new repository
2. Commit all files (`index.html`, `logo.png`, `admin/index.html`, `admin/app.js`, `admin/config.js`, `build.js`, `vercel.json`, `package.json`, `supabase-schema.sql`)
3. Publish the repository to GitHub

You do **not** need to edit `admin/config.js` by hand. It will be filled in automatically during deployment using the method below — so your real Supabase keys never get committed to GitHub.

## Step 6 — Deploy on Vercel (paste your keys here, not in a file)

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import the GitHub repo you just pushed
3. Before clicking Deploy, open **Environment Variables** and add two:
   - `SUPABASE_URL` → paste your Project URL
   - `SUPABASE_ANON_KEY` → paste your anon public key
4. Click **Deploy**

Vercel will automatically run a small build step that writes these values into `admin/config.js` for you — that's what `build.js` and `vercel.json` in this folder do. You never have to open or edit `admin/config.js` yourself.

Your live URL will look like `https://noor-billing-pro.vercel.app`.

### If you ever need to change the keys later
Go to your Vercel project → **Settings → Environment Variables** → update the values → then **Deployments → Redeploy**. No need to touch GitHub or any file.

## Bilingual invoices (Arabic + English)

To comply with UAE invoicing requirements, invoices are now bilingual — matching the wording already used on your existing printed invoice books (التفاصيل, الكمية, السعر, المبلغ, المجموع, الضريبة, etc.) on both the on-screen invoice and the generated PDF.

After deploying, go to **Settings** and fill in:
- **Company Name (Arabic)**
- **Address (Arabic)**

A sensible default translation is pre-filled, but please review it for accuracy before relying on it for compliance.



## Customizing the landing page

`index.html` (the public page) is plain HTML/CSS — it doesn't pull from Supabase. To change the services list, phone number, working hours, or WhatsApp message, edit the text directly inside `index.html` and push to GitHub again. The WhatsApp number used on all the buttons is set once near the bottom of the file (`const waNumber = '971555449111';`).

## That's it

Once deployed, share `yourdomain.com` with customers and keep `yourdomain.com/admin` for staff. Log in with the email/password you created in Step 3. Every invoice, setting, and login lives in your real Supabase database — accessible from any device, any staff member, synced automatically.

## Notes

- To add more staff logins later, just add more users in **Authentication → Users** in Supabase.
- The company logo is baked in as the default. To change it, use the **Settings** page inside the app after logging in — it saves to your Supabase `settings` table.
- If you deploy without setting the `SUPABASE_URL` / `SUPABASE_ANON_KEY` environment variables in Vercel, the app will show a "Supabase not configured" screen — just add them in Vercel Settings and redeploy.
- Prefer editing `admin/config.js` by hand instead of using Vercel env vars? That still works too — just paste your URL/key directly into `admin/config.js` before pushing to GitHub, and skip the Environment Variables step in Vercel.
