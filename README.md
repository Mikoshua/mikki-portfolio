# Mikhaela Bigueras — Portfolio

Personal site built with Next.js + Tailwind CSS. Investor-facing portfolio featuring **AKIT Beauty**, **GroundUP**, **Kollabayan**, and **Mapua Machina** robotics championships.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✏️ Editing Content

**All editable text lives in one file:** `src/data/content.ts`

Edit there to change your name, bio, project descriptions, awards, etc. You don't need to touch the components.

To add **GitHub** or **Instagram** later, uncomment those lines in the `profile.links` object in `content.ts`, then add the matching link in the contact section of `src/app/page.tsx`.

---

## 📁 Images

All in `/public/`:
- `/akit/` — logo + app mockups
- `/groundup/` — brand banner + 3 drone CAD renders
- `/kollab/` — landing + discover screenshots
- `/robotics/` — 7 photos (Robolution champion, team, jersey, etc.)

To swap any image, just replace the file with the same filename. Done.

---

## 🌐 Deploying to Vercel (Free)

### First time:
1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/mikki-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub
3. Click "Add New Project" → import repo → click Deploy
4. Free `yourname.vercel.app` URL appears immediately

### Custom domain:
1. Buy at [porkbun.com](https://porkbun.com) (~$10/yr for `.com`)
2. Vercel → Project Settings → Domains → add your domain → paste the DNS records they show you into your registrar

### Updates:
After first setup, every `git push` auto-deploys.

---

## 🎨 Design Tokens

In `tailwind.config.js`:
- `cream` — main background
- `ink` — dark text / dark sections
- `ash` / `smoke` — secondary text
- `rose` / `rosedust` — AKIT pink accent
- `sage` / `sageleaf` — GroundUP green hint

Fonts: **Fraunces** (serif display) + **DM Sans** (body) via Google Fonts.

---

## 📦 Site Structure

```
src/
├── app/
│   ├── layout.tsx       ← fonts, metadata
│   ├── page.tsx         ← THE WHOLE SITE (single page)
│   └── globals.css      ← global styles + grain texture
└── data/
    └── content.ts       ← ALL EDITABLE TEXT HERE
```

Sections on the page (in order):
1. Hero — name, bio, status pill
2. Marquee strip — rotating taglines
3. AKIT Beauty — mockup hero + features
4. GroundUP — brand banner + 3-drone gallery
5. Kollabayan — 2 screenshots stacked
6. Mapua Machina — awards + photo carousel (dark section)
7. Contact — email + LinkedIn
8. Footer

---

Made with ☕ in Manila.
