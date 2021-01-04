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
