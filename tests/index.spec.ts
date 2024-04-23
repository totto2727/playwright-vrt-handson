import { test, expect } from "@playwright/test";

function sleep() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(null);
    }, (Math.random() + 0.5) * 10000);
  });
}

// test("制作事例のキービジュアルのVRT", async ({ page }) => {
//   await page.goto("/");
//   const kv = page.locator("#mainimg-box");
//   // 少し時間のかかる処理
//   await sleep();
//   await expect(page).toHaveScreenshot({ mask: [kv] });
// });
