![Build Status](https://github.com/internetarchive/iaux-music-player/actions/workflows/ci.yml/badge.svg)

# Internet Archive's music player

A music player made for archive.org detail pages to help unlock and surface what's contained in the music item.
One can play songs, read liner notes, and see the audio fingerprinting found across various music providers.

### 🚧 in development

Currently, we are developing the individual components to compose the main player.
We will release these components out for consumption to our current players while we wrangle the main view.

## Local Demo with `web-dev-server`
```bash
yarn && yarn start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
yarn run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
yarn run lint
```

You can lint with ESLint and Prettier individually as well
```bash
yarn run lint:eslint
```
```bash
yarn run lint:prettier
```

To automatically fix many linting errors, run
```bash
yarn run format
```

You can format using ESLint and Prettier individually as well
```bash
yarn run format:eslint
```
```bash
yarn run format:prettier
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
