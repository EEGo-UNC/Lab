# EEGo Lab website

A React website built with Vite and plain CSS. The site has a dark blue background and a near-black header with a small EEGo Lab logo at the top left. Its navigation includes `Home`, `Projects`, `Research and Presentations`, and `People`; on narrow screens, it opens from a Menu button.

No existing website source was available in this workspace when this project was created, so this is a new starting point rather than a migration of an existing site.

## Requirements

- Node.js 24 (the version family in `.nvmrc`)
- npm, included with Node.js

If you use nvm, run `nvm install` and `nvm use` in this directory.

## Run locally

From this directory:

```sh
npm ci
npm run dev
```

Open the local URL shown in the terminal (normally <http://localhost:5173>). Changes to the source update the page automatically.

## Build and preview

```sh
npm run build
npm run preview
```

The production build is written to `dist/`. The preview command serves that build locally (normally <http://localhost:4173>); it is not a production server. Re-run the build after source changes before previewing.

## Project structure

```text
public/
  columbia-cumc.webp  Supplied transparent Columbia medical center logo
  eego.png          Supplied EEGo Lab logo
  emotiv.png        Supplied transparent Emotiv logo
  unc-computer-science.png  Supplied UNC Computer Science logo
  unc-psychology-neuroscience.png  Transparent UNC Psychology & Neuroscience logo
  favicon.svg       Site icon; add other static assets here
  home/             Introduction and group photos
  people/           Supplied portraits for Vitor, Amit, Yashasree, Eduarda, Richard, Rosie, and Raghav
  projects/        Project logos and images, including We Can Read Faster
  publications/    Supplied iLRN and UNC Science Expo photos, IEEE SMC diagram and preprint PDF
src/
  App.jsx           Main page and page content
  PeoplePage.jsx    People groups and profile cards
  ProjectsPage.jsx  Projects page
  PublicationsPage.jsx  Research and Presentations page
  main.jsx          React entry point
  styles.css        Global styles and responsive layout
index.html          HTML shell, title, and metadata
vite.config.js      Vite and React configuration
package.json        Dependencies and development commands
package-lock.json   Locked dependency versions; commit this file
.nvmrc              Node.js version family
.gitignore          Files excluded from version control
```

## Edit the site

- Update the homepage in `src/App.jsx`, projects in `src/ProjectsPage.jsx`, publications and awards in `src/PublicationsPage.jsx`, and people in `src/PeoplePage.jsx`; styles live in `src/styles.css`.
- Add reusable UI components under `src/components/` as the site grows.
- Set the browser title and description in `index.html`.
- Put static assets in `public/` and reference them from the site root, such as `/favicon.svg`. Assets imported by React components can live under `src/assets/`.

This starter uses JavaScript and JSX. Navigation uses URL hashes (`#home`, `#projects`, `#research`, and `#people`) and supports direct links and browser Back/Forward without a routing dependency or special server configuration. Older `#publications` links still open Research and Presentations. It has no backend or external service configuration.

The footer uses the UNC Computer Science, UNC Psychology & Neuroscience, Columbia University Medical Center, and Emotiv logos.

## Deployment

Run `npm ci` and `npm run build`, then publish the contents of `dist/` to a static web host. The default configuration assumes the site is served at the domain root. For a subdirectory such as `/eego/`, configure Vite's `base` option and update root-relative asset references as needed.

## Version control and local files

`.gitignore` excludes dependencies, build output, local environment files, logs, editor files, and the `sources/` reference directory. Keep `package-lock.json` in version control so `npm ci` installs the same dependency versions.

The workspace's `sources/` directory is reserved for read-only synced ChatGPT project references. Do not edit, move, rename, or delete those files; put application code in `src/` instead. This starter does not import or publish reference files.

If environment variables are added later, document their names in a committed `.env.example`. Never put secrets in client-side code or `VITE_` variables: those values are exposed to visitors in the browser bundle.

## References

- [React documentation](https://react.dev/learn)
- [Vite documentation](https://vite.dev/guide/)
