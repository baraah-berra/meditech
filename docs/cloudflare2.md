# Complete Guide: Next.js Deployment on Cloudflare Pages

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Configuration](#project-configuration)
3. [Cloudflare Setup](#cloudflare-setup)
4. [GitHub Integration](#github-integration)
5. [Local Development](#local-development)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software
```bash
# Node.js 18.x (LTS)
# Git
# GitHub account
# Cloudflare account
```

### Project Structure
```
your-project/
├── .git/
├── .next/
├── node_modules/
├── public/
├── src/
├── .gitignore
├── next.config.js
├── package.json
├── wrangler.toml
└── README.md
```

## Project Configuration

### 1. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
```

### 2. wrangler.toml
```toml
name = "your-project-name"
compatibility_date = "2024-02-03"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "out"
```

### 3. package.json
```json
{
  "name": "your-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 4. .gitignore
```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Cloudflare Setup

### 1. Initial Setup
1. Go to Cloudflare Dashboard
2. Navigate to Pages
3. Click "Create a project"
4. Choose "Connect to Git"

### 2. Build Configuration
```
Framework preset: Custom
Build command: npm run build
Build output directory: out
Root directory location: /
```

### 3. Environment Variables
```
NODE_VERSION: 18.18.0
NPM_VERSION: 9.8.0
```

### 4. Runtime Settings
```
Compatibility flags: nodejs_compat
Compatibility date: Current date
```

## GitHub Integration

### 1. Initialize Git Repository
```powershell
# Configure Git (if not done)
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Initialize repository
git init
git add .
git commit -m "Initial commit"
```

### 2. Link to GitHub
```powershell
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
```

### 3. GitHub Repository Settings
- Enable GitHub Actions
- Add necessary secrets for deployment

## Local Development

### 1. Initial Setup
```powershell
# Install dependencies
npm install

# Install Cloudflare tools
npm install --save-dev @cloudflare/next-on-pages wrangler
```

### 2. Development Workflow
```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Test production build locally
npx serve out
```

### 3. Deployment Process
```powershell
# Commit changes
git add .
git commit -m "Your changes"
git push

# Cloudflare will automatically deploy
```

## Troubleshooting

### Common Issues and Solutions

1. Build Failures
```powershell
# Clean build files
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force out
npm run build
```

2. Dependencies Issues
```powershell
# Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

3. Image Optimization
- Use next/image with unoptimized: true
- Store images in public directory
- Use relative paths

### Deployment Verification
1. Check build logs in Cloudflare
2. Verify environment variables
3. Test all routes
4. Check image loading
5. Verify API routes (if any)

## Custom Domain Setup

### 1. Cloudflare Pages
1. Go to Pages > Your Project > Custom Domains
2. Click "Set up a custom domain"
3. Enter your domain name

### 2. DNS Configuration
- Add CNAME record
  ```
  Type: CNAME
  Name: www
  Target: your-project.pages.dev
  Proxy status: Proxied
  ```

## Maintenance and Updates

### Regular Updates
```powershell
# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

### Security Best Practices
1. Keep dependencies updated
2. Use environment variables for sensitive data
3. Enable security headers
4. Regular security audits
```