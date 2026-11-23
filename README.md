# Yemin Wang Lab website

A complete static website with separate Home, Research, Publications, Team, and Contact pages. No framework, package installation, or build step is required.

## Files

- `index.html` — Home page.
- `research.html` — Research theme, branches, supporting citations, diagrams, and funder logos.
- `publications.html` — Full numbered publication list.
- `team.html` — Team members grouped by role with square photo slots.
- `contact.html` — Contact information.
- `style.css` — Shared layout, responsive styling, and visual design.
- `script.js` — Accessible current-page navigation and external-link enhancements.
- `assets/` — All images and logos used by the website. Filenames contain content hashes to avoid duplicates.
- `.nojekyll` — Allows direct static hosting on GitHub Pages.

## View locally

Open `index.html` in your browser. Keep all files and the `assets` folder together. Navigation opens separate HTML pages and works without JavaScript.

## Publish with GitHub Pages

1. Extract the ZIP.
2. Upload the contents of this folder into the root of a GitHub repository, including `assets/`.
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose your branch and **/(root)**, and save.

## Edit the website

Edit text and citations in the relevant HTML page. Edit `style.css` for colours, spacing, typography, and mobile layout. Edit `script.js` for shared interactions.

To add a team portrait, find the person's row in `team.html` and replace that person's square photo placeholder with an `<img>` pointing to an image you add to `assets/`. Preserve the surrounding row structure and provide descriptive `alt` text.

The pages include research-image credits and article links. Preserve those credits when reusing the images. Organisation logos and third-party research figures remain the property of their respective owners.
