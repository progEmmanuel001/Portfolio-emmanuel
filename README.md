# Emmanuel — Portfolio (React)

The static site converted to a React + Vite single-page app, with the About
page overflow and the mobile sidebar rebuilt.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the build locally
```

Node 18 or newer.

## Structure

```
public/
  images/                     your original images, unchanged
  Face-Confidence-Detection.html   the Pictoblox export, served as a static file
src/
  main.jsx                    entry, imports every stylesheet
  App.jsx                     routes
  components/
    Navbar.jsx                nav bar + off-canvas drawer
    Background.jsx            fixed grid/glow layer
    Cursor.jsx                custom cursor (pointer devices only)
    ScrollToTop.jsx           resets scroll on route change
    useReveal.js              IntersectionObserver hook for .reveal sections
  data/
    site.js                   email, phone, WhatsApp, form key, typing roles
    projects.js               every project card as data
  pages/
    Home.jsx  About.jsx  Projects.jsx  Contact.jsx
  styles/
    base.css                  reset, tokens, shared buttons, .reveal
    navbar.css  background.css  cursor.css
    home.css  about.css  projects.css  contact.css
```

To edit a project card, edit `src/data/projects.js` — the grid and the
filters both read from it.

## What changed, and why

### The About page overflow

Three things were pushing the page sideways:

1. `about.css` had responsive rules for `.about-left`, `.about-right` and
   `.about-buttons`, but the markup used `.left`, `.right` and `.buttons`.
   The rules never matched anything, so the 80px `h1` stayed 80px on a
   360px phone and ran off the screen.
2. `about.html` loaded `style.css` *after* `about.css`, and both defined
   `.left` / `.right`. The home page's `.left { width: 52% }` was fighting
   the about page's `.left { flex: 1 }` on the same element.
3. Flex children default to `min-width: auto`, so the text column refused
   to shrink below its longest word.

Now every About class is prefixed `about-`, headings use `clamp()` instead
of fixed pixel sizes, flex children carry `min-width: 0`, and one
`--gutter` token sets the horizontal padding for every section so none can
out-dent another.

### The sidebar nav

The drawer was parked with `right: -100%`, which puts a full-width element
outside the viewport — the page only looked fine because `overflow-x:
hidden` was hiding the damage, and that rule lived in `style.css`, which
the About page loaded last and other pages loaded inconsistently.

The drawer now:

- slides with `transform: translateX(100%)`, so it never contributes to
  page width, and takes `visibility: hidden` while closed so its links stay
  out of the tab order;
- is a fixed `min(340px, 86vw)` panel rather than 80% of the screen, which
  on a tablet was almost the whole viewport;
- has a dimmed overlay that closes it on click;
- closes on Escape, on navigation, and when the viewport crosses back to
  desktop;
- locks body scroll while open, and scrolls internally on short screens;
- carries its own "Hire Me" button — the old one was `display: none` on
  mobile, so the CTA simply vanished on phones;
- reports `aria-expanded` / `aria-controls`, and moves focus into the panel
  on open and back to the button on close.

### Smaller fixes carried along

- `js/background.js` and `js/particles.js` were referenced by the HTML but
  were empty or missing — dropped.
- `script.js` attached a WhatsApp click handler to an element that only
  exists on two pages, so the whole script threw on the others. The number
  now lives in `src/data/site.js`.
- The contact form posts with `fetch` and reports success or failure in
  place, instead of navigating away to the Web3Forms response page.
- Tech-stack chips were 20px; dropped to 0.9rem so three of them fit a card.
- `.primary` had `#111` text on `#a73316` — too low contrast to read.
  Now white.
- Dead `href="#"` LinkedIn links removed. Add the real URL to
  `site.js` (`linkedin`) and drop it back into the social rows when you
  have it.
- The "Download CV" button points at `/cv.pdf`. Put the file in `public/`
  or change the link.
- Custom cursor only mounts on devices with a fine pointer, and
  `prefers-reduced-motion` is respected throughout.

## Deploying

`npm run build` outputs `dist/`. On Vercel or Netlify, set the build
command to `npm run build` and the output directory to `dist`. Because
this is a single-page app, add a rewrite so deep links work:

- Vercel: `vercel.json` with
  `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- Netlify: a `_redirects` file containing `/*  /index.html  200`
