# Louis Bertrand Ntwali - Portfolio Website

A modern, responsive portfolio showcasing my journey as a Computer Science student and aspiring Full-Stack Developer.

**🌐 Live Website:** [louisbertrand-portfolio.vercel.app](https://louisbertrand-portfolio.vercel.app)

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20on%20Vercel-brightgreen?style=for-the-badge&logo=vercel) 
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react) 
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages & Sections](#pages--sections)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Animated cards, hover effects, and dynamic statistics
- **Custom Hooks Architecture** - Clean separation of logic and presentation
- **Contact Form** - Functional contact form with validation and toast notifications
- **Project Showcase** - Filterable project gallery with carousel and grid views
- **Performance Optimized** - Fast loading with Vite bundling and lazy loading
- **SEO Friendly** - Dynamic page titles and semantic HTML
- **Docker Support** - Containerized development and production environments
- **Analytics Integration** - Vercel Analytics for visitor tracking

## Tech Stack

**Frontend:**
- React 18.3.1
- React Router DOM 7.6.2
- Vanilla CSS with CSS Variables

**Build & Development:**
- Vite 6.3.5
- ESLint
- Docker with multi-stage builds

**Deployment & Services:**
- Vercel (Primary hosting)
- Nginx (Production web server)
- FormSubmit.co (Contact form)
- Vercel Analytics

## Pages & Sections

### 🏠 Home
- Hero section with professional introduction
- Skills showcase with interactive cards
- Featured projects slideshow
- Animated statistics and achievements

### 👤 About
- Personal background and journey
- Technical skills and expertise
- Education and experience timeline
- Professional interests and goals

### 🎯 Projects
- Comprehensive project portfolio
- Filterable by category (Web, Desktop, Utility)
- Detailed project information and technologies
- Live demos and source code links

### 📞 Contact
- Professional contact information
- Functional contact form with validation
- Social media links
- Location and availability details

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Docker (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zepro2004/louis-portfolio.git
   cd louis-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

**Development & Build:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Docker Workflows:**
- `npm run docker:dev` - Development container
- `npm run docker:prod` - Production container
- `npm run deploy:registry` - Push to registries
- `npm run deploy:pages` - GitHub Pages deployment

## Project Structure

```
src/
├── app/                    # App configuration
│   ├── main.jsx           # App entry point
│   └── App.jsx            # Root App component
├── assets/                # Static assets
│   ├── images/            # Project and profile images
│   └── styles/            # Global CSS and animations
├── components/            # React components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── page-specific/     # Page-specific components
│   ├── shared/            # Reusable shared components
│   └── ui/                # Generic UI components
├── data/                  # Static data (projects, etc.)
├── hooks/                 # Custom React hooks
├── pages/                 # Page components
└── utils/                 # Utility functions

docker/                    # Docker configuration
├── Dockerfile            # Production build
├── Dockerfile.dev        # Development build
└── docker-compose.yml    # Container orchestration

scripts/                   # Deployment automation
├── dev.sh                # Development container script
├── prod.sh               # Production container script
├── deploy-registry.sh    # Registry deployment script
└── deploy-pages.sh       # GitHub Pages deployment
```

## Development

### Component Architecture
Components are organized by purpose:
- **Layout**: Header, Footer, navigation components
- **Page-specific**: Components used only on specific pages
- **Shared**: Components reused across multiple pages
- **UI**: Generic, reusable UI building blocks

### Custom Hooks
The project uses custom hooks for clean separation of logic:
- `useAboutLogic` - Manages About page state and data
- `useContactLogic` - Handles contact form validation and submission
- `useHomeLogic` - Controls Home page animations and interactions
- `useProjectsLogic` - Manages project filtering and navigation
- `useEntranceAnimation` - Provides consistent entrance animations
- `usePageTitle` - Dynamic page title updates
- `useResponsive` - Responsive design breakpoint detection

### Styling Approach
- CSS Variables for consistent theming
- Mobile-first responsive design
- Semantic CSS class naming
- Separate animation CSS files

## Deployment

### Primary Deployment (Vercel)
The portfolio is automatically deployed to Vercel on every push to the main branch.

**Live URL:** [louisbertrand-portfolio.vercel.app](https://louisbertrand-portfolio.vercel.app)

### Docker Deployment

**Development with hot reload:**
```bash
npm run docker:dev
```

**Production testing:**
```bash
npm run docker:prod
```

**Registry deployment:**
```bash
npm run deploy:registry dockerhub    # Push to Docker Hub
npm run deploy:registry github       # Push to GitHub Container Registry
```

### Manual Build
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

To customize this portfolio for your own use:

### 1. Update Personal Information
- Modify content in `src/pages/` components
- Update project data in `src/data/projects.js`
- Replace images in `src/assets/images/`

### 2. Styling Changes
- Update CSS variables in `src/assets/styles/global.css`
- Modify component styles as needed
- Customize animations in `src/assets/styles/animations.css`

### 3. Add New Projects
- Add project data to `src/data/projects.js`
- Include project images in `src/assets/images/projects/`
- Update project categories if needed

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made by Louis Bertrand Ntwali**

[View Portfolio](https://louisbertrand-portfolio.vercel.app) • [GitHub](https://github.com/zepro2004) • [Contact](mailto:lbertrandntwali01@gmail.com)