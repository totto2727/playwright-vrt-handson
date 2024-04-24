import { test, expect } from "@playwright/test";

function sleep() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(null);
    }, (Math.random() + 0.5) * 10000);
  });
}

/* 課題を行う場合はコメントアウトを外してください
test("制作事例のキービジュアルのVRT", async ({ page }) => {
  await page.goto("/");
  
  // 少し時間のかかる処理
  await sleep();
  
  // アニメーションを無視できるように処理を修正しましょう！
  await expect(page).toHaveScreenshot();
});
*/

/* 課題を行う場合はコメントアウトを外してください
test("事例ページに移動した際のVRT", async ({ page }) => {
  await page.goto("/");

  let link;

  // PCの時はヘッダーのリンクを取得する
  link = await page.locator("body").getByText("制作事例");
  
  // SPの時はメニューを開いてからクリックする
  if (!(await link.isVisible())) {
    const menu = await page.locator("#menubar_hdr");
    await menu.click();
    link = await page.locator("body").getByText("制作事例");
    await link.waitFor({ state: "visible" });
  }

  await link.click();
  await page.waitForLoadState("domcontentloaded");

  // 少し時間のかかる処理
  await sleep();
  await expect(page).toHaveScreenshot();
});
*/
