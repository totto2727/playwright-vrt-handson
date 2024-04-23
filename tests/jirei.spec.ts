import { test, expect } from "@playwright/test";

test("制作事例のVRT", async ({ page }) => {
  await page.goto("/jirei.html");
  await expect(page).toHaveScreenshot();
});

// test("制作事例のページ全体のVRT", async ({ page }) => {
//   await page.goto("/jirei.html");
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });
