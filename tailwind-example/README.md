# tailwind example

↓の写経
https://www.youtube.com/watch?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&v=21HuwjmuS7A&index=1

## Install deps.

```shell
npm install tailwindcss postcss-cli autoprefixer
```

## Init tailwind

```shell
npx tailwind init
```

Create [postcss.config.js](./postcss.config.js)

Create `css/tailwind.css`. [file](./css/tailwind.css)
(whatever name path is ok)

Add build script to package.json

```json
     "build": "postcss css/tailwind.css -o public/build/tailwind.css"
```

- `npm run build` で、public/build/tailwind.css に、tailwind の css が出力されるように。
- `public/index.html` を適当に編集
- `live-server` で自動リロード設定

```shell
npm install live-server
```

```json
  "script": {
    ...,
    "server": "live-server public"
  }
```

## utilities
### 色
bg-gray-50,100 ~ 900
text-gray-50,100 ~ 900

### size
text-xs,sm,base,lg,xl,2xl ~ 9xl

## Break point

- sm 640px
- md 768px
- lg 1024px
- xl 1280px
- 2xl 1536px

breakpoint を超えて、ページの構造を変えたい場合
例: sm, md の場合は余白が少ないので、1 コラム
lg 以上の場合は 1 コラムだと余白が大きくなるので、2 コラム

lg 以上の場合にのみ表示する block
```html
<div class="hidden lg:block>
```

lg 以上の場合にのみ隠す block
```html
<div class="lg:hidden>
```

## variants
tailwind.config.js をいじる
https://tailwindcss.com/docs/configuring-variants

tailwind は、bundle サイズ縮小の為デフォルトでは、disable になっている variant がある、そのため、tailwind.config.js で ↓のように追加する
(例: [デフォルト設定](https://tailwindcss.com/docs/configuring-variants#default-variants-reference) では、 backgroundColor に `active` は設定されていない )

例えば `backgroundColor` に `active` を追加したい場合、
`extend` に追加する

```js
module.exports = {
    variants: {
        extend: {
            backgroundColor: ['active']
        }
    }
}
```

もしくは、variant 直下に 設定したい variant を全て書き並べる
(順番が重要 ※ 後に設定するものが優先される)

```js
module.exports = {
    variants: {
        backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],

    }
}
```
