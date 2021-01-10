# CSS Grids and Flexbox

[こちら](https://github.com/jen4web/fem-layout) の写経

## Flexbox

```css
display: flex;
```

```css
flex-direction: column;
```

`row` (左から右) がデフォルト
`column` (上から下)


```css
flex-wrap: wrap
```

`wrap` 折り返しの設定
デフォルトは `nowrap`

```css
flex-flow: row nowrap;
```

`flex-direction` と `flex-wrap` の組み合わせ

```css
justify-content: center;
```

`flex-direction` に対する配置

```css
align-items: center
```

`flex-direction` に直行する方向に対する配置
`flex-direction` が `row` の場合は、上下
`flex-direction` が `column` の場合は、左右

### flex-basis, flex-grow, flex-shrink

`flex-basis` は flex-item の幅
flex-item には、`width` のプロパティではなく、`flex-basis` を設定するべき
-> `width` の値は、( たとえ % ) を設定していても、決まった値になる -> より flexible なレイアウトを設定するためには、`flex-basis` を使用したほうが良い。

`flex-grow`, `flex-shrink` コンテンツが、広がるとき or 狭まるときに他の flex item に対してどのくらいの割合で
余白を要求するか？(負の余白を要求するか？)

`flex: <flex-grow> <flex=shrink> <flex-basis>` で、ショートハンド

desktop

```css
flex: 0 0 24%;
```

tablet

```css
flex: 0 0 48%;
```

mobile

```css
flex: 0 0 96%;
```

### 学習用ゲーム

https://flexboxfroggy.com/#ja
http://www.flexboxdefense.com/

---

## Responsive Image

- 大きなサイズの画像を取得してきて、 scale をするのはあまりよろしくない
- Server-side で必要なサイズの画像を提供するほうが良い
- Client Side で必要なサイズの画像を JavaScript から取得するのも良い
- `<picture>` tag を使うのも良い

### `<picture>` タグ

```html
<picture>
    <source srcset="img/large.png" media="(min-width: 1200px)">
    <source srcset="img/medium.png" media="(min-width: 800px)">

    <!-- Fallback -->
    <img src="img/small.png" alt="">
</picture>
```

Cross browser 対応が必要な場合 (IE) picturefill を使う

### Media query と 画像のダウンロード

[参考](https://timkadlec.com/2012/04/media-query-asset-downloading-results/)

> Test Five: Background Image Where Desktop Image Set with Min-Width

背景画像 + min-width の media query にすると余分な画像のダウンロードが発生しない

## CSS Grid

```css
display: grid
```

row, column はサイズを気にせず単なる数

`grid-row`, `grid-column` で指定する数字は、**要素の位置ではなく、要素同士を仕切る線の位置**
0 では無く 1　スタート

`gap` で grid 自体の幅を設定
`gap: <top-bottom> <left-right>`

`grid-template-rows` `grid-template-columns` で、要素のサイズを設定

```css
  grid-template-rows: 70px 17px 60px 54px 86px 147px;
  grid-template-columns: 304px 92px 153px 68px
```

`1fr` -> `1 fraction`

```css
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
```

`grid-area`

```css
.class1 {
    grid-area: header;
}
.class2 {
    grid-area: article;
}
.class3 {
    grid-area: aside;
}
.wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas:
        "header header header header"
        "aside . article article";
}
```
