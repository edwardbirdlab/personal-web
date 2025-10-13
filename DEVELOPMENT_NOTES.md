# Development Notes

## Website Implementation Summary

This document summarizes the implementation of your professional website.

## What Was Built

### 1. Landing Page (Home)
- **Location**: `app/page.tsx`
- **Content**:
  - Hero section with name, title, contact info
  - About Me section with professional background
  - Education section (PhD from KSU, BS from OSU)
  - Current Research Projects (4 cards with links)
  - Previous Research Projects (3 cards with links)

### 2. Research Project Pages (7 total)

All projects use MDX format for easy content editing:

**Current Projects:**
- Metagenomic Surveillance (`app/projects/metagenomic-surveillance/page.mdx`)
  - Includes BALROG-MON and BALROG-ISO pipelines
  - Links to publications and GitHub repositories
- Culicoides Genomics (`app/projects/culicoides-genomics/page.mdx`)
  - Chromosome-scale genome assembly
- Risk Mapping (`app/projects/risk-mapping/page.mdx`)
  - Force health protection applications
- Fly Worry AI (`app/projects/fly-worry-ai/page.mdx`)
  - Computer vision for livestock behavior

**Previous Projects:**
- Transcriptomics Vector Competence (`app/projects/transcriptomics-vector-competence/page.mdx`)
- House Fly Resistome (`app/projects/housefly-resistome/page.mdx`)
- DAM Behavioral Quantification (`app/projects/dam-behavioral-quantification/page.mdx`)

Each project page includes:
- Associated publications with DOI links
- Code repositories (where applicable)
- Introduction, Methods/Results, Discussion/Future Work sections
- Placeholders for images and figures

### 3. Publications Page
- **Location**: `app/publications/page.tsx`
- **Content**: All 15 publications from CV
- Organized by year and status (In Review, In Preparation, Published)
- Includes DOI links for published papers

### 4. Skills Page
- **Location**: `app/skills/page.tsx`
- **Content**: Three main categories:
  1. **Bioinformatics & Pipeline Development**
  2. **Data Science & Machine Learning**
  3. **Wet Lab & Sequencing**
- Each skill links to relevant project pages demonstrating that skill

### 5. CV Page
- **Location**: `app/cv/page.tsx`
- **Content**:
  - Education
  - Experience (5 positions)
  - Awards and Scholarships
  - Service
  - Skills Summary
  - Link to full publications page

### 6. Navigation & Layout
- **Navigation**: `components/Navigation.tsx`
  - Links to Home, Publications, Skills, CV
  - Responsive design
- **Layout**: `app/layout.tsx`
  - Site-wide navigation
  - Footer with contact information

## Technical Implementation

### Stack
- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX for project pages
- **Deployment**: Static export for GitHub Pages

### Key Files
- `next.config.mjs` - Static export, basePath for GitHub Pages
- `app/globals.css` - Tailwind v4 imports and theme
- `postcss.config.mjs` - Tailwind PostCSS plugin
- `mdx-components.tsx` - MDX styling components
- `components/ProjectLayout.tsx` - Reusable project page template

### Design Features
- Desktop-first responsive layout
- Clean, professional academic styling
- Easy navigation between pages
- Click-through from skills to projects
- External links to publications and repositories

## Build Status

✓ **Build successful** - All 14 pages generated
✓ **Static export ready** in `/out` directory
✓ **GitHub Actions workflow** configured
✓ **All content populated** from your CV and design specifications

## Next Steps

### Immediate
1. **Test locally**: Run `npm run dev` to preview
2. **Push to GitHub**: Merge to `main` branch for automatic deployment
3. **Enable GitHub Pages**: Settings → Pages → Source: GitHub Actions

### Future Enhancements
1. **Add Images**: Place research figures in `public/images/`
2. **Update DOI Links**: Replace `#` placeholders with actual DOIs for in-prep papers
3. **Add GitHub URLs**: Update placeholder repository links
4. **Custom Domain** (optional): Configure in GitHub Pages settings
5. **Analytics** (optional): Add Google Analytics or similar

## Content Management

### To Add a New Project
1. Create `app/projects/[project-name]/page.mdx`
2. Use `ProjectLayout` component (see existing examples)
3. Add link on homepage in relevant section

### To Update Publications
1. Edit `app/publications/page.tsx`
2. Add new entries to appropriate year section
3. Increment list numbering

### To Update CV
1. Edit `app/cv/page.tsx`
2. Or edit `reference_data/CV.txt` and manually sync

### To Add Images
1. Place in `public/images/[project-name]/`
2. Reference in MDX: `![Alt text](/personal-web/images/project-name/image.png)`
3. Note: `/personal-web` prefix required for GitHub Pages

## Deployment URL

Once deployed, site will be at:
**https://edwardbirdlab.github.io/personal-web/**

## Support Files

- `CLAUDE.md` - Guide for future Claude Code sessions
- `README.md` - Full development and deployment documentation
- `.github/workflows/deploy.yml` - Automated deployment
- `reference_data/` - Original source materials (CV, design notes)

## Performance

- All pages are static HTML (fast loading)
- Minimal JavaScript (102 KB shared across all pages)
- Optimized for desktop viewing
- Mobile-friendly (responsive)

## Notes

- The site uses content from `reference_data/CV.txt` and `major_design.txt`
- All placeholder GitHub repos need actual URLs when available
- DOI links marked with `#` should be updated when papers are published
- Images mentioned in project pages should be added to `public/images/`
