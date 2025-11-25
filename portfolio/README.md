# CS Portfolio Website

A modern, responsive portfolio website built with React and ChakraUI, inspired by the StudyKeet application design aesthetic.

## Features

- **Landing Page**: Hero section with name, title, and elevator pitch
- **About Me**: Scrollable cards with education, experience, goals, and interests
- **Projects Gallery**: Interactive grid with project cards and detailed modal views
- **Technical Skills**: Categorized skill display (Languages, Frameworks, Tools, Data Science)
- **Impact Page**: Achievements and contributions gallery
- **Contact Page**: Contact information and downloadable resume

## Tech Stack

- **React** - Frontend framework
- **ChakraUI** - Component library
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── AnimatedBackground.css
│   │   │   ├── CustomButton.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── ImpactCard.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AboutMe.jsx
│   │       ├── ProjectsGallery.jsx
│   │       ├── TechnicalSkills.jsx
│   │       ├── Impact.jsx
│   │       └── Contact.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── theme.js
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── impacts.js
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Updating Content

- **Projects**: Edit `src/data/projects.js` to add/modify your projects
- **Skills**: Edit `src/data/skills.js` to update your skills
- **Impact**: Edit `src/data/impacts.js` to add your achievements

### Styling

- **Theme**: Modify `src/styles/theme.js` for custom colors and fonts
- **Components**: Update individual component files for specific styling changes

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder, ready for static deployment.

## Deployment

The built application can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Design Inspiration

This portfolio is inspired by the StudyKeet application design, featuring:
- Animated diagonal stripe background
- Card-based layouts with rounded corners
- Gradient text headings
- Smooth hover animations
- Teal/cyan color palette

## License

This project is open source and available under the MIT License.
