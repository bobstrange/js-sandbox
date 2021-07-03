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
    - :root font-size
    - padding
    - margin
    - border radius
- %
  - container's width

### Stop thinking in pixels

この本の著者は、root の font-size を .625em や、62.5% にすることは、アンチパターンだと言っている

理由としては

- root の font-size が 10px なので、至るところで、1.4 rem や 1.6 rem を書かなければならなくなる -> stylesheet の定義が増えてメンテナンスがしづらくなる
- pixel ベースで考えてしまい、標準の値よりちょっと大きい、や、ちょっと小さいという考え方にならない -> Responsive にするためには、fuzzy な考え方が必要

基本的な `font-size` や、他のプロパティに、`rem` や、 `rem` を使用している場合、:root の `font-size` に対して @media query を書くだけで、ある程度 responsive になるというのが、著者の主張

```css
:root {
  font-size: 0.75em;
}

@media (min-width: 800px) {
  :root {
    font-size: 0.875em;
  }
}

@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
```

使い回しをするコンポーネントへの `font-size` は、 `rem` で設定し、内部の要素について `font-size` を `em` で設定しておくことで、`large` や、`small` などのクラスでコンポーネントの `font-size` を変更することで、コンポーネントのサイズを動的に変更できる

### Viewport relative units

- vh: viewport の高さの 1/100
- vw: viewport の幅の 1/100
- vmin: viewport の高さ・幅の小さい方の 1/100
- vmax: viewport の高さ・幅の大きい方の 1/100

viewport-relative は、Hero などの画面を埋める画像に有効

- vw を `font-size` に使用する
  - 例えば font-size: 2vw にすると、1200 px の画面では、24px、タブレットなどの 768px の画面では 15px となる
  - breakpoint が無いので、要素のサイズがスムーズに変わる
  - 普通に使うと 24 px は大きすぎるし、iphone6 などの 384px の画面では、 7.5px になってしまうので、CSS の `calc()` で補正する必要がある
- 例えば `:root { font-size: calc(0.5em + 1vw) }` とすると
  - 11.75 px (384 px の幅) ~ 20 px (1200 px の幅) で変わる

### Unit-less numbers and height

unit-less value が設定できる部分は、 unit-less な値を使用するべき

### CSS variables

著者は、CSS preprocessor の variable を使用して、 CSS variable を無視することを薦めないとのこと。
(そのため、CSS variables ではなく、custom property と呼称して、違うものであることを強調しようとしている)

定義は、 `--` から始める必要がある

```css
:root {
  --main-font: Helvetica, Arial, sans-serif;
  --brand-color: aqua;
}
```

定義を参照するためには、`var()` を使う
`var()` の第二引数に、対象の定義が無い場合の fallback value を指定できる
※ 対象のプロパティに無効な値が設定された場合は、対象のプロパティは initial がセットされる。

```css
p {
  font-family: var(--main-font);
  color: var(--brand-color);
  background-color: var(--secondary-color, green);
  padding: var(--brand-color)
}
```

custom property は、定義されている要素の子要素、子要素にのみ適用されるように再定義できる
(scoped variable のような振る舞いをする)

## Chapter 3 Box model

### Difficulties with element width

- `box-sizing` プロパティのデフォルトは `content-box` なので、要素の width と height は padding と border を含まない
  - `box-sizing: border-box` とすることで、要素の width と height は padding と border を含むようになる
  - それによって、要素のサイズの設定がやりやすくなる

カラム同士の隙間を作るには、自前で計算して値を入れるのではなく、`calc()` を使用するようにした方が良い
margin を取った分、width を狭くする例

```css
.sidebar {
  /*... */
  width: calc(30% - 1.5em);
  margin-left: 1.5em;
  /* ... */
}
```

### Difficulties with element height

基本的には、要素の高さを明示的に設定しないほうが良い。
一般的な Document の流れは、幅は制限されていて、高さは無制限なことが多いため。

要素の高さを明示的に指定した場合に、コンテンツがコンテナからはみ出す (overflowing) 場合がある。
はみ出す際の挙動を `overflow` プロパティで制御できる。

- `visible`
- `hidden`: コンテナ + padding から、はみ出た部分が表示されない
- `scroll`: 常に scroll bar が追加される
- `auto`: はみ出る場合にのみ scroll bar が追加される

水平方向のみ、垂直方向のみの overflow の制御は、 `overflow-x` と `overflow-y` でおこなえる。

要素の高さについて
% を高さに設定するのはよろしく無い、% を設定した場合に要素の高さはコンテナの高さから計算されるが、コンテナの高さは子要素の高さから計算されるため、循環参照になり、結局値が無視される。

高さを指定したい理由の一つは、コンテナがスクリーンを覆うようにしたい為というものがあり、そのような場合は、viewport-relative を使用するべき。

`min-height` と `max-height`
Hero Image の上の Text のように、Text が短い場合でもある程度の大きさを保ちたい場合などに有用。

### Negative margins

Negative top / left margin は要素自身を上 / 左に引っ張る
Negative right / bottom marging は次の要素を左 / 上に引っ張る

Column layout 作成時に使えるケースがたまにあるが、基本的にはあまり使用しないほうが良い。

### Spacing elements within a container

コンテナ内に要素を複数配置する時の Margin について、
個別の要素に Margin 適用していくのは、手間なので、汎用的な方法がほしい。

*lobotomized owl selector* (`* + *`)を使う

`* + *` -> `*` universal selector、 `+` adjacent sibling combinator (隣接兄弟結合子) 、`*` universal selector

つまり、ある要素に続くどんな要素にも適用される selector ということ

```css
body * + * {
  margin-top: 1.5em;
}
```

### Making sense of floats

float は元々それだけで、page を layout するような目的ではなかった。

Flexbox があるのに、float の使い方を知る必要はあるか？
IE は滅びたので気にしなくてよいが、 float は、画像をページの端に持っていって周りをテキストで囲むようにする唯一の方法なので、その意味では知っている必要がある。

---

## Memo

p41 まで

### direct descendant combinator

descendant combinator

h2 は .foo の直接の子要素でなくても (孫でもひ孫でも) selector に一致する

```css
.foo h2 {
  font-size: 1.2rem;
}
```

direct descendant combinator (child combinator)

h2 が .foo の直接の子要素でないと selector に一致しない

```css
.foo > h2 {
  font-size: 1.2rem;
}
```

### *lobotomized owl selector* (`* + *`) (ふくろうセレクタ)

*lobotomized owl selector* は universal selector に続く、隣接兄弟結合子、に続く universal selector

`* + *` つまり、ある要素に連続する 2 番目移行の要素全てに match するセレクタということ。
これを使用することで、例えば body 配下の要素の上下のマージンを一律に固定するとかができる。

```css
body * + * {
  margin-top: 1.5em
}
```

### pseudo-element

ドキュメントの特定の部分をターゲットにする特別なセレクタ。
`::` で始まる。`::before` や `::after` が、要素の前や、後ろにコンテントを挿入するために使われる。

