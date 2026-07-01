# Deployment Guide for Plotnest Africa Realty

This guide will help you deploy your static MVP website to both Azure Static Web Apps and GitHub Pages.

## Prerequisites
- GitHub account
- Azure account (for Azure deployment)
- Node.js installed locally
- Git installed locally

## Step 1: Prepare Your GitHub Repository

### 1.1 Initialize Git Repository
```bash
cd "D:\VIbeCode\Plotnest Africa Realty\frontend"
git init
git add .
git commit -m "Initial commit - Static MVP website"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `plotnest-africa-realty` (or your preferred name)
3. Make it Public
4. Don't initialize with README (we have our code)
5. Click "Create repository"

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/plotnest-africa-realty.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to GitHub Pages

### 2.1 Create GitHub Actions Workflow
Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 2.2 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: GitHub Actions
4. Save

### 2.3 Push the workflow
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

Your site will be available at: `https://YOUR_USERNAME.github.io/plotnest-africa-realty/`

## Step 3: Deploy to Azure Static Web Apps

### 3.1 Create Azure Static Web App
1. Go to https://portal.azure.com
2. Search for "Static Web Apps"
3. Click "Create"
4. Fill in the details:
   - Resource Group: Create new or use existing
   - Name: `plotnest-realty` (must be unique)
   - Region: East Africa (if available) or closest region
   - Pricing tier: Free
5. Click "Next: Deployment"

### 3.2 Configure Deployment
1. Source: GitHub
2. Build details:
   - Repository: Select your repository
   - Branch: main
   - Build presets: Next.js
   - App location: `/`
   - API location: (leave empty)
   - Output location: `out`

### 3.3 Review and Create
1. Click "Review + create"
2. Click "Create"

Azure will automatically:
- Create the Static Web App
- Set up GitHub Actions workflow
- Deploy your site on first push

Your site will be available at: `https://plotnest-realty.azurestaticapps.net`

## Step 4: Custom Domain Setup (Optional)

### For GitHub Pages
1. Go to repository Settings → Pages
2. Click "Custom domain"
3. Add your domain (e.g., `plotnest.co.ke`)
4. Configure DNS records as instructed

### For Azure Static Web Apps
1. Go to your Static Web App in Azure Portal
2. Settings → Custom domains
3. Add your custom domain
4. Configure DNS records

## Troubleshooting

### Build Errors
- Ensure `next.config.ts` has `output: 'export'`
- Check that all client components have `'use client'` directive
- Verify images are set to `unoptimized: true`

### GitHub Pages Issues
- Check Actions tab for build logs
- Ensure repository is Public
- Verify GitHub Actions permissions

### Azure Issues
- Check Deployment Center in Azure Portal
- Review GitHub Actions logs
- Ensure build output location is `out`

## Local Testing

Before deploying, test locally:
```bash
npm run build
npm run start
```

Visit http://localhost:3000 to verify the site works.

## Next Steps

1. Choose your primary deployment platform (GitHub Pages or Azure)
2. Follow the respective setup steps
3. Test the deployed site
4. Set up custom domain if you have one
5. Monitor deployment logs for any issues

## Support

For issues:
- GitHub Pages: https://docs.github.com/pages
- Azure Static Web Apps: https://docs.microsoft.com/azure/static-web-apps
- Next.js: https://nextjs.org/docs