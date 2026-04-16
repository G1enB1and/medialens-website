# MediaLens Website

This repository contains the companion landing page for [MediaLens](https://github.com/G1enB1and/MediaLens), a Windows desktop app for duplicate and similar image cleanup, visual comparison, tagging, metadata management, and high-performance media browsing.

The website is designed to convert visitors into MediaLens downloads while also giving users a quick product overview, screenshots, workflow context, and links back to the main application repository.

## Live Site

The site is currently deployed on DreamHost.

## Project Structure

```text
.
+-- index.html          # Static landing page markup
+-- styles.css          # Dark neutral visual system with purple accent
+-- script.js           # Scroll reveals and screenshot selector behavior
+-- screenshots/        # Product screenshots and logo used by the page
+-- app-README.md       # Reference copy from the main MediaLens app repo
+-- CHANGELOG.md        # Reference changelog from the main MediaLens app repo
```

## Development

This is a static website with no build step or package manager dependency.

To preview locally, open `index.html` in a browser. If a local server is preferred, any simple static server will work from the repository root.

## Deployment

Upload the static site files to the web host:

- `index.html`
- `styles.css`
- `script.js`
- `screenshots/`

The `app-README.md` and `CHANGELOG.md` files are kept in the repo as app reference material and do not need to be deployed unless the host is expected to expose project source files.

## Primary Links

- MediaLens app repository: <https://github.com/G1enB1and/MediaLens>
- Latest MediaLens release: <https://github.com/G1enB1and/MediaLens/releases/latest>
- Website repository: <https://github.com/G1enB1and/medialens-website>

## Notes

The landing page intentionally stays lightweight: plain HTML, CSS, and JavaScript. This keeps deployment simple on shared hosting and makes the page easy to maintain as MediaLens evolves.
