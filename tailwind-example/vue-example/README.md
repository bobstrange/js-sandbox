# vue-example

vue-cli + tailwind

[ref](https://medium.com/@FlorianWoelki/vue-3-and-tailwindcss-2041fea3bcd2)
[ref2](https://tailwindcss.com/docs/guides/vue-3-vite)

## Install

Vue 3 が PostCSS 8 をまだサポートしていないので、tailwindcss v2.0 PostCSS 7 互換バージョンを入れる

```shell
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

`tailwind.config.js` と `postcss.config.js` を生成する

```shell
npx tailwindcss init -p
```

`purge` の設定を行って、使用していない style を除くようにする。

```js
module.exports = {
    ...,
    purge: [
      './public/**/*.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ]
}
```

Tailwind を include する。
`assets/styles/tailwind.css` とかを作って、↓を入れる。

Chrome Dev Tool のパフォーマンス問題対応の為、 `/*! @import */` のコメントを追加しておく。

```css
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`src/main.ts` で ↑ の css を読み込む

```ts
import { createApp } from 'vue'
...

import '../assets/styles/tailwind.css'
...
```

## VSCode の設定

[ref](https://www.meidev.co/blog/visual-studio-code-css-linting-with-tailwind/)
[ref2](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

workspace の場合 `.vscode/settings.json` を編集

```json
{
    "css.validate": false,
    "scss.validate": false,
    "tailwindCSS.includeLanguages": {
      "plaintext": "vue"
    },
    "tailwindCSS.emmetCompletions": true,
    "tailwindCSS.validate": true
}
```

