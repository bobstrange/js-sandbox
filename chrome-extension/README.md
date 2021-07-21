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
    - `"background"` を定義する
    - `"permissions"` を定義する
      - storage などの API を使用するには権限が必要

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

