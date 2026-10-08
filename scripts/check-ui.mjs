// Run against `npm run dev`; provide PLAYWRIGHT_MODULE if Playwright is installed elsewhere.
import assert from 'node:assert/strict';
import process from 'node:process';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  headless: true
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  colorScheme: 'light',
  reducedMotion: 'reduce'
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
try {
  await page.goto(baseURL);
  await page.getByRole('heading', { level: 1 }).waitFor();
  assert.equal(await page.locator('.project-card').count(), 5);
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').textContent(), 'Skip to content');
  await page.keyboard.press('Tab');
  page.setDefaultTimeout(5000);

  for (const width of [320, 390, 768, 1024, 1440]) {
    console.log(`Checking ${width}px`);
    await page.setViewportSize({ width, height: 1000 });
    assert.ok(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      `No overflow at ${width}px`
    );
    for (const [label, id] of [
      ['Work', 'projects'],
      ['About', 'about'],
      ['Contact', 'contact'],
      ['Home', 'home']
    ]) {
      const link = page.getByRole('navigation').getByRole('link', { name: label });
      await link.click();
      await page.waitForFunction(
        (sectionId) =>
          document.querySelector(`nav a[href="#${sectionId}"]`)?.getAttribute('aria-current') ===
          'location',
        id,
        { timeout: 5000 }
      );
      assert.equal(new URL(page.url()).hash, `#${id}`);
    }
  }

  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await page.emulateMedia({ colorScheme: 'dark' });
  assert.equal(
    await page.locator('html').getAttribute('data-theme'),
    'light',
    'Explicit theme overrides system'
  );

  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.getByRole('button', { name: 'Copy email' }).click();
  await page.getByRole('button', { name: 'Copied!' }).waitFor();
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    'igorpichugindev@proton.me'
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', {
      value: () => Promise.reject(new Error('Denied'))
    });
  });
  await page.getByRole('button', { name: 'Copied!' }).click();
  assert.match(await page.getByRole('status').textContent(), /Could not copy/);

  assert.equal(
    await page.locator('.glass-orb').evaluate((element) => getComputedStyle(element).animationName),
    'none'
  );
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => element.decode());
  }
  for (const link of await page.locator('a[target="_blank"]').all()) {
    assert.match(await link.getAttribute('rel'), /noopener/);
    assert.match(await link.getAttribute('href'), /^https:\/\//);
  }
  assert.deepEqual(errors, []);
  console.log(
    'Passed: five viewport sizes, section navigation, theme persistence, clipboard success/failure, keyboard entry, images, reduced motion, and browser errors.'
  );
} finally {
  await browser.close();
}
