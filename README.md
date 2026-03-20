# Cré·8

**Content-driven design creator. Anyone can be a designer.**

*Cré* means earth, soil, clay in Irish — material you shape into something.  
*·* interpunct — used in design and foreign pronunciation.  
*8* on its side is ∞ — always be creative.

---

## What is Cré·8?

Cré·8 is a guided, automation-first design tool built for people who need great-looking documents but don't have a design background. Unlike template pickers, Cré·8 works *content-first* — you give it an image, some colors, or a block of text, and it builds a coherent design from that input.

The philosophy: **give me something — anything — and I'll make it look good.**

---

## Features

- **Category-first output selection** — visual preview cards for Print, Multi-Page, Stationery, Digital, Product, and Events
- **Contextual size cards** — each size shows proportions visually *and* plain-language context ("Standard wall poster", "Best reach on IG feed")
- **Progressive reveal** — steps appear in sequence as you complete each one. Nothing collapses. You always see where you've been
- **Magic Parse** — paste raw text (event details, a menu, your bio). The parser identifies titles, headings, dates, lists automatically
- **Content-driven palette** — add an image and color suggestions are pulled from it automatically
- **Smart toasts** — non-blocking design suggestions phrased as options, not corrections
- **Resizable panels** — drag handles between left panel / canvas / right panel
- **Dark / light mode** — dark by default (Procreate-feeling), clean light mode toggle
- **PWA** — installable, works fully offline after first load
- **Export PNG** — download your canvas as a PNG at screen resolution

---

## Getting Started

### Option 1 — Open directly
Just open `index.html` in a browser. No build step, no dependencies.

```bash
git clone https://github.com/yourusername/cre8.git
cd cre8
open index.html        # macOS
# or
start index.html       # Windows
# or just drag index.html into your browser
```

### Option 2 — Serve locally (recommended for full PWA / offline support)
The service worker requires `https://` or `localhost`. Use any static server:

```bash
# Python (built-in)
python3 -m http.server 3000

# Node (if you have npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then open `http://localhost:3000`.

### Option 3 — Deploy to GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Done — your app will be live at `https://yourusername.github.io/cre8`

---

## Project Structure

```
cre8/
├── index.html              # App shell — clean HTML, no inline CSS or JS
├── manifest.json           # PWA manifest (name, icons, theme)
├── sw.js                   # Service worker (cache-first offline strategy)
│
├── css/
│   └── style.css           # All styles — CSS custom properties (tokens) + components
│
├── js/
│   └── app.js              # All application logic — data, state, rendering, canvas engine
│
├── icons/
│   ├── icon-16.png         # Favicon
│   ├── icon-32.png         # Favicon (retina)
│   ├── icon-192.png        # PWA icon (Android, "Add to Home Screen")
│   ├── icon-512.png        # PWA icon (splash screen)
│   ├── icon-192.svg        # SVG source
│   ├── icon-512.svg        # SVG source
│   └── generate_icons.py   # Regenerate icons (requires Pillow: pip install Pillow)
│
└── README.md
```

---

## How the App Works

### The Brief (Steps 1–4)
The left panel walks you through four steps that stay visible once completed:
1. **Category** — broad world (Print, Digital, Events…)
2. **Format** — specific type (Poster, Flyer, Social Post…)
3. **Size** — contextual size cards showing real-world use
4. **Intent** — what the design needs to *do* (announce, sell, celebrate…)

### Your Stuff (Step 5)
Three input cards — Images, Colors, Text. Add at least one. The more you add, the more the app knows. They're interconnected: add an image and the Colors card immediately suggests a palette extracted from it.

**Magic Parse**: paste any block of text into the Content card. Hit "Parse content" and the app identifies:
- `title` — the main heading (first line, or all-caps short line)
- `heading` — supporting headlines
- `date` — dates and times (event details, publication dates)
- `list` — bullet/dash-prefixed items
- `body` — everything else

### Canvas
- Picks up correct proportions immediately on format selection (placeholder skeleton)
- Generates real design on "▶ Generate"
- Live-updates as you change content, colors, or images
- Smart toasts fire with contextual suggestions (never "this is wrong", always "here are some options")

---

## Customising

### Adding output types
In `js/app.js`, find the `CATS` array. Each category has:
- `id` — unique string
- `name` — display name
- `ico` — emoji
- `svg` — inline SVG preview (the little layout sketch shown in the card)
- `types[]` — array of format objects `{id, n, ico, dim}`

Add a matching entry to `SIZES_DB` and `CPX` (canvas pixel dimensions) for the new type.

### Adding palettes
In `js/app.js`, find the `PALETTES` array. Each palette:
```js
{id: 'mypalette', n: 'Display Name', c: ['#hex1', '#hex2', '#hex3', '#hex4']}
```
Colors go dark → light (background → accent).

### Changing the accent colour
In `css/style.css`, change `--acc` and `--acc2` in `:root`. The light theme uses the same accent.

### Adding design rules / toasts
In `js/app.js`, find the `checkDesignRules()` function. Add entries to the `checks` array:
```js
{
  cond: /* boolean condition */,
  ico: '💡',
  msg: 'Your message here — phrased as an option, not a correction.',
  opts: [
    {label: 'Apply this', action: () => { /* do something */ }},
    {label: 'Keep as is', action: null}
  ]
}
```

---

## Offline Support

Cré·8 uses a service worker with a **cache-first** strategy for the app shell:

| Resource | Strategy |
|---|---|
| `index.html`, `css/`, `js/`, icons | Cache-first (instant after first load) |
| Google Fonts | Cache-first (cached on first request) |
| User image URLs | Network-first (can't cache unknown URLs) |
| Everything else | Network-first with cache fallback |

After your first visit, the app works completely offline. Fonts fall back to system serif/sans if unavailable.

---

## Roadmap

These are features planned or in discussion — contributions welcome:

- [ ] **Multi-page canvas** — page thumbnails in the Pages tab, navigate between pages
- [ ] **Element editing** — click canvas elements to move, resize, retype
- [ ] **More layout templates** per format type (minimal, bold, editorial)
- [ ] **Color extraction** — actual pixel sampling from uploaded images (using Canvas API)
- [ ] **Export PDF** — via `jsPDF` or `html2canvas` + print dialog
- [ ] **Export SVG** — for print-ready vector output
- [ ] **Save / load project** — JSON export/import of project state
- [ ] **Undo / redo** — command history stack
- [ ] **More font pairings** — let users pick from curated font pairs
- [ ] **Mobile layout** — collapsible panels, bottom sheet for Setup on small screens
- [ ] **AI intent parsing** — use an LLM API to analyse pasted text and suggest format + intent automatically

---

## Contributing

This is an early-stage project. If you want to contribute:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes — `index.html`, `css/style.css`, `js/app.js`
4. Test offline: serve locally, load once, go offline, reload
5. Open a PR with a clear description of what changed and why

No build tooling, no bundler, no framework — just HTML, CSS, and vanilla JS. Keep it that way unless there's a really compelling reason.

---

## Browser Support

| Browser | Status |
|---|---|
| Chrome / Edge 90+ | ✅ Full support |
| Firefox 90+ | ✅ Full support |
| Safari 15+ | ✅ Full support |
| Safari 14 | ⚠️ Works, no `roundRect` on Canvas (falls back gracefully) |
| Mobile Chrome / Safari | ✅ Works (panels hidden on small screens) |

---

## License

MIT — do whatever you want with it. If you build something with it, a mention would be appreciated.

---

*Built with no frameworks, no build tools, and no dependency on any cloud service. Just a file.*
