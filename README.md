# Playwright VRT Handson

## 準備

### リポジトリの準備

GitHub上でテンプレートリポジトリから複製した後、クローンして任意のエディタでリポジトリを開いてください。

> [!WARNING]
>
> - 複製する際、全ブランチをコピーしておくと、後ほど答えを確認しやすくなります
> - テンプレートリポジトリを直接クローンしないでください
>   - 後ほどリポジトリにプッシュする必要があるためです
> - リポジトリを複製する際、原則Publicで複製してください
>   - GitHubの無料枠の都合上、Publicの方が都合がいいためです

```bash
git clone git@github.com:{ユーザ名}/playwright-vrt-handson.git
```

### サーバの準備

以下を実行してブラウザでHTMLを開けることを確認してください。

```bash
npx corepack enable
npm i
npm run start
```

確認後は、Ctrl+C で終了してください。

### Playwrightの準備

テスト用のブラウザをインストールします。
Chromium（Chrome）、Firefox、Webkit（Safari）が追加されます。
[任意のブラウザを使用することも可能](https://playwright.dev/docs/api/class-browsertype#browser-type-launch)ですが、ややこしくなるため今回はPlaywright推奨バーションを利用します。

```bash
npx playwright install

# 上記コマンドでエラーが出る場合
npx playwright install --with-deps
```

## 基本編

[ドキュメント](./docs/基本編.md)

## 応用編

[ドキュメント](./docs/応用編.md)

## 自動テスト編

[ドキュメント](./docs/自動テスト編.md)

### 参考資料

- HTMLのテンプレートは以下を利用させていただきました
  - <https://template-party.com/template/tp_housebuilder1/tp_housebuilder1_blue_gray/>
- [Playwrightの公式ドキュメント](https://playwright.dev/)
- 最近の代表的なVRTツール/サービスに関して非常にわかりやすい説明がされています
  - [ビジュアルリグレッションテストツール４選！ユーザーが語る各ツールのメリット](https://www.youtube.com/watch?v=_yBl_mhOO2)
