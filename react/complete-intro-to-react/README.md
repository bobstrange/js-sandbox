# Complete intro to React

[こちら](https://btholt.github.io/complete-intro-to-react-v5/) の写経

## Project の作成

`create-react-app` を使う

```bash
npx create-react-app complete-intro-to-react --template typescript
```

ESLint 周りの設定

```bash
npx eslint --init
```

package.json から `eslintConfig` 消す

Prettier 周りの設定

```bash
npm install -D \
  prettier \
  eslint-config-prettier
```

`.eslintrc.js` 編集

```js
extends: [
  "prettier",
  "prettier/react"
]
```
