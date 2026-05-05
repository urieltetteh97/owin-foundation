# OWIN Foundation Website

Built with React + Vite + TailwindCSS + Framer Motion.

---

## Getting Started

```bash
npm install
npm run dev
```

## Stack
- **React 18** + **Vite 5**
- **TailwindCSS 3** — design tokens in `tailwind.config.js`
- **Framer Motion** — page/section animations
- **React Router v6** — client-side routing
- **React Icons** — icon library

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky nav with mobile drawer
│   │   └── Footer.jsx          # Footer with links + socials
│   ├── ui/
│   │   └── index.jsx           # Button, Card, SectionHeader, Badge, GreenDivider
│   └── sections/
│       ├── CampaignBanner.jsx  # Urgent campaign top bar
│       ├── HeroSection.jsx     # Homepage hero
│       ├── ProgramPillars.jsx  # 3-column program cards
│       ├── FeaturedStory.jsx   # Accra story highlight
│       ├── ApproachBlock.jsx   # 4-value approach grid
│       └── DonateCTA.jsx       # Dark green donate CTA band
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── Development.jsx         # Areas of Development portal (filtered cards)
│   ├── Donate.jsx
│   └── Contact.jsx
├── data/
│   └── siteData.js             # ★ All site copy lives here — update this first
└── assets/
    └── images/                 # Drop client photos here
```

---

## Content Updates

**All copy and data is in one place: `src/data/siteData.js`**

- `siteConfig` — name, email, social links
- `programs` — the 3 pillars (health, housing, environment)
- `team` — add photos + bios as client provides them
- `activeCampaign` — set `active: false` to hide the campaign banner
- `featuredStory` — swap in photo path once client uploads images
- `approachBlocks` — the "how we work" values section

---

## Third-Party Integrations (TODO)

### Donations — Zeffy (recommended, 0% fees for non-profits)
1. Sign up at [zeffy.com](https://zeffy.com)
2. Create a donation form
3. In `src/pages/Donate.jsx`, replace the button with the Zeffy iframe embed

### Contact Form — EmailJS
1. `npm install @emailjs/browser`
2. Sign up at [emailjs.com](https://emailjs.com)
3. In `src/pages/Contact.jsx`, uncomment the EmailJS import and wire up `handleSubmit`

### Social Media Feed
- Use [Elfsight](https://elfsight.com) or [EmbedSocial](https://embedsocial.com)
- Paste the embed snippet into `Footer.jsx` or a dedicated `SocialFeed.jsx` section

---

## Logo
When the client provides the logo:
1. Save as `src/assets/logo.svg` (prefer SVG)
2. In `Navbar.jsx`, replace the text logo block with:
   ```jsx
   <img src="/src/assets/logo.svg" alt="OWIN Foundation" className="h-9" />
   ```

## Colors
Brand palette is defined in `tailwind.config.js` under `theme.extend.colors`.
Update hex values there if the client confirms exact brand codes.

---

## Deployment (Netlify)

```bash
npm run build
```
Point Netlify to the `dist/` folder. Set publish directory to `dist` and build command to `npm run build`.
