# KUIA — portfolio

Personal portfolio site for Kairiin (KUIA). Built with [Astro](https://astro.build).

## Run it

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs to dist/
    npm run preview  # preview the production build

## Structure

    src/
      layouts/Base.astro     shared <head>, nav, footer
      components/            Nav, SiteFooter
      pages/                 index, botik, sheldcube, olly
      styles/                global.css, home.css, case.css
      scripts/               nav.js, decks.js
    public/                  static files served as-is (favicon, robots.txt, images)

## Adding real images

Drop files in `src/images/` and use Astro's `<Image />` component so they get
resized and converted to WebP automatically:

    ---
    import { Image } from 'astro:assets';
    import botikPhoto from '../images/botik-venue.jpg';
    ---
    <Image src={botikPhoto} alt="Botik venue" widths={[480, 800, 1200]} />

Files in `public/` are served untouched — use that only for things that must
keep their exact filename (favicon, robots.txt, a CV PDF).

## Before launch

- [ ] Replace the placeholder gradient blocks with real project images
- [ ] Replace hello@kairiin.design with the real email address
- [ ] Set the real URL in `astro.config.mjs` (`site`)
- [ ] Add a proper favicon
- [ ] Add OG preview images (`public/og/*.png`, 1200x630)
