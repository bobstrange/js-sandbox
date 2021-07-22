# Chrome Extension

- [Overview](https://developer.chrome.com/docs/extensions/mv3/overview/)
  - manifest.json を作る
  - `"action":` を定義する
    - `"default_popup"`, `"default_icon"`
  - `"commands"` を定義する
    - `"_execute_action"`
  - `chrome://extensions` で、対象のフォルダを読み込む
- [Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
  - manifest.json を作る
    - バックグラウンドスクリプトを定義するので、 `"background": { "service_worker": "..." }` を設定する
    - `"permissions"` を定義する
      - storage などの API を使用するには権限が必要
      - "storage", "activeTab", "scripting"
    - "icons" は "16", "32", "48", "128" を定義する
    - オプションを設定させたい場合は "options_page" を用意する

## メモ
### 型

`jsconfig.json` に記載

```json
{
  "typeAcquisition": {
    "include": [
      "chrome"
    ]
  }
}

### ESLint で chrome がエラーになる

.eslintrc.js の env に `"webextensions": true` を追加する
※ `"chrome": true` ではない

