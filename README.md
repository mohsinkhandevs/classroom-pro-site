# Classroom Content Downloader — Web Pages

Static site for Google OAuth API verification, deployed on a single subdomain via Vercel.

| Page | URL |
|------|-----|
| 🏠 Home Page | `https://classroom.mohsinkhandevs.com` |
| 📜 Terms of Service | `https://classroom.mohsinkhandevs.com/tos` |
| 🔒 Privacy Policy | `https://sites.google.com/view/classroom-pro-privacy/home` |

---

## 📋 Google OAuth Verification URLs

Submit these exact URLs in the Google Cloud Console OAuth consent screen:

| Field | Value |
|-------|-------|
| **Application Home Page** | `https://classroom.mohsinkhandevs.com` |
| **Terms of Service** | `https://classroom.mohsinkhandevs.com/tos` |
| **Privacy Policy** | `https://sites.google.com/view/classroom-pro-privacy/home` |

---

## 🚀 Deploying to Vercel

### Step 1 — Push this repo to GitHub
```bash
git init
git add .
git commit -m "Initial commit: home page and ToS"
git remote add origin https://github.com/mohsinkhandevs/classroom-pro-site.git
git push -u origin main
```

### Step 2 — Import to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the `classroom-pro-site` GitHub repository
3. Leave **Root Directory** as `.` (the repo root)
4. Framework Preset → **Other** (it's a static site)
5. Click **Deploy**

### Step 3 — Add Custom Domain
1. In your Vercel project → **Settings → Domains**
2. Add: `classroom.mohsinkhandevs.com`
3. In your domain registrar (e.g., Namecheap), add a **CNAME** record:
   - **Host:** `classroom-pro-downloader`
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** Automatic
4. Wait 1–5 minutes for DNS propagation → Vercel auto-provisions SSL ✅

### Step 4 — Verify
- Visit `https://classroom.mohsinkhandevs.com` → Home page loads
- Visit `https://classroom.mohsinkhandevs.com/tos` → ToS page loads

---

## 📁 File Structure

```
classroom-pro-site/
├── home/
│   ├── index.html      ← Landing page (home page)
│   ├── style.css       ← All styles (dark glassmorphism)
│   └── main.js         ← Interactions & animations
├── tos/
│   └── index.html      ← Terms of Service (self-contained)
├── vercel.json         ← Routing config (/ → home, /tos → tos)
└── README.md           ← This file
```

---

## ✏️ Pre-Deploy Checklist

**In `home/index.html`:**
- [ ] Replace `https://chromewebstore.google.com` with your actual Chrome Web Store listing URL
- [ ] Verify the feature-request form link `https://forms.gle/VzWq2Uxu9GXkv4XB7` is correct

**In `tos/index.html`:**
- [ ] Confirm the **Effective Date** is accurate
- [ ] All links already point to `https://classroom.mohsinkhandevs.com` ✅

---

## 💡 Suggested Next Steps

See the suggestions section at the bottom of this README for ways to improve the site after launch.

---

## 🔮 Suggested Improvements (Post-Launch)

| # | Idea | Effort | Impact |
|---|------|--------|--------|
| 1 | **Host Privacy Policy here too** (`/privacy`) instead of Google Sites — looks far more professional to Google reviewers | Low | High |
| 2 | **Add a favicon** (`/favicon.ico` or SVG) — currently missing, browsers show a blank tab icon | Low | Medium |
| 3 | **Add Open Graph image** (`og:image` meta tag) — makes link previews on Discord/WhatsApp look great | Low | Medium |
| 4 | **Add a demo GIF/video** in the hero section showing the extension in action | Medium | High |
| 5 | **Add Google Analytics (privacy-friendly)** via Vercel Analytics (zero code, free) to track visitor counts | Low | Medium |
| 6 | **Add a `/support` or `/contact` page** — Google sometimes asks for a support contact URL too | Low | Medium |
