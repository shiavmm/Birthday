# 🎂 Anjali's Birthday Scrapbook

A personal, interactive, mobile-first digital scrapbook website built especially for **Anjali** from **Shivam** for her birthday (**October 21, 2026**).

Designed with a vintage handmade scrapbook aesthetic featuring warm ivory and cream paper textures, cherry-red accents, blush tones, Polaroid photo frames with washi tape, stamps, and heartfelt personal letters.

---

## ✨ Features

- **Cover & Welcome Screen**: Handmade scrapbook cover with custom badge, affectionate teasing, and an *"Open your surprise"* button.
- **The Scrapbook Begins**: Journal-style page leading into the memories.
- **Our Little Memories (Timeline)**: Photo timeline with organic rotations, Polaroid frames, captions, and handwritten notes.
- **Things I Adore About You**: Interactive folded paper notes that reveal when clicked, plus a *"Reveal all 5 notes"* button.
- **Open When... Letters**: 5 interactive envelopes opening into stationery letters with keyboard accessibility (`Esc` to close).
- **Our Photo Album**: Responsive multi-ratio gallery with built-in lightbox viewer (`←` / `→` arrow navigation).
- **A Letter from Shivam**: A longer birthday letter on lined parchment stationery with signature and wax seal.
- **The Final Surprise**: Envelope reveal triggered by *"Okay Shivam, what now?"* with subtle, restrained confetti.
- **Scrapbook Navigation**: Floating bookmark tabs to easily jump between chapters.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Vanilla CSS with custom scrapbook design system tokens
- **Icons**: Lucide React
- **Confetti**: Canvas-confetti (respects `prefers-reduced-motion`)

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
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📸 Adding Your Real Photographs

The website gracefully handles missing photos with curated scrapbook placeholder mounts. When you are ready to add your real photos, drop them into `public/images/`:

- `hero-photo.jpg` — Welcome cover photo
- `memory-01.jpg` to `memory-05.jpg` — Timeline moments
- `gallery-01.jpg` to `gallery-03.jpg` — Photo album
- `final-photo.jpg` — Final surprise reveal

See the complete guide in [public/images/README.md](public/images/README.md).

---

## ✏️ Customizing Content

All messages, letters, names, headings, and dates are centralized in a single configuration file:
👉 **`src/data/birthdayContent.ts`**

---

## 💖 Made with Love
Handcrafted with love by Shivam for Anjali • October 21, 2026.
