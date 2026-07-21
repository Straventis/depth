# Depth — Santhosh Thiruchendru's portfolio

Phase 1 v1: `/`, `/depthl0/`, `/depthl1/`, `/depthl2/`. Static HTML/CSS/JS, no build step, no framework, no backend.

## What's here

```
.
├── index.html          Home — hero, core-sample nav, track cards
├── depthl0/index.html  Executive view
├── depthl1/index.html  Recruiter view (resume, web-native)
├── depthl2/index.html  Hiring manager view (6 project write-ups)
└── assets/
    ├── css/
    │   ├── tokens.css   Theme system: 5 color themes × light/dark, colorblind override, 4 text sizes, 3 layout widths
    │   ├── reset.css    Base resets, typography, focus states
    │   ├── layout.css   Nav, settings panel, screen chrome — shared by every page
    │   ├── home.css     Hero, core-sample graphic, track cards
    │   ├── l0.css / l1.css / l2.css   Page-specific styles
    └── js/
        ├── theme.js     Settings panel logic, persists to localStorage
        ├── sun.js       Sunrise/sunset auto light-dark, manual override
        ├── nav.js       Highlights the active nav link
        └── l2-data.js   The 6 project entries for /depthl2/
```

Every page loads the same `tokens.css` + `reset.css` + `layout.css`, so the theme system is consistent everywhere. Content pages additionally load their own stylesheet and (for L2) `l2-data.js`.

## Content source

All copy on `/depthl0/`, `/depthl1/`, and `/depthl2/` traces back to Santhosh's base resume — no invented claims, bullets, or metrics. `/depthl2` currently covers 6 distinct projects (Straventis/DFD, OnePipeline, Salesforce Certification, Harman ADAS/DMS, Ford Infotainment, Caterpillar); this is an accurate count of distinct projects in the resume, not a placeholder for a 7th.

## Preview locally

Any static file server works. From the repo root:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Deploy

Path-based routing (`/depthl0/`, etc.) works out of the box on any static host that serves `folder/index.html` at `/folder/`:

- **Netlify** — drag the repo folder onto the Netlify dashboard, or connect the GitHub repo directly.
- **Vercel** — `vercel` from the repo root, or connect the GitHub repo.
- **GitHub Pages** — Settings → Pages → deploy from the `main` branch, root folder.

No build command is needed for any of these — it's static files as-is.

## Known limitations (Phase 1 v1)

- **`/depthL3` doesn't exist yet.** It's referenced on the home page and marked "Phase 2" — building it means the credentialed-access and access-log work scoped separately.
- **Appearance mode requests location permission on every visit** (no cookie/consent flow yet). If denied, it falls back to the visitor's OS-level light/dark setting rather than guessing a timezone.
- **No CMS.** Content lives directly in the HTML/JS files. Fine at this scale (4 pages); worth revisiting if content grows.
- **Fonts load from Google Fonts CDN**, not self-hosted. Fine for now; self-hosting would remove one external dependency if that matters later.

## Push to your own GitHub

This repo is initialized locally with commit history but has no remote configured — connect it to wherever you want it to live:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```
