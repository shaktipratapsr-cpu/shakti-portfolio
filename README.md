# Shakti Portfolio - React Migration

Modern React migration of a plain HTML/CSS/JS portfolio, built with Vite and componentized for scalability.

## Tech Stack

- React 19 (functional components + hooks)
- Vite
- React Router
- GSAP + ScrollTrigger
- Three.js
- CSS Modules

## Folder Structure

```text
portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ effects/
│  │  │  ├─ BackgroundLayers.jsx
│  │  │  ├─ CustomCursor.jsx
│  │  │  └─ Loader.jsx
│  │  ├─ layout/
│  │  │  ├─ Footer.jsx
│  │  │  └─ Navbar.jsx
│  │  └─ sections/
│  │     ├─ About.jsx
│  │     ├─ Contact.jsx
│  │     ├─ Experience.jsx
│  │     ├─ Hero.jsx
│  │     ├─ Projects.jsx
│  │     └─ Skills.jsx
│  ├─ data/
│  │  └─ portfolioData.js
│  ├─ hooks/
│  │  ├─ useCustomCursor.js
│  │  ├─ useHeroScene.js
│  │  ├─ usePortfolioAnimations.js
│  │  ├─ useScrollProgress.js
│  │  └─ useSkillsScene.js
│  ├─ pages/
│  │  └─ HomePage.jsx
│  ├─ styles/
│  │  ├─ global.css
│  │  └─ portfolio.module.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## Installation

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

## Build (Production)

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
