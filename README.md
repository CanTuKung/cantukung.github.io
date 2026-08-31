# Personal Academic Website (GitHub Pages)

This repository contains a **plain HTML/CSS/JavaScript** personal academic website for **Hyeon Been Seo**.
No React, no build tools, and no npm are required.

## File Structure

```text
/
  index.html
  publications.html
  style.css
  script.js
  README.md
  /images
    profile-placeholder.svg
    publication-placeholder.svg
    news-placeholder.svg
  /publications
    example-publication.html
```

## Quick Edit Guide

### 1) Edit text content
- Homepage content is in `/index.html`
- Full publication list is in `/publications.html`
- One publication detail example is in `/publications/example-publication.html`

Look for section comments, for example:
- `<!-- ABOUT SECTION START -->`
- `<!-- ABOUT SECTION END -->`

### 2) Replace images
1. Put your image file in `/images`
2. Update the `src` in HTML

Examples in `/index.html`:
- Profile image: `images/profile-placeholder.svg`
- Publication image (optional): `images/publication-placeholder.svg`
- News image (optional): `images/news-placeholder.svg`

You can also use `.jpg` or `.png` files.

### 3) Add a publication on the homepage
In `/index.html`, find:
- `<!-- PUBLICATIONS SECTION START -->`

Copy one `<article class="publication-item">...</article>` block and edit:
- Year
- Title
- Authors
- Journal / Conference
- Links (Paper / DOI / Project)
- Optional image line

### 4) Add a publication to full list
In `/publications.html`, inside `<!-- PUBLICATIONS LIST START -->`,
copy an existing publication `<article>` block and edit it.

### 5) Add a new publication detail page
1. Copy `/publications/example-publication.html`
2. Rename it (example: `/publications/my-new-paper.html`)
3. Edit title/authors/venue/year/links
4. Update links from `index.html` and/or `publications.html`

### 6) Add a News item
In `/index.html`, find:
- `<!-- NEWS SECTION START -->`

Copy one `<article class="news-item">...</article>` and edit:
- Date
- Title
- Description
- Optional image

### 7) Update CV link
In `/index.html`, replace `href="#"` for CV buttons/links with your real CV URL or file path.

## Publish with GitHub Pages

1. Push changes to your repository
2. In GitHub, go to **Settings → Pages**
3. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main** (or your publishing branch), folder: **/ (root)**
4. Save and wait for deployment
5. Your site will appear at your GitHub Pages URL

## Notes
- Keep paths relative so links work on GitHub Pages.
- Keep file names simple (lowercase + hyphen) for easy management.
