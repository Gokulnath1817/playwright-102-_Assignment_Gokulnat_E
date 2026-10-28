
const { test, expect } = require('@playwright/test');

test('Scenario 2 - Drag slider to 95', async ({ page }) => {
  await page.goto(
    'https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/'
  );

  const slider = page.locator('input[type="range"]').nth(2);
  await expect(slider).toHaveValue('15');

  const box = await slider.boundingBox();

  if (!box) {
    throw new Error('Slider not found.');
  }

  const y = box.y + box.height / 2;

  // Drag using real mouse input.
  const startX = box.x + box.width * 0.15;
  let targetX = box.x + box.width * 0.945;

  for (let attempt = 0; attempt < 4; attempt++) {
    await page.mouse.move(startX, y);
    await page.mouse.down();
    await page.mouse.move(targetX, y, { steps: 20 });
    await page.mouse.up();

    const value = Number(await slider.inputValue());
    console.log(`Attempt ${attempt + 1}: ${value}`);

    if (value === 95) {
      break;
    }

    // Adjust the target based on the observed difference.
    targetX -= (value - 95) * (box.width / 100);
  }

  await expect(slider).toHaveValue('95');
});
