# Complete Guide: Deploying Next.js to Cloudflare Pages

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Configuration Files](#configuration-files)
4. [Cloudflare Pages Setup](#cloudflare-pages-setup)
5. [Deployment Process](#deployment-process)
6. [Domain Configuration](#domain-configuration)
7. [Troubleshooting](#troubleshooting)

## Prerequisites
- Node.js v18.x or later
- npm v9.x or later
- A Cloudflare account
- A Next.js project
- A domain name (optional)

## Project Setup

### 1. Install Required Dependencies
```bash
# Install Cloudflare Pages adapter
npm install --save-dev @cloudflare/next-on-pages

# Install wrangler for deployment
npm install --save-dev wrangler
```

### 2. Update package.json
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "pages:build": "npx @cloudflare/next-on-pages",
    "pages:deploy": "npx wrangler pages deploy .vercel/output/static --commit-dirty=true",
    "deploy": "npm run build && npm run pages:build && npm run pages:deploy"
  }
}
```

## Configuration Files

### 1. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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

[build]
command = "npm run build && npx @cloudflare/next-on-pages"

[site]
bucket = ".vercel/output/static"
```

### 3. .nvmrc (Optional but recommended)
```
v18.18.0
```

## Cloudflare Pages Setup

### 1. Create New Project
1. Log in to Cloudflare Dashboard
2. Navigate to Pages
3. Click "Create a project"
4. Choose "Direct Upload" if not using Git integration

### 2. Configure Project Settings
1. Go to Project Settings
2. Set up Environment Variables:
```
NODE_VERSION: 18.18.0
NPM_VERSION: 9.8.0
```

### 3. Runtime Configuration
1. Navigate to Settings > Runtime
2. Set Compatibility date to current date
3. Add Compatibility flag: `nodejs_compat`

## Deployment Process

### 1. Clean Installation
```bash
# Clean existing builds
rm -rf .next
rm -rf node_modules
rm -rf .vercel
rm package-lock.json

# Fresh installation
npm install
```

### 2. Build and Deploy
```bash
# Build and deploy in one command
npm run deploy

# Or step by step
npm run build
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static --commit-dirty=true
```

## Domain Configuration

### 1. Custom Domain Setup
1. Go to Cloudflare Pages > Your Project
2. Click on "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain name
5. Choose setup method:
   - Direct custom domain (subdomain)
   - Root domain

### 2. DNS Configuration
1. Go to your domain's DNS settings in Cloudflare
2. Add a CNAME record:
   ```
   Type: CNAME
   Name: www (or subdomain)
   Target: your-project.pages.dev
   Proxy status: Proxied
   ```

### 3. SSL/TLS Configuration
1. Go to SSL/TLS settings
2. Set SSL/TLS encryption mode to "Full"
3. Enable "Always Use HTTPS"

## Troubleshooting

### Common Issues and Solutions

1. Build Failures
```bash
# Clean and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

2. Deployment Errors
- Check compatibility flags in Runtime settings
- Verify environment variables
- Ensure proper Node.js version

3. Domain Issues
- Verify DNS propagation (can take up to 24 hours)
- Check CNAME record configuration
- Ensure SSL/TLS settings are correct

### Important Notes

1. Image Optimization
- Use `unoptimized: true` in next.config.js
- Store images in public directory
- Use relative paths in Image component

2. API Routes
- All API routes must use Edge Runtime
- Remove any Node.js specific code

3. Environment Variables
- Prefix client-side variables with NEXT_PUBLIC_
- Add sensitive variables in Cloudflare Pages settings

4. Performance Tips
- Use static generation when possible
- Implement proper caching strategies
- Optimize images and assets

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

### Monitoring
1. Check Cloudflare Analytics
2. Monitor build times and sizes
3. Check performance metrics in Cloudflare dashboard