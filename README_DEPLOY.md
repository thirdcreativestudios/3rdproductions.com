# Third Productions Static Site

This folder is the current deploy-ready vanilla prototype. Upload the contents of this folder to GitHub when you are ready to publish or share it.

## Recommended Publishing Setup

Use this path first:

1. GitHub stores the site files.
2. Cloudflare Pages reads the GitHub repository.
3. Every time you change text, images, or projects in GitHub, Cloudflare rebuilds and publishes the site automatically.

This is still the static version. The later Astro version can add real language URLs, project pages, and a simple admin editor.

## Upload To GitHub

1. Create a new GitHub repository, for example `third-productions-site`.
2. Upload everything inside this folder, not just the folder itself.
3. Commit the upload to the main branch.

The important files are:

- `index.html` for the page structure and visible content.
- `CSS/main.css` for the design.
- `JS/main.js` for typing, language switching, menu behavior, cookies, showreel, and scroll behavior.
- `POSTER_IMAGES/` and `PRODUCTION/` for image assets.

## Connect GitHub To Cloudflare Pages

1. Open Cloudflare.
2. Go to `Workers & Pages`.
3. Choose `Create application`.
4. Choose `Pages`.
5. Choose `Connect to Git`.
6. Select the GitHub repository.
7. Use these build settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: /
```

8. Click deploy.

## Connect The Domain

After Cloudflare creates the Pages project:

1. Open the Pages project.
2. Go to `Custom domains`.
3. Add `3rdproductions.com`.
4. Add `www.3rdproductions.com`.
5. Follow the DNS instructions Cloudflare gives you.

If the domain DNS is already inside Cloudflare, this is usually almost automatic. If the domain is managed at another host, that host will need the DNS records Cloudflare shows you.

## Editing Later

For this static version:

- Change text in `index.html` and language strings in `JS/main.js`.
- Change colors, spacing, mobile behavior, and layout in `CSS/main.css`.
- Replace images by uploading a new file with the same name, or by updating the image path in `index.html`.
- Add a project by adding its image to the right folder and adding a new project row/card in `index.html`.

For the later Astro/CMS version:

- Each language can have its own real URL.
- Each project can have its own shareable page.
- Text and images can be edited from a simple admin page instead of editing code.
- SEO can use real translated pages, sitemap, and hreflang tags.
