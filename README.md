# EVOKE AI - React Project

A modern, interactive React application featuring a 3D scrollable experience built with Three.js, React, and Tailwind CSS.

## Project Structure

```
evoke-app/
├── src/
│   ├── components/
│   │   ├── milestones/
│   │   │   ├── VisionSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── AgentsSection.jsx
│   │   │   ├── SocialSection.jsx
│   │   │   └── FAQSection.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ProgressSidebar.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── MilestoneOverlay.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── constants.js
│   ├── hooks/
│   │   └── useThreeScene.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features

- **3D Interactive Scene**: Three.js-powered 3D visualization that responds to scroll
- **Scroll-based Navigation**: Smooth milestone-based navigation through content
- **Theme Toggle**: Dark/Light mode support
- **Modular Architecture**: Clean component separation for maintainability
- **Responsive Design**: Mobile-first responsive layout

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Dependencies

- **React** ^19.2.0 - UI library
- **Three.js** ^0.169.0 - 3D graphics
- **lucide-react** ^0.460.0 - Icon library
- **Tailwind CSS** ^3.4.13 - Utility-first CSS framework

## Component Overview

- **App.jsx**: Main application component managing state and layout
- **Navigation.jsx**: Top navigation bar with theme toggle
- **Hero.jsx**: Landing hero section
- **ProgressSidebar.jsx**: Scroll progress indicator
- **MilestoneOverlay.jsx**: Container for milestone sections
- **useThreeScene.js**: Custom hook managing Three.js scene lifecycle

## Milestone Sections

1. **Vision**: Introduction to EVOKE AI's vision
2. **Features**: Key features and capabilities
3. **Agents**: AI agent showcase (NOVA, AEON, ORION)
4. **Social**: Testimonials carousel
5. **FAQ**: Frequently asked questions

## Development

The project uses Vite as the build tool and development server. All components are modular and can be easily extended or modified.
