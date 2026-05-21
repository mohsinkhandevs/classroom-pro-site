# Classroom Pro Downloader — Landing Portal & Web Suite (v5.1.0)

This repository contains the premium, gold-standard static web pages and support documentation for the **Classroom Pro Downloader** Chromium extension (v5.1.0). The site is designed with a sleek, high-tech dark glassmorphism system and optimized to serve as the official hub for Google OAuth verification and user support.

It is hosted at: **[classroom.mohsinkhandevs.com](https://classroom.mohsinkhandevs.com)**

---

## 🎯 Verification Pages Directory

All required OAuth verification documents and subpages are unified under the primary custom domain and served via clean routes using Vercel rewrites:

| Page | Relative Path | Target URL |
| :--- | :--- | :--- |
| **🏠 Home Landing Page** | `/` | `https://classroom.mohsinkhandevs.com` |
| **🔒 Privacy Policy** | `/privacy` | `https://classroom.mohsinkhandevs.com/privacy` |
| **📜 Terms of Service** | `/tos` | `https://classroom.mohsinkhandevs.com/tos` |
| **🛠️ Support Center** | `/support` | `https://classroom.mohsinkhandevs.com/support` |

---

## 🔒 Security Architecture: Zero Google Drive Scopes

Traditional Google Classroom extensions request broad, restricted access to Google Drive (e.g., `drive.readonly` or `drive` scopes) which grants read/write access to users' entire private files and folders. 

Classroom Pro Downloader utilizes a **Zero Google Drive Scope** local pipeline:
- **Direct Local Fetching:** The extension requests strictly **5 read-only Classroom API scopes** to discover courses and assignments.
- **Session Authentication:** Attachment files are fetched locally and compiled directly in-memory within the background worker using active, cookie-authenticated browser requests (`credentials: 'include'`).
- **Complete User Privacy:** Google Drive remains completely private, secure, and separated from the extension. No user details, tokens, or course materials are ever transmitted to any external server or database.

---

## 📁 Repository Directory Structure

```
classroom-pro-site/
├── LICENSE             ← Custom proprietary license (personal property declaration)
├── README.md           ← This instruction document
├── vercel.json         ← High-performance routing & custom redirect mappings
├── home/
│   ├── index.html      ← Main Landing Page (Hero, Features grid, Compliance FAQs)
│   ├── style.css       ← Premium shared HSL dark glassmorphism styling
│   └── main.js         ← Core scripts (interactive mockups, scroll animations)
├── privacy/
│   └── index.html      ← Privacy Policy (scroll-tracking layout & zero-scope specs)
├── tos/
│   └── index.html      ← Terms of Service (user licensing & Islamabad jurisdiction)
└── support/
    └── index.html      ← Support Center (pre-formatted bug and feature contact anchors)
```

---

## 🚀 Deploying to Vercel

The site is pre-configured with Vercel rewrites and requires zero static server tools to deploy.

### Step 1: Push Source Code to GitHub
```bash
git init
git add .
git commit -m "feat: complete v5.1.0 premium glassmorphic website release"
git remote add origin https://github.com/mohsinkhandevs/classroom-pro-site.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Access your [Vercel Dashboard](https://vercel.com) and click **Add New → Project**.
2. Import the `classroom-pro-site` repository.
3. Keep the **Root Directory** as `.` and the **Framework Preset** as **Other** (Static Site).
4. Click **Deploy**.

### Step 3: Map the Custom Domain
1. In your Vercel Project panel, navigate to **Settings → Domains**.
2. Add: `classroom.mohsinkhandevs.com`
3. In your DNS registrar's control panel (e.g., Namecheap, Cloudflare), add a **CNAME** record:
   - **Type:** `CNAME`
   - **Host:** `classroom`
   - **Target:** `cname.vercel-dns.com`
4. The SSL certificate will automatically provision once the CNAME propagates.

---

## ⚖️ License & Proprietary Rights

This repository and all its custom stylesheets, assets, graphics, and structures are the exclusive personal property of **Mohsin Khan**. 

The code is released under a **Proprietary License** (detailed in [LICENSE](file:///c:/Users/Mohsin%20Khan/Desktop/GCPro/classroom-pro-site/LICENSE)):
- Viewing the source code for educational, review, or collaborative purposes is permitted.
- Copying, cloning, redistribution, public deployment, or commercial reuse of any styles, designs, or systems in this repository without explicit, written consent from the Owner is strictly prohibited.
- All rights are reserved by Mohsin Khan © 2026.
