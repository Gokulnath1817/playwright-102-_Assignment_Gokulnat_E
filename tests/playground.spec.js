
const { test, expect } = require('@playwright/test');

test('Scenario 1 - Simple Form Demo', async ({ page }) => {
  // Open the demo page directly for this diagnostic.
  await page.goto(
    'https://www.testmuai.com/selenium-playground/simple-form-demo/'
  );

  await expect(page).toHaveURL(/simple-form-demo/);

  const message = 'Welcome to TestMu AI';

  await page
    .getByPlaceholder('Please enter your Message')
    .fill(message);

  await page.locator('#showInput').click();

  await expect(page.locator('#message')).toHaveText(message);
});
