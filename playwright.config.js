
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Run tests in parallel.
  fullyParallel: true,
  workers: 3,

  // Allow extra time for browser actions.
  timeout: 60000,

  // Helpful evidence when a test fails.
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});
