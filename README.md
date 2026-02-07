# Personal Portfolio - The Archive of Me

A minimal, book/Kindle-inspired personal portfolio website built with React.

## 📁 File Structure

```
your-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProjectScroll.jsx
│   │   └── ProjectScroll.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Design Features

- **Kindle/Book-inspired theme** with beige background (#f4f1ea) and black text
- **Serif fonts** (EB Garamond & Crimson Text) for that classic book feel
- **Minimal, clean design** perfect for professional portfolios
- **Horizontal scrolling project cards** with hover effects
- **Fully responsive** on all devices

## 📝 Setup Instructions

### 1. Copy Files to Your Project

**In your `public/` folder:**
- Copy `index.html`

**In your `src/` folder:**
- Copy `App.jsx`
- Copy `App.css`
- Copy `index.js`
- Copy `index.css`

**In your `src/components/` folder:**
- Copy `ProjectScroll.jsx`
- Copy `ProjectScroll.css`

### 2. Install Dependencies (if needed)

```bash
npm install react react-dom
```

### 3. Run Your Project

```bash
npm start
```

## 🔄 Customizing Your Projects

To add your real projects, edit `src/components/ProjectScroll.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Your project description',
    year: '2024'
  },
  // Add more projects...
];
```

## 🚀 Deploying to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to your `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Color Palette

- Background: `#f4f1ea` (warm beige)
- Text: `#1a1a1a` (near black)
- Card Background: `#faf9f6` (off-white)
- Border: `#e0ddd4` (subtle gray)

Enjoy your minimal, book-inspired portfolio!
