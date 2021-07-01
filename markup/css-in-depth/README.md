# CSS in Depth

CSS in Depth の写経

[ref repo](https://github.com/CSSInDepth/css-in-depth)


## Chapter 1

Rule of Thumb

- css セレクタに id を使用しない
- !important を使用しない

### Inheritance

- 特定の property のみ inherit される
  - text に関するもの color, font, ...
  - list property に関するもの list-style, ...
- ↑以外の property で inherit をしたい場合は明示する
- 逆に、デフォルトに設定死体場合は `initial` を設定する
  - 例: width の場合は `auto` がデフォルトなので、 `initial` と書くことは `auto` と書くことと同意

### Shorthand properties

- 時計回り top, right, bottom, left
  - TRouBLe
- 省略された場合は、反対側に定義されている値が採用
  - top <=> bottom
  - left <=> right

全部同じ

```css
padding: 1em 2em;
padding: 1em 2em 1em;
padding: 1em 2em 1em 2em;
```

### Horizontal, Vertical

- "Cartesian grid" -> カーテシアン座標
  - 水平、垂直の順

## Chapter 2 working with relative units

- smart phone から、大画面まで表示されるコンテキストは様々
  - "pixel-perfect" アプローチで対応しようとしていた
  - smart phone の登場で、全てのユーザーが同じ UX になるように見せかけることを諦めた

### Ems and Rems

1em -> current element の font size
↓ は上下左右に、 font-size 分の padding を設定する例

```css
.padded {
    font-size: 16px;
    padding: 1em;
}
```

- em は、 `padding`, `height`, `width`, `border-radius` などを設定する時に便利
  - 基本的に、font の大きさに従って、scale するものなので
- `font-size` のプロパティについては em はちょっと異なる振る舞いをする
  - `inherit` した `font-size` にを元に計算される
  - `font-size: 16px` に対して `1.2em` なら `19.2px`

`font-size` に em を使用すると起きる問題

- `font-size` と、他のプロパティに対して `em` を指定した時に、まず、`font-size` の大きさが `inherit` した `font-size` により計算され、それを元に他のプロパティの `em` の内容が計算される
  - そのため、`{ font-size: 1.2em; padding: 1.2em; }` とすると、ベースの `font-size` が 16px の場合 `{ font-size: 19.2px; padding: 23.04px; }` となり、`padding` の方が大きく算出される
- また `ul` のように、ネストされた要素に対して、`ul { font-size: .9em; }` などの設定をした場合、Nest が深くなるにつれて、`font-size` がどんどん小さくなってしまう
  - `ul` の定義をしたあとに、再度 `ul ul { font-size: 1em; }` とすれば回避できるがあまり望ましい書き方ではない

`font-size` には rem を使用する

- rem -> root em ということ、つまり curren element の `font-size` に対しての相対値ではなく、root element に対しての相対値
  - `ul { font-size: 1.2rem; }` は、常に root element の `font-size` の 1.2 倍なので、`font-size: 16px` の場合は、ネストされた要素も全て `font-size: 19.2px;` と算出される

Accessibility を考慮すると、`font-size` は相対値を指定するべき

#### それぞれいつ使うべき？

基本的な考え方

- rem
  - font-size
- pixel
  - border
- em
  - ↑以外
    - padding
    - margin
    - border radius
- %
  - container's width

## Memo

p31 まで
