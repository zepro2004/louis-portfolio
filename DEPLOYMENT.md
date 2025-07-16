# Development & Deployment Scripts

## Quick Start

```bash
# Development
npm run docker:dev          # Start development container
npm run docker:prod         # Start production container

# Deployment  
npm run deploy:registry local    # Build for registry (local test)
npm run deploy:registry dockerhub # Deploy to Docker Hub
npm run deploy:pages             # Deploy to GitHub Pages
```

## Manual Script Usage

```bash
# From project root:
scripts/dev.sh              # Development container
scripts/prod.sh             # Production container  
scripts/deploy-registry.sh  # Registry deployment
scripts/deploy-pages.sh     # GitHub Pages deployment
```

## Directory Structure

```
scripts/          # All deployment scripts
├── dev.sh        # Development container
├── prod.sh       # Production container  
├── deploy-registry.sh # Docker registry deployment
└── deploy-pages.sh    # GitHub Pages deployment

docker/           # All Docker-related files
├── Dockerfile    # Production build
├── Dockerfile.dev # Development build
└── docker-compose.yml
```

## Environment Variables

```bash
DOCKER_USERNAME=your-username  # For registry deployments
KEEP_IMAGES=5                  # Number of old images to keep
```
