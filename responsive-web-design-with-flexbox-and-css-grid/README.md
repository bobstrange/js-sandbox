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

```css
flex: 2 1 25%
```
