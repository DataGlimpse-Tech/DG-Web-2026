# DataGlimpse — Company Website

Official website for **DataGlimpse**, an MSME-certified R&D technology company building AI-integrated data products. Based in Bengaluru, India — fully remote.

🌐 **Live:** [dataglimpse.co.in](https://dataglimpse.co.in)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Animations | Framer Motion |
| Scroll | react-scroll |
| Count-up | react-countup + react-intersection-observer |
| Styling | Pure CSS (custom properties, no Tailwind) |
| Fonts | Plus Jakarta Sans + Inter (Google Fonts) |
| Deployment | Netlify |

No backend. No database. No tracking. Pure static site.

---

## Getting Started

### Prerequisites

- Node.js v18 or higher

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
DG/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── IMG_8417.JPEG          # Company logo (navbar + footer + favicon)
│   │   └── workshops/
│   │       ├── workshop-1/            # TechFolk #01 session images
│   │       └── workshop-2/            # TechFolk #02 session images
│   ├── videos/
│   │   ├── about.mp4                  # About section demo video
│   │   ├── dataglimpse.mp4            # MVP/Products section video
│   │   └── synthetic-data.mp4         # Projects section demo video
│   └── _redirects                     # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Fixed glassmorphism nav with smooth scroll
│   │   ├── Hero.jsx                   # Canvas particle network + typewriter
│   │   ├── About.jsx                  # Mission, vision, pillars + demo video
│   │   ├── Research.jsx               # 6 R&D domain cards
│   │   ├── Projects.jsx               # Synthetic Data Generator showcase
│   │   ├── Products.jsx               # MVP process + "What We Build" grid
│   │   ├── Workshops.jsx              # TechFolk industry expert sessions
│   │   ├── Careers.jsx                # Open internship roles
│   │   ├── Contact.jsx                # Email CTA + social links
│   │   └── Footer.jsx                 # Links, Privacy Policy modal
│   ├── hooks/
│   │   └── useScrollProgress.js       # Scroll progress bar hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                      # CSS variables, globals, utilities
├── index.html
├── package.json
└── vite.config.js
```

---

## Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#hero` | Animated particle canvas, typewriter tagline, CTAs |
| About | `#about` | Company mission, MSME badge, AI pillars, demo video |
| Research | `#research` | 6 R&D domains: AI/ML, Data Science, Computer Vision, NLP, GenAI, Data Products |
| Projects | `#projects` | Synthetic Data Generator with live demo video |
| Products (MVP) | `#products` | 4-step MVP process + what we build + video |
| Workshops | `#workshops` | TechFolk sessions — real speakers, real content |
| Careers | `#careers` | 4 open internship roles, perks, apply via email |
| Contact | `#contact` | Email CTA + LinkedIn, GitHub, Twitter, YouTube |
| Footer | — | Nav links, Privacy Policy modal |

---

## Updating Content

### Add a New Workshop (TechFolk #03, etc.)

Edit the `WORKSHOPS` array in [`src/components/Workshops.jsx`](src/components/Workshops.jsx):

```js
{
  edition: 'TechFolk #03',
  title: 'Your Session Title',
  subtitle: 'Expert Session with Name, Company',
  speaker: {
    name: 'Full Name',
    role: 'Title, Company',
    avatar: null,  // or '/images/workshops/workshop-3/speaker.jpg'
  },
  description: 'Session description...',
  highlights: ['Point 1', 'Point 2', 'Point 3'],
  tags: ['Tag1', 'Tag2'],
  date: '2025',
  bannerImage: '/images/workshops/workshop-3/banner.jpeg',
  gallery: [
    '/images/workshops/workshop-3/photo1.jpeg',
    '/images/workshops/workshop-3/photo2.jpeg',
    '/images/workshops/workshop-3/photo3.jpeg',
  ],
}
```

Place images in `public/images/workshops/workshop-3/`.

### Add a New Project

Edit the `PROJECT` object in [`src/components/Projects.jsx`](src/components/Projects.jsx). Currently shows one featured project (Synthetic Data Generator). Replace or extend as needed.

### Update Open Roles

Edit the `OPEN_ROLES` array in [`src/components/Careers.jsx`](src/components/Careers.jsx).

### Update Stats

Edit the `STATS` array in [`src/components/Stats.jsx`](src/components/Stats.jsx) (file exists, can be added to the page via `App.jsx`).

### Replace Videos

Drop replacement `.mp4` files in `public/videos/` using the same filenames:

| File | Used in |
|------|---------|
| `about.mp4` | About section |
| `dataglimpse.mp4` | Products / MVP section |
| `synthetic-data.mp4` | Projects section |

### Update the Logo

Replace `public/images/logo/IMG_8417.JPEG` with your new logo file. Update the filename reference in:
- [`src/components/Navbar.jsx`](src/components/Navbar.jsx) — `navbar__logo-img`
- [`src/components/Footer.jsx`](src/components/Footer.jsx) — `footer__logo-img`
- [`index.html`](index.html) — favicon `<link rel="icon">`

### Add Team Members

[`src/components/Team.jsx`](src/components/Team.jsx) exists with placeholder cards. To activate:
1. Add the component import in [`src/App.jsx`](src/App.jsx)
2. Replace `PLACEHOLDER_COUNT` with a real `TEAM` array:

```js
const TEAM = [
  { name: 'Name', role: 'Co-Founder & CEO', photo: '/images/team/name.jpg', linkedin: 'https://linkedin.com/in/...' },
]
```

---

## Design System

### CSS Variables

```css
--bg-primary:      #FFFFFF
--bg-secondary:    #F0F5FF
--bg-tertiary:     #E6EFFE
--accent-blue:     #0066FF
--accent-cyan:     #0077CC
--accent-gradient: linear-gradient(135deg, #0055DD, #0088FF)
--text-primary:    #0A1428
--text-secondary:  #475569
--text-muted:      #8896A8
--glass-bg:        rgba(255, 255, 255, 0.92)
--glass-border:    rgba(0, 102, 255, 0.12)
--section-pad:     120px 0
--container-max:   1200px
```

### Responsive Breakpoints

| Breakpoint | Behaviour |
|-----------|-----------|
| `> 1024px` | Full desktop layout |
| `≤ 1024px` | Reduced padding, 2-col grids |
| `≤ 900px` | Nav collapses to hamburger, 2-col stats |
| `≤ 768px` | Single column layouts, reduced font sizes |
| `≤ 580px` | Tighter cards, smaller type |
| `≤ 480px` | Mobile-first compact layout |

---

## Deployment (Netlify)

1. Push repo to GitHub
2. Connect repo in Netlify dashboard
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy — the `public/_redirects` file handles SPA routing automatically

No environment variables required.

---

## Contact

| Purpose | Email |
|---------|-------|
| General / Collaborations | info@dataglimpse.co.in |
| Careers / Internships | hr@dataglimpse.co.in |

**Socials:** [LinkedIn](https://www.linkedin.com/company/dataglimpse/) · [GitHub](https://github.com/DataGlimpse-Tech) · [Twitter/X](https://x.com/dataglimpse?s=21) · [YouTube](https://youtube.com/@dataglimpse_24)

---

© 2025 DataGlimpse. All rights reserved.
