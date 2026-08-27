# Cyberville — Landing Page

Official landing page for **Cyberville**, a software development company based in Juba, South Sudan. We build software for pharmacies, hospitals, malls and startups.

**Live site:** [cyberville.tech](https://cyberville.tech)

## Featured Work
- **Global Pharmacy** — Pharmacy management software
- **BMG Tours** — Company website
- **Jambah** — [jambah.app](https://jambah.app)
- **GurushNOW** — [gurushnow.com](https://gurushnow.com)
- **TheSeaPride** — [theseapride.com](https://theseapride.com) + restaurant operating system ([theseapride.online](https://theseapride.online))
- **Beeshop's Place** — [beeshopsplace.com](https://beeshopsplace.com) + restaurant operating system ([beeshops-restaurantos.vercel.app](https://beeshops-restaurantos.vercel.app))

## Contact
- Phone / WhatsApp: +211 92 273 4334
- Email: cybervilletech@gmail.com
- Instagram / TikTok: @cybervillejuba

## Tech Stack
- Pure HTML, CSS & vanilla JS — zero dependencies, zero build step
- Google Fonts (Sora + Inter)
- Custom SVG logo & favicon (assets/)
- Fully responsive, accessible (WCAG-minded) and SEO-optimized

## SEO Features
- Keyword-targeted title/meta for "software company in Juba, South Sudan" searches
- JSON-LD structured data: `ProfessionalService`, `WebSite`, `FAQPage`
- Open Graph + Twitter card with generated share image (`assets/og-image.png`)
- Local signals: geo meta tags, address, phone in `tel:` format
- `robots.txt` + `sitemap.xml`
- FAQ section targeting real customer questions
- Fast: single page, no frameworks, inline CSS

### After deploying to Vercel (one-time)
1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console) → add property `cyberville.tech` (Domain type) → verify with the TXT record it gives you at your domain registrar → submit `https://cyberville.tech/sitemap.xml`
2. **Bing Webmaster Tools** — import directly from Google Search Console at [bing.com/webmasters](https://www.bing.com/webmasters)
3. **Google Business Profile** — create one for "Cyberville" in Juba; link it to cyberville.tech. This is the single biggest local ranking factor.
4. Add your website link to your Instagram, TikTok, Facebook and X bios (social signals + backlinks).
5. Ask Global Pharmacy, BMG Tours, Jambah, GurushNOW, TheSeaPride and Beeshop's Place to link back to cyberville.tech — real client backlinks boost rankings.

Rankings take a few weeks after indexing. Search Console shows exactly which queries you appear for.

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
