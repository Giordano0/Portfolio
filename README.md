# Personal Portfolio — Giordano Dolenz

A dark, minimal personal portfolio site built from scratch with HTML, CSS, and Vanilla JavaScript. Showcases projects across web development, Python, and C.

**[Live Site →](https://giordano0.github.io/)**

---

## Features

- **Animated background** — floating geometric shapes with CSS keyframe animations
- **Tabbed project gallery** — organized by language (HTML/CSS/JS · Python · C), rendered dynamically from a data file
- **Latest project card** — hero section that updates with a single line of code
- **Scroll animations** — cards fade in on scroll via the Intersection Observer API
- **Fully responsive** — mobile-first layout using Flexbox and media queries
- **Data-driven projects** — add or update projects by editing `projects.js` only, never touching the HTML

---

## Project Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── projects.js     ← edit this to add/update projects
│   └── render.js
└── images/
    ├── latest-project-img/
    └── projects/
        ├── html-css-javascript/
        ├── python/
        └── c/
```

---

## Adding a New Project

Open `js/projects.js` and add an object to the relevant array (`web`, `python`, or `c`):

```js
{
    img: "./images/projects/html-css-javascript/my-project.png",
    alt: "My Project",
    title: "My Project",
    description: "A short description of what it does and what you learned.",
    github: "https://github.com/Giordano0/my-project",   // optional
    live: "https://giordano0.github.io/my-project/"       // optional
}
```

To update the **latest project** shown in the hero section, edit the `latestProject` object at the bottom of the same file.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Custom Properties, Keyframes) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Inter, Roboto Mono |
| Deployment | GitHub Pages |

---

## Local Development

No build tools or dependencies required.

```bash
git clone https://github.com/Giordano0/portfolio.git
cd portfolio
# open index.html in your browser
```

Or use the VS Code **Live Server** extension for auto-reload on save.

---

## License

This project is open source and available under the [MIT License](LICENSE).
