# Cyberville — Landing Page

Official landing page for **Cyberville**, a software development company based in Juba, South Sudan. We build software for pharmacies, hospitals, malls and startups.

**Live site:** [cyberville.tech](https://cyberville.tech)

## Featured Work
- **Global Pharmacy** — Pharmacy management software
- **BMG Tours** — Company website
- **Jambah** — [jambah.app](https://jambah.app)
- **GuruShnow** — [gurushnow.com](https://gurushnow.com)

## Contact
- Phone / WhatsApp: +211 92 273 4334
- Email: cybervilletech@gmail.com
- Instagram / TikTok: @cybervillejuba

## Tech Stack
- Pure HTML, CSS & vanilla JS — zero dependencies, zero build step
- Google Fonts (Sora + Inter)
- Fully responsive, SEO-ready with Open Graph tags

## Local Development
No build tools needed. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deployment (Vercel)
This is a static site — Vercel auto-detects it with no configuration:

1. Push to GitHub (already done if you're reading this from the repo)
2. Go to [vercel.com/new](https://vercel.com/new) and import this repository
3. Framework Preset: **Other**, no build command, output directory: default (`./`)
4. Click **Deploy**
5. Add your custom domain: Project → Settings → Domains → add `cyberville.tech` and `www.cyberville.tech`
6. At your domain registrar, point DNS to Vercel:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`

Vercel provisions free SSL automatically.
