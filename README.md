# Analog Character Encodings

A visual reference for analog and symbolic character encoding systems. The app includes text-based encodings such as Morse, NATO, ASCII, Baudot, and Roman numerals, as well as SVG-backed systems such as resistor colors, Braille, tally marks, and seven-segment displays.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run serve
```

Run lint checks:

```bash
npm run lint
```

Create the production site:

```bash
npm run build
```

The production build is written to `build/`, which can be used as the publishing directory for GitHub Pages.

## Adding An Encoding

Add an encoding module under `src/data/encodings/<id>/index.js`, then register it in `src/data/encodings.js`.

For SVG-backed characters, place square SVG files in `public/svg/<id>/`. Standard letters and digits use filenames such as `A.svg` and `0.svg`. Text-based encodings can provide a `value` instead of an `svgFile`.

Alphabetic systems list their letter set by default. Digits are included only when they are a distinct part of the encoding, such as Morse, ASCII, Braille, or Sign Language.# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
