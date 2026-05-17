# AdiMori

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0-informational?style=for-the-badge" alt="Version">
</p>

<p align="center">A premium, dependency-free countdown dashboard with dynamic theming and a polished UI.</p>

## ⏱️ Overview

AdiMori is a lightweight countdown dashboard built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no external dependencies. Clone the repository, update a single configuration file with your own dates, and you have a fully functional, visually refined countdown experience running in any browser.

It is suitable for personal milestones, product launches, event countdowns, or any use case that requires tracking time to a specific target.

## 🌐 Live Demo

Visit the live website: [AdiMori](https://adityasah2030.github.io/AdiMori/)

## ✨ Features

- **Responsive Design**: Adapts cleanly to desktop, tablet, and mobile viewports
- **Modern UI**: Clean, minimalist Apple-inspired design language with subtle micro-animations
- **Live Countdown Tiles**: Real-time updates with fluid animations, accurate to the second
- **Dynamic Theming**: Light and Dark modes with smooth color transitions and crafted gradients
- **Zero Dependencies**: Pure HTML, CSS, and vanilla JavaScript; no package manager required
- **Easy Configuration**: All countdowns are controlled from a single `data.js` file

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid, Flexbox, and CSS Variables)
- JavaScript (Vanilla)
- Font Awesome (for icons)
- Google Fonts

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic text editor to update your dates

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaSah2030/AdiMori.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AdiMori
   ```

3. Open `index.html` in your preferred browser to view the website locally. No installation steps are required!

## ⚙️ Personalizing Your Countdown

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
  }
];
```

## 📂 Project Structure

```
AdiMori/
│
├── index.html   # Main HTML file containing dashboard markup
├── style.css    # Main CSS stylesheet for theming and layout
├── script.js    # Countdown logic, theme toggle, and interactivity
├── data.js      # Countdown configuration (edit this to personalize)
├── LICENSE      # MIT License file
└── README.md    # Project documentation
```

## 🔄 Future Updates

- Adding custom notification sounds for completed countdowns
- Support for recurring events (annual, monthly, weekly)
- Additional theming and color palette options

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AdityaSah2030/AdiMori/issues) if you want to contribute.

## 👤 Contact

Aditya Sah - [adityasah2030@gmail.com](mailto:adityasah2030@gmail.com)

Project Link: [https://github.com/AdityaSah2030/AdiMori](https://github.com/AdityaSah2030/AdiMori)

---

<p align="center">© 2026 Aditya Sah. All rights reserved.</p>