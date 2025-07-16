# 🚀 Louis Bertrand Ntwali - Portfolio Website

<div align="center">

### A m## 📖 Pages & Sections

<div align="center">

**Home** • **About** • **Projects** • **Contact**

</div>responsive portfolio showcasing my journey as a Computer Science student and aspiring Full-Stack Developer

**🌐 Live Website:** [**louisportfolio.vercel.app**](https://louisportfolio.vercel.app)

---

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20on%20Vercel-brightgreen?style=for-the-badge&logo=vercel) 
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react) 
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)  
- [Pages & Sections](#-pages--sections)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#️-development)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [License](#-license)

---

## ✨ Features

<div align="center">

**Modern Design** • **Fully Responsive** • **Lightning Fast** • **Docker Ready**

</div>

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Animated cards, hover effects, and dynamic statistics
- **Custom Hooks Architecture** - Clean separation of logic and presentation
- **Contact Form** - Functional contact form with validation and toast notifications
- **Project Showcase** - Filterable project gallery with carousel and grid views
- **Performance Optimized** - Fast loading with Vite bundling and lazy loading
- **SEO Friendly** - Dynamic page titles and semantic HTML
- **Modular Architecture** - Scalable component organization
- **Docker Support** - Containerized development and production environments
- **Analytics Integration** - Vercel Analytics for visitor tracking
- **Smart Deployment** - Automated Docker builds with intelligent rebuild detection

## 🛠️ Tech Stack

<div align="center">

| **Frontend** | **Tools** | **Deployment** |
|:---:|:---:|:---:|
| React 18.3.1 | Vite | Vercel (Primary) |
| React Router DOM | ESLint | Docker Registries |
| CSS Variables | Vercel Analytics | GitHub Pages |

</div>

**Core Technologies:**
- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.2
- **Styling**: Vanilla CSS with CSS Variables
- **Form Handling**: FormSubmit.co integration
- **Analytics**: Vercel Analytics for tracking
- **Containerization**: Docker with multi-stage builds
- **Web Server**: Nginx (production)
- **Deployment**: Vercel (primary), Docker registries, GitHub Pages (legacy)

## � Pages & Sections

<div align="center">

🏠 **Home** | 👤 **About** | 🎯 **Projects** | 📞 **Contact**

</div>

### Home Page
- Hero section with professional introduction
- Skills showcase with interactive cards
- Featured projects with slideshow for utilities
- Animated statistics and achievements

### About Page
- Personal background and journey
- Technical skills and expertise
- Education and experience timeline
- Professional interests and goals

### Projects Page
- Comprehensive project portfolio
- Filterable by category (Web, Desktop, Utility)
- Detailed project information and technologies
- Live demos and source code links

### Contact Page
- Professional contact information
- Functional contact form
- Social media links
- Location and availability details

## 🚀 Getting Started

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

---

### Available Scripts

<div align="center">

| **Development & Build** | **Docker Workflows** |
|:---|:---|
| `npm run dev` - Start development server | `npm run docker:dev` - Development container |
| `npm run build` - Build for production | `npm run docker:prod` - Production container |
| `npm run preview` - Preview production build | `npm run deploy:registry` - Push to registries |
| `npm run lint` - Run ESLint | `npm run deploy:pages` - GitHub Pages (legacy) |

</div>

> **Note:** Docker support includes intelligent rebuild detection and multi-registry deployment options

## 📁 Project Structure

```
src/
├── app/                          # App configuration
│   ├── main.jsx                  # App entry point
│   └── App.jsx                   # Root App component
├── assets/                       # Static assets
│   ├── images/                   # Project and profile images
│   └── styles/                   # Global CSS and animations
├── components/                   # React components
│   ├── layout/                   # Layout components (Header, Footer)
│   ├── page-specific/            # Page-specific components
│   ├── shared/                   # Reusable shared components
│   └── ui/                       # Generic UI components
├── data/                         # Static data (projects, etc.)
├── hooks/                        # Custom React hooks
├── pages/                        # Page components
└── utils/                        # Utility functions

docker/                           # Docker configuration
├── Dockerfile                    # Production build
├── Dockerfile.dev               # Development build
└── docker-compose.yml           # Container orchestration

scripts/                          # Deployment automation
├── dev.sh                       # Development container script
├── prod.sh                      # Production container script
├── deploy-registry.sh           # Registry deployment script
└── deploy-pages.sh              # GitHub Pages deployment (legacy)
```

## ️ Development

### Component Organization
Components are organized by purpose:
- **Layout**: Header, Footer, navigation components
- **Page-specific**: Components used only on specific pages
- **Shared**: Components reused across multiple pages
- **UI**: Generic, reusable UI building blocks

### Custom Hooks Architecture
The project uses custom hooks for clean separation of logic:
- **useAboutLogic**: Manages About page state and data
- **useContactLogic**: Handles contact form, validation, and submission
- **useHomeLogic**: Controls Home page animations and interactions
- **useProjectsLogic**: Manages project filtering, navigation, and carousel
- **useEntranceAnimation**: Provides consistent entrance animations
- **useHoverEffects**: Centralized hover effect management
- **usePageTitle**: Dynamic page title updates
- **useResponsive**: Responsive design breakpoint detection

### Styling Approach
- CSS Variables for consistent theming
- Mobile-first responsive design
- Semantic CSS class naming
- Animation CSS in separate files

### Performance Optimizations
- Lazy loading for images
- Optimized bundle splitting with Vite
- Minimal external dependencies
- Efficient React component structure

---

## 📱 Responsive Design

<div align="center">

**Mobile** • **Tablet** • **Desktop**

`< 768px` • `768px - 1024px` • `> 1024px`

</div>

The portfolio is fully responsive with carefully designed breakpoints for optimal viewing on all devices.

## 🌐 Deployment

<div align="center">

### **Production Hosting:** [Vercel](https://louisportfolio.vercel.app)

**Auto-Deploy** • **Analytics** • **Global CDN** • **Edge Functions**

</div>

---

### Quick Start with Docker
```bash
# Development with hot reload
npm run docker:dev

# Production testing
npm run docker:prod

# Build for registry deployment
npm run deploy:registry local
```

### Primary Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Push changes to main branch
3. Vercel automatically builds and deploys
4. Analytics included via @vercel/analytics

### Build for Production
```bash
npm run build
```

### Docker Deployment Options
```bash
# Local development
npm run docker:dev              # Starts on localhost:5173

# Production testing  
npm run docker:prod             # Starts on localhost:3000

# Registry deployment
npm run deploy:registry dockerhub   # Push to Docker Hub
npm run deploy:registry github      # Push to GitHub Container Registry
```

### Legacy Deployment Options

#### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure redirects in `public/_redirects`

> **For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

## 🔧 Customization

<div align="center">

**Make it yours!** Customize this portfolio to showcase your unique journey

</div>

### To customize this portfolio for your own use:

1. **Update Personal Information**
   - Modify content in `src/pages/` components
   - Update project data in `src/data/projects.js`
   - Replace images in `src/assets/images/`

2. **Styling Changes**
   - Update CSS variables in `src/assets/styles/global.css`
   - Modify component styles as needed
   - Customize animations in `src/assets/styles/animations.css`

3. **Add New Projects**
   - Add project data to `src/data/projects.js`
   - Include project images in `src/assets/images/projects/`
   - Update project categories if needed

---

## 📄 License

<div align="center">

This project is open source and available under the **[MIT License](LICENSE)**

</div>

---

<div align="center">

### **If this helped you build your portfolio, please give it a star!** ⭐

**[View Live Portfolio](https://louisportfolio.vercel.app)** • **[Contact Me](mailto:your-email@example.com)** • **[Follow on GitHub](https://github.com/zepro2004)**

---

**Made with ❤️ by Louis Bertrand Ntwali**

</div>
