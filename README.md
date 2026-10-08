# Igor's portfolio

Personal portfolio built with Vue 3, TypeScript, and Vite. Includes responsive project previews, glass surfaces, light/dark themes, and motion that respects accessibility preferences.

## Development

```sh
npm install
npm run dev
```

Edit `src/assets/config.json` to update projects, images, social links, and contact details. Assets live in `public/`.

## Checks

```sh
npm run build
npx eslint src scripts --ext .vue,.ts,.mjs
```

The browser smoke check requires a running development server and Playwright. Install it locally without changing project dependencies:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node scripts/check-ui.mjs
```

Optional environment variables: `BASE_URL` for another server, `CHROME_PATH` for an existing Chrome executable, and `PLAYWRIGHT_MODULE` for an existing Playwright module's absolute path.

The check covers five viewport sizes, navigation, keyboard entry, theme persistence, clipboard success and failure, image loading, reduced motion, and browser errors.
