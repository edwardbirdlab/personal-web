# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website project for Edward Bird, PhD - a bioinformatician specializing in metagenomic surveillance, antimicrobial resistance detection, and genomic analysis of vector-pathogen interactions. The website will showcase research projects, publications, skills, and CV information.

**Current Status:** Early planning phase - no code implementation exists yet. The repository contains only reference data for content development.

## Reference Data

The `/reference_data/` directory contains source material for the website:

- `CV.txt` - Complete CV with education, experience, publications, presentations, awards, and skills
- `major_design.txt` - Website structure and design specifications including:
  - Landing page layout (About, Education, Current/Previous Research Projects)
  - Project page templates with sections for papers, code repositories, methods, results, and future work
  - Special pages: Publications list, Skills (categorized into Bioinformatics, Data Science & ML, Wet Lab), and CV

## Website Architecture (Planned)

### Main Landing Page Structure
1. **About Me** - Personal background, contact info, professional summary
2. **Education** - BS in Microbiology (Oklahoma State), PhD in Genetics (Kansas State)
3. **Current Research Projects** - Each with dedicated sub-page:
   - Metagenomic surveillance of antimicrobial and insecticide resistance
   - Risk mapping for force health protection
   - AI-based fly worry behavior evaluation in livestock
   - Comparative genomics of Culicoides sonorensis
4. **Previous Research Projects** - Archived projects with dedicated pages
5. **Publications, Skills, CV** - Special pages with structured content

### Project Page Template
Each research project page should include:
- Associated papers (with links)
- Associated code repositories (with links)
- Introduction section
- Methods and results section
- Discussion and future work section
- Supporting figures and images

### Skills Page Categories
1. **Bioinformatics** - Nextflow pipelines, genome assembly/annotation, transcriptomics, AMR detection
2. **Data Science & Machine Learning** - Python (pandas, numpy), R, statistical analysis
3. **Wet Lab Skills** - PCR/qPCR, DNA/RNA extraction, library prep, sequencing platforms

## Development Guidelines

### Content Integration
When implementing pages, use the CV.txt and major_design.txt as authoritative sources for:
- Professional experience and timeline
- Publication listings (order and formatting as shown in CV)
- Research project descriptions and technical details
- Contact information: 405-274-3539, 4104 Spook Rock Way, Manhattan, KS 66502
- Email: edwardbird@ksu.edu

### Key Research Areas to Highlight
- **BALROG pipelines** - Flagship bioinformatics tools for AMR analysis (BALROG-MON, BALROG-ISO)
- **House fly xenosurveillance** - Novel microbial surveillance methodology
- **Culicoides sonorensis** - Genome assembly and vector-pathogen transcriptomics
- **Nextflow/Apptainer** - Pipeline development expertise
- **Multiple sequencing platforms** - Illumina, Oxford Nanopore, Aviti experience

### External Links to Consider
- GitHub repositories for BALROG pipelines and other published tools
- DOIs for published papers (several listed in CV)
- Professional profiles (if applicable)
- USDA ABADRU affiliation

## Technology Stack Decisions

**Note:** No technology stack has been selected yet. When implementing, consider:
- Static site generator vs. dynamic framework
- Hosting platform (GitHub Pages, Netlify, etc.)
- Content management approach for easy project updates
- Image optimization for scientific figures
- Responsive design for mobile viewing
- Accessibility standards

## Git Workflow

- Repository: https://github.com/edwardbirdlab/personal-web.git
- Main branch: `main`
- Currently on feature branch: `claude/2025-10-13-1760375176001`
