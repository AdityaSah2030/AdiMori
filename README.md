# AdiMori

**A premium, dependency-free countdown dashboard with dynamic theming and a polished UI.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Build Required](https://img.shields.io/badge/build-none%20required-brightgreen?style=flat-square)

---

## Overview

AdiMori is a lightweight countdown dashboard built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no external dependencies. Clone the repository, update a single configuration file with your own dates, and you have a fully functional, visually refined countdown experience running in any browser.

It is suitable for personal milestones, product launches, event countdowns, or any use case that requires tracking time to a specific target.

---

## Features

- **Dynamic theming** — Light and Dark modes with smooth color transitions and carefully crafted gradients
- **Live countdown tiles** — Real-time updates with fluid animations, accurate to the second
- **Responsive layout** — Adapts cleanly to desktop, tablet, and mobile viewports
- **Zero dependencies** — Pure HTML, CSS, and vanilla JavaScript; no package manager required
- **Refined aesthetics** — Modern typography, subtle micro-animations, and a consistent design language throughout

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/AdityaSah2030/AdiMori.git

# Navigate into the project directory
cd AdiMori

# Open the dashboard in your browser
open index.html
```

No installation step is required. The project runs directly in the browser.

---

## Personalizing Your Countdown — `data.js`

All countdown tiles are configured through a single file: `data.js`. To display your own events, open the file and update the entries with your target dates and labels.

```js
// data.js
const countdowns = [
  {
    label: "Trip to Tokyo",
    targetDate: "2025-11-01T00:00:00",
    emoji: "✈️",
  },
  {
    label: "Product Launch",
    targetDate: "2025-09-15T09:00:00",
    emoji: "🚀",
  },
  {
    label: "New Year",
    targetDate: "2026-01-01T00:00:00",
    emoji: "🎉",
  },
];
```

Save the file and refresh the browser — your countdowns will reflect the updated data immediately.

### Field Reference

| Field        | Type     | Description                                      |
|--------------|----------|--------------------------------------------------|
| `label`      | `string` | Display name rendered on the countdown tile      |
| `targetDate` | `string` | ISO 8601 date/time string (local time assumed)   |
| `emoji`      | `string` | Optional icon displayed alongside the tile label |

---

## Project Structure

```
AdiMori/
├── index.html   — Dashboard markup and structure
├── style.css    — Theming, layout, animations, and CSS variables
├── script.js    — Countdown logic, theme toggle, and interactivity
└── data.js      — Countdown configuration (edit this file to personalize)
```

---

## Customization

### Countdown data
Modify `data.js` as described above.

### Theme colors
All color tokens are defined as CSS custom properties in the `:root` block within `style.css`. Both light and dark mode palettes are declared there, so a single change propagates across the entire interface.

```css
:root {
  --accent: #your-color;
  --bg: #your-background;
  /* additional variables */
}
```

---

## Deployment

Because AdiMori has no build step, it can be deployed to any static hosting platform with minimal effort.

- **GitHub Pages** — Enable Pages on the `main` branch in your repository settings
- **Netlify / Vercel** — Connect the repository or drag and drop the project folder; no configuration needed
- **Any static host** — Upload the four files and the site is live

---

## Contributing

Bug reports and pull requests are welcome. Please keep contributions aligned with the project's vanilla stack — no frameworks or bundlers.

---

## License

MIT