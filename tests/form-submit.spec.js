
const { test, expect } = require('@playwright/test');

test('Scenario 3 - Input Form Submit', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

  const nameField = page.locator('#name');

  // Verify required-field validation.
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(nameField).toBeFocused();

  expect(
    await nameField.evaluate(element => element.validity.valueMissing)
  ).toBe(true);

  // Fill in the form fields.
  await nameField.fill('Test User');
  await page.locator('#inputEmail4').fill('testuser@example.com');
  await page.locator('#inputPassword4').fill('TestPassword123!');
  await page.locator('#company').fill('Test Company');
  await page.locator('#websitename').fill('https://example.com');

  await page.locator('select[name="country"]').selectOption({
    label: 'United States'
  });

  await page.locator('#inputCity').fill('Chennai');
  await page.locator('#inputAddress1').fill('123 Test Street');
  await page.locator('#inputAddress2').fill('Apartment 2');
  await page.locator('#inputState').fill('Tamil Nadu');
  await page.locator('#inputZip').fill('600001');

  // Submit and verify the success message.
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByText(
      'Thanks for contacting us, we will get back to you shortly.',
      { exact: true }
    )
  ).toBeVisible();
});
