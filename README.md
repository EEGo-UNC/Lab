# EEGo Lab and EEGProc website

The site for the [EEGo Lab](https://eego-unc.github.io/Lab/) at UNC and its open-source library [EEGProc](https://github.com/EEGo-UNC/EEGProc), served at <https://eego-unc.github.io/Lab/>. It keeps the lab's pages, navy theme and photos, adds scroll and entrance animation to every page, and adds an EEGProc page that walks an EEG signal from raw recording to an explained prediction.

Plain HTML, CSS and ES modules. GSAP with ScrollTrigger, Lenis and Prism load from CDNs. There is no build step.

## Run locally

```bash
python3 -m http.server 8001 --bind 127.0.0.1
```

Open <http://localhost:8001>. Add `?motion=reduced` to the URL to preview the reduced-motion version, which shows every page and figure in its final state.

## Pages

The site is one HTML file with five pages, switched by the URL hash like the lab site:

| Hash | Page |
|---|---|
| `#home` | Welcome, Science Expo photo, quote, lab description, featured EEGProc and research cards, group photo |
| `#eegproc` | The library: pipeline, model, features, datasets, validation, counterfactuals, what changed in 2.0.0, layout, quickstart, contributing, citing, and EEGProc's own footer links. Wide screens get a clickable "On this page" sidebar |
| `#projects` | The six lab projects, each with its picture on the left |
| `#research` | Research and presentations, including the forthcoming counterfactual paper (`#publications` also works) |
| `#people` | Members, main advisors, past members |

A hash that names an element inside a page, such as `#datasets` or `#quickstart`, opens that page and scrolls to the element. Back and forward work. Each page's script returns a cleanup that runs when the reader leaves, so ScrollTrigger pins only exist for the page on screen. Images on pages other than Home load the first time their page opens.

## Layout

```
index.html            header, the five pages, the lab footer (partner logos), metadata, JSON-LD
css/styles.css        lab tokens (navy default, light theme on the toggle), lab components, EEGProc figures
js/main.js            router and page transitions, header, nav indicator, theme, copy buttons, tabs, smooth scroll
js/lib/motion.js      shared animation helpers: split text, intro, reveals, parallax, wipes, and entries for picture-and-text cards
js/pages/home.js      Home: waveform backdrop, title, photo, quote that lights up as it scrolls, featured cards, group photo
js/pages/eegproc.js   EEGProc: starts the figure modules below and the text reveals
js/pages/lab.js       Projects and Research (shared card entrance) and People animations
js/lib/signal.js      seeded synthetic EEG, SVG helpers, scalp geometry, color ramps
js/waveform.js        EEG waveform canvases (Home backdrop, featured card, EEGProc masthead)
js/pipeline.js        pinned five-step pipeline
js/windowing.js       trial-safe windowing
js/loso.js            leave-one-subject-out grid
js/counterfactual.js  counterfactual path and scalp topographies
js/converter.js       dataset converter
js/changes.js         2.0.0: modules growing from two to six, and the timeline of changes
js/toc.js             EEGProc's "On this page" sidebar (wide screens): highlights the section being read
js/interactive.js     valence-arousal plane, gauges, featurization explorer, package tree
assets/               EEGProc images from docs/source/_static, logo variants, favicons, social card
assets/lab/           lab photos, portraits, project images and partner logos, resized to WebP
projects/             the Neuroadaptive Tetris valence-arousal PDF
publications/         the IEEE SMC 2026 preprint PDF
```

Each diagram is drawn in its finished state first, and the scroll timelines animate toward it. If motion is reduced or the CDN scripts fail to load, every page still shows its complete content.

## Deploy

Every push to `main` runs the GitHub Pages workflow, which copies the site files as they are (there is no build step) and publishes them. All paths are relative, so the same files also work from any other Pages address.

## Notes

- `index.html` uses `https://eego-unc.github.io/Lab/` for the canonical link, `og:url`, `og:image` and JSON-LD `url`.
- The status badge on the EEGProc page shows EEGProc's Release workflow on `main`, which runs the tests on Python 3.10 to 3.13 before publishing.
- The two PDFs keep the paths they had on the earlier version of the site, so existing links to them still work.
- Mind Tune has no public repository under EEGo-UNC, so its card has no code link.

## Content

Lab text, people, projects, research and photos come from the [EEGo Lab site](https://eego-unc.github.io/Lab/) and its source repository, `EEGo-UNC/Lab`. EEGProc facts come from the EEGProc repository (README, CHANGELOG, CITATION.cff, pyproject.toml and the docs). The code samples match the README blocks that `src/tests/test_docs_examples.py` executes. Every signal, score and scalp map on the EEGProc page is synthetic and labeled as illustrative.
