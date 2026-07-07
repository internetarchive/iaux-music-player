![Build Status](https://github.com/internetarchive/iaux-music-player/actions/workflows/ci.yml/badge.svg)

# Internet Archive's music player

A music player made for archive.org detail pages to help unlock and surface what's contained in the music item.
One can play songs, read liner notes, and see the audio fingerprinting found across various music providers.

Live demo: https://internetarchive.github.io/iaux-music-player/

### CSS Variables
`--channel-selector-text-color`
`--channel-selector-title-color`

### 🚧 in development

Currently, we are developing the individual components to compose the main player.
We will release these components out for consumption to our current players while we wrangle the main view.

## Local Demo with Vite
```bash
npm install && npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Vitest

Tests run in headless Chromium via Vitest browser mode. To run the full suite (build, lint, circular dependency check, tests with coverage), run
```bash
npm test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

To automatically fix many linting errors, run
```bash
npm run format
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
