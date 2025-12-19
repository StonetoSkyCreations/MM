# Content guide

This site is plain HTML, CSS, and minimal JavaScript. Edit copy directly in the page files. Keep the calm, professional tone and avoid hype or added claims.

## Pages and copy
- Update text within each page file (for example `index.html`, `about.html`).
- Keep headings and short paragraphs; avoid adding long blocks or repeated ideas.
- The navigation and footer are repeated on every page, so update links in all files if a page is renamed.

## Base URL and SEO
- Replace `https://example.com/` with the live site URL everywhere it appears (head meta tags, `sitemap.xml`, `robots.txt`, and the `SITE_BASE` script constant).
- Canonical and sharing URLs are built from `SITE_BASE` plus the `data-page-path` attribute on the `<body>` tag.
- Update the Open Graph image URL if you change the image location.

## Booking embed
- The booking embed on `booking.html` uses a SimplyBook widget. Update the `url` inside the `SimplybookWidget` script block with your live booking link and adjust `theme_settings` if needed.

## Contact form
- The contact form currently opens the visitor's email client via `mailto:contact@example.com`. Replace that email address with the preferred contact email or swap the form action to your form provider's endpoint.

## Style tweaks
- Colors, spacing, and typography live in `assets/css/styles.css`. Adjust CSS variables at the top of that file for palette changes.
- Keep the maximum content width around 1100px and preserve the generous spacing for readability.
- A soft background utility (`.bg-soft-image`) uses `assets/img/background-placeholder.svg` at low opacity; replace that file or update the URL in CSS to change the imagery.

## Accessibility and tone
- Maintain descriptive link text and visible focus states.
- Stay in third person and avoid promotional language or new credentials.
