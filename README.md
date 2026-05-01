# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📧 Contact form
- 🎯 Easy to customize

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/Hero.jsx` - Change your name and title
- **About Section**: `src/components/About.jsx` - Update your bio and stats
- **Projects**: `src/components/Projects.jsx` - Add your projects
- **Skills**: `src/components/Skills.jsx` - Update your skills
- **Contact**: `src/components/Contact.jsx` - Add your contact information

### Styling

- Colors and theme variables are in `src/index.css`
- Component-specific styles are in their respective CSS files

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- CSS3 with modern features
- Responsive design

## License

MIT License - feel free to use this template for your own portfolio!
