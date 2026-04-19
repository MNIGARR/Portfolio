# Nigar Mustafazada — Portfolio Website

A modern, responsive, single-page portfolio built with **React**, **Vite**, and **Tailwind CSS v4**.

This project presents personal profile information, technical skills, selected projects, and a contact form with EmailJS integration. It includes animated visual effects (stars/meteors), theme switching (light/dark), and responsive navigation.

---

## ✨ Highlights

- Responsive portfolio layout with section-based navigation:
  - Home
  - About
  - Skills
  - Projects
  - Contact
- Light/Dark theme toggle with persistence via `localStorage`
- Animated starfield + meteor background effects
- Skill cards with category filters and progress indicators
- Contact form integrated with EmailJS
- Social/profile links and downloadable CV
- Client-side routing with a fallback Not Found page

---

## 🧱 Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS 4 + custom utility classes in `src/index.css`
- **Routing:** `react-router-dom`
- **Icons:** `lucide-react`
- **Form email delivery:** `emailjs-com`
- **Utilities:** `clsx`, `tailwind-merge`

---

## 📁 Project Structure

```text
.
├─ public/
├─ src/
│  ├─ assets/                # Static assets (including CV)
│  ├─ components/            # Reusable page sections/components
│  ├─ lib/                   # Utility helpers (e.g., className merger)
│  ├─ pages/                 # Route pages
│  ├─ App.jsx                # Route definitions
│  ├─ index.css              # Theme tokens, animation keyframes, utilities
│  └─ main.jsx               # React root entry
├─ index.html
├─ vite.config.js            # Vite config + @ alias
└─ package.json              # Scripts and dependencies
```

---

## 🚀 Getting Started

### 1) Prerequisites

- **Node.js** 18+ (recommended: latest LTS)
- **npm**

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

### 4) Create a production build

```bash
npm run build
```

### 5) Preview production build locally

```bash
npm run preview
```

---

## 📜 Available Scripts

- `npm run dev` — Run development server with HMR
- `npm run build` — Build production bundle
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint checks

---

## ⚙️ Configuration Notes

### Vite alias

The project defines `@` as an alias for `./src` in `vite.config.js`.

### Contact form (EmailJS)

The contact form currently uses EmailJS identifiers directly in `src/components/ContactSection.jsx`.
For production hardening, move these values to environment variables (e.g., `.env`) and read them through `import.meta.env`.

Example variable names:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

---

## 🎨 Design & UX Notes

- Section-first layout for quick scanning by recruiters/clients
- Smooth-scroll anchor navigation
- Theme-aware color tokens defined in CSS variables
- Reusable custom utilities such as:
  - `cosmic-button`
  - `gradient-border`
  - `card-hover`
  - `text-glow`

---

## 🌐 Deployment

This Vite app can be deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages (with proper base path setup)

Typical deployment flow:

1. Push repository to your Git provider
2. Connect repository to hosting platform
3. Use build command: `npm run build`
4. Set output directory to `dist`

---

## 🔮 Suggested Next Improvements

- Add project thumbnails and descriptions in the Projects section
- Add form validation feedback/toasts beyond browser defaults
- Move secrets/config to environment variables
- Add automated tests (unit/component and basic e2e)
- Improve accessibility audits (ARIA labels, focus states, contrast checks)

---

## 👤 Author

**Nigar Mustafazada**

- LinkedIn: https://www.linkedin.com/in/nigarmustafazada/
- Instagram: https://www.instagram.com/m.nigaar_/
- Email: nigarrmustafazada@gmail.com

---

## 📄 License

No license file is currently included in the repository. Add a `LICENSE` file if you want to define terms of use.
