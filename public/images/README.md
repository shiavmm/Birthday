# Anjali's Birthday Scrapbook — Photograph Guide

Welcome! This folder holds the real photographs for Anjali's birthday scrapbook website.

## 📸 How It Works
The website is built to gracefully handle missing photos: if any photo file hasn't been added yet, the site automatically renders a warm, handmade scrapbook paper placeholder frame with a Polaroid border, tape strip, and note indicating which file goes there.

Once you drop in your real photo with the matching filename, it **immediately** appears on the website — no code changes needed!

---

## 📂 Proposed Photograph Slots

| Filename | Where It Appears | Suggested Orientation / Ratio | Description / Idea |
| :--- | :--- | :--- | :--- |
| `hero-photo.jpg` | **Welcome Screen** | Portrait (3:4 or 4:5) | A lovely favorite solo picture of Anjali smiling, or a warm picture of both of you. |
| `memory-01.jpg` | **Our Little Memories #1** | Portrait (3:4) | "A moment worth keeping" — a special candid or favorite snapshot. |
| `memory-02.jpg` | **Our Little Memories #2** | Landscape (4:3) | "One for the memory box" — a fun date, walk, or adventure together. |
| `memory-03.jpg` | **Our Little Memories #3** | Square or Portrait (1:1) | "This one makes me smile" — a playful, goofy, or candid photo. |
| `memory-04.jpg` | **Our Little Memories #4** | Portrait (3:4) | "Adding this to my list of favourite things" — a sweet memorable day. |
| `memory-05.jpg` | **Our Little Memories #5** | Landscape (4:3) | "One of those quiet, perfect little moments" — peaceful, relaxed memory. |
| `gallery-01.jpg` | **Photo Album #1** | Portrait (3:4) | A gorgeous sunny or golden hour shot. |
| `gallery-02.jpg` | **Photo Album #2** | Landscape (16:9 or 4:3) | A candid wide shot of a fun day. |
| `gallery-03.jpg` | **Photo Album #3** | Tall Portrait (9:16 or 2:3) | A full-length or candid shot of her. |
| `final-photo.jpg` | **The Final Surprise** | Portrait or Landscape | The grand finale photograph revealed inside the final envelope! |

---

## 💡 Tips for Best Results
1. **File formats**: Standard `.jpg`, `.jpeg`, `.png`, or `.webp` files work great. (If you prefer `.png`, simply adjust the filename extension in `src/data/birthdayContent.ts` or keep them as `.jpg`).
2. **File Size**: Keeping photos between `500KB` and `2MB` each ensures lightning-fast loading on mobile phones.
3. **Editing text & captions**: You can customize every caption, date, and note anytime in `src/data/birthdayContent.ts`.
