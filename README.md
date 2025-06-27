# Louis Bertrand Ntwali - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student and aspiring Full-Stack Developer. Built with React and Vite for optimal performance and developer experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Animated cards, project slideshow, and dynamic statistics
- **Contact Form** - Functional contact form with toast notifications
- **Project Showcase** - Filterable project gallery with detailed views
- **Performance Optimized** - Fast loading with Vite bundling
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🏗️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite
- **Routing**: React Router DOM 7.6.2
- **Styling**: Vanilla CSS with CSS Variables
- **Form Handling**: FormSubmit.co integration
- **Deployment**: Ready for Netlify/Vercel deployment

## 📱 Pages & Sections

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

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── app/                          # App configuration
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
├── utils/                        # Utility functions
└── main.jsx                      # App entry point
```

## 🎨 Design System

The portfolio uses a consistent design system with:
- **Color Palette**: Professional blues and grays with accent colors
- **Typography**: Modern, readable font stack
- **Spacing**: Consistent spacing scale using CSS variables
- **Components**: Reusable UI components for consistency
- **Animations**: Smooth transitions and hover effects

## 🛠️ Development

### Component Organization
Components are organized by purpose:
- **Layout**: Header, Footer, navigation components
- **Page-specific**: Components used only on specific pages
- **Shared**: Components reused across multiple pages
- **UI**: Generic, reusable UI building blocks

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

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure redirects in `public/_redirects`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts

## 🔧 Customization

To customize this portfolio for your own use:

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repo if it helped you build your own portfolio!**
