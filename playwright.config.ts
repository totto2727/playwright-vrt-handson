import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // テストの対象ディレクトリ
  testDir: "./tests",
  // すべてのテストを並列で実行
  fullyParallel: true,
  // テストを強制終了させるか
  forbidOnly: !!process.env.CI,
  // リトライ回数
  retries: process.env.CI ? 2 : 0,
  // 並列実行数
  workers: process.env.CI ? 1 : undefined,
  // レポートの形式
  reporter: "html",
  // テストのグローバル設定
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  // Matcherのグローバル設定
  // テストサーバの自動起動
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
  // 対象とするブラウザ環境
  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
        browserName: "chromium",
        viewport: { width: 1920, height: 1080 },
      },
    },
    // {
    //   name: "Galaxy Tab Chrome",
    //   use: {
    //     ...devices["Galaxy Tab S4"],
    //     browserName: "chromium",
    //   },
    // },
    // {
    //   name: "Android Chrome",
    //   use: {
    //     ...devices["Galaxy S8"],
    //     browserName: "chromium",
    //   },
    // },
    // {
    //   name: "Safari",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     browserName: "webkit",
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },
    // {
    //   name: "iPad Safari",
    //   use: {
    //     ...devices["iPad (gen 6)"],
    //     browserName: "webkit",
    //   },
    // },
    // {
    //   name: "iOS Safari",
    //   use: {
    //     ...devices["iPhone 8"],
    //     browserName: "webkit",
    //   },
    // },
  ],
});
