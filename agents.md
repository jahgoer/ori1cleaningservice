# Project Guide

## Architecture

This is a fully static multi-page website. Each public page is a root-level HTML file and shares common styling and behaviour.

## Key directories

- `assets/css/styles.css`: global design system, layout and responsive styles
- `assets/js/main.js`: mobile navigation, reveal animation, FAQ and static form behaviour
- `assets/images/`: lightweight local SVG illustrations
- Root HTML files: individual SEO-focused pages
- `netlify.toml`: publish and response-header configuration

## Conventions

- Keep the site framework-free and dependency-free.
- Reuse existing CSS components and variables before adding page-specific rules.
- Maintain mobile-first styles and accessible semantic HTML.
- Include useful alt text for content images and labels for controls.
- Keep page titles, descriptions, canonical URLs and headings unique.

## Non-obvious decisions

The contact form intentionally uses an email action and client-side feedback because the requested site is HTML-only with no backend. Gallery imagery is local SVG artwork to avoid third-party availability, privacy and performance issues.
