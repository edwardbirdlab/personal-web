# Edward Bird, PhD - Personal Website

Professional website showcasing research, publications, skills, and CV for Edward Bird, PhD - Bioinformatician specializing in metagenomic surveillance, antimicrobial resistance detection, and genomic analysis.

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for project pages
- **Deployment**: GitHub Pages with GitHub Actions
- **Design**: Desktop-first responsive layout

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/edwardbirdlab/personal-web.git
cd personal-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export to `/out`)
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page (Home)
│   ├── layout.tsx         # Root layout with navigation
│   ├── globals.css        # Global styles
│   ├── projects/          # Research project pages (MDX)
│   ├── publications/      # Publications list page
│   ├── skills/            # Skills page with project links
│   └── cv/                # CV page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation bar
│   └── ProjectLayout.tsx  # Template for project pages
├── public/                # Static assets
│   └── images/           # Project images and figures
├── reference_data/        # Source content (CV, design notes)
└── next.config.mjs        # Next.js configuration
```

## Content Management

### Adding/Editing Research Projects

Project pages are located in `app/projects/[project-name]/page.mdx`. Each project uses the `ProjectLayout` component:

```mdx
import ProjectLayout from '@/components/ProjectLayout';

<ProjectLayout
  title="Project Title"
  papers={[
    { title: "Paper Title", url: "DOI URL", journal: "Journal Name" }
  ]}
  repositories={[
    { name: "Repo Name", url: "GitHub URL" }
  ]}
>

## Introduction
Your content here...

</ProjectLayout>
```

### Updating Publications

Edit `app/publications/page.tsx` to add or modify publications.

### Updating CV

Edit `app/cv/page.tsx` for CV updates.

### Adding Images

Place images in `public/images/` and reference them in MDX files:
```mdx
![Description](/personal-web/images/your-image.png)
```

Note: The `/personal-web` prefix is required for GitHub Pages.

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Ensure GitHub Pages is enabled in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Push changes to main:
```bash
git add .
git commit -m "Update content"
git push origin main
```

3. GitHub Actions will build and deploy automatically

4. Site will be available at: `https://edwardbirdlab.github.io/personal-web/`

### Manual Build

To build locally for testing:
```bash
npm run build
```

The static site will be exported to the `/out` directory.

## Configuration Notes

### Base Path

The site uses `/personal-web` as the base path for GitHub Pages. This is configured in `next.config.mjs`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/personal-web' : ''
```

If deploying to a custom domain, update this setting.

### Static Export

The site is configured for static export (`output: 'export'` in `next.config.mjs`), making it compatible with GitHub Pages.

## Customization

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styling uses Tailwind utility classes

### Navigation

Edit `components/Navigation.tsx` to add/remove navigation items.

### Footer

Footer is in `app/layout.tsx` and includes contact information.

## Reference Data

The `/reference_data` directory contains source material:
- `CV.txt` - Complete CV text
- `major_design.txt` - Original design specifications

These files are not used by the website directly but serve as reference for content updates.

## Troubleshooting

### Build Issues

If you encounter build errors:
1. Delete `node_modules` and `.next`: `rm -rf node_modules .next`
2. Reinstall dependencies: `npm install`
3. Try building again: `npm run build`

### GitHub Pages Not Updating

1. Check GitHub Actions tab for deployment status
2. Verify GitHub Pages is set to use GitHub Actions as source
3. Ensure the workflow file is in `.github/workflows/deploy.yml`

## License

See LICENSE file for details.

## Contact

Edward Bird, PhD
Email: edwardbird@ksu.edu
Phone: (405) 274-3539
