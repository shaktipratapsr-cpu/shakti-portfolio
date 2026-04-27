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

## Contact Form (EmailJS)

The contact form is wired with EmailJS on the frontend (no backend required).

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root using `.env.example` as reference:

```env
VITE_EMAILJS_SERVICE_ID=SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=PUBLIC_KEY
```

### 3) EmailJS template variables

The form sends:
- `name`
- `email`
- `message`
- `from_name`
- `from_email`
- `reply_to`

Map these in your EmailJS template so submitted messages reach your inbox.
