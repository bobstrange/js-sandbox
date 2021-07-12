# CSS in Depth

CSS in Depth の写経

[ref repo](https://github.com/CSSInDepth/css-in-depth)

## 01.

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

## 02. working with relative units

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

## 03. Box model

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

## 04. Making sense of floats

float は元々それだけで、page を layout するような目的ではなかった。

Flexbox があるのに、float の使い方を知る必要はあるか？
IE は滅びたので気にしなくてよいが、 float は、画像をページの端に持っていって周りをテキストで囲むようにする唯一の方法なので、その意味では知っている必要がある。

## 05. Flexbox

### Flexbox principles

主要概念

- Flex Container: `{ display: flex }` の要素
- Flex Items: Flex Container 配下の要素
- Main axis: Flex item の並ぶ方向
- Cross axis: Main axis と 90度ずれている方向

p123 ~ Navigation Bar の Styling

### Flexbox size

flexbox のサイズについては、`margin`, `width`, `height` 以外でも制御できる。
`flex` プロパティを使用する。

`flex` プロパティは、`flex-grow`, `flex-shrink`, `flex-basis` のショートハンド。
`flex` プロパティは、flex item に対して設定するプロパティ。
`{ flex: 1 }` は `flex-grow: 1` のみ指定して、残り 2 つをデフォルト値 (1 と 0%) にしているのと同義

- `flex-basis`
  - 1 番目の flex item の初期値みたいなもの
  - width に設定できる値だったら何でも設定可能
- `flex-grow`
  - flex-basis によって、各 flex item のサイズが算出された後の、余りのスペースを埋めるためのプロパティ
  - `flex-grow: 0` は、対象の flex item が広がらないことを表す
  - `flex-grow` に設定する値は、重みみたいなもの。
    - 例: 残りスペースが 60 % で、要素 1 の `flex-grow: 2` 要素 2 の `flex-grow: 1` の場合は、要素 1　は 40 % 、要素 2 は 20 % 広がる。
- `flex-shrink`
  - `flex-shrink` は `flex-grow` と同様に、flex-basis を元に、各 flex item のサイズが算出された後の不足するスペースに対応するためのプロパティ
  - `flex-shrink: 0` は、対象の flex item が縮小しないことを表す
  - `flex-shrink` に設定する値も、重みみたいなもので、大きいほど縮小しやすい
- `flex: none`
  - コンテンツが original の幅を確保し、拡大も縮小もしない

### Flex direction

`flex-direction` flex item が並ぶ方向、デフォルトは `row` -> 行方向、`column` -> 列方向。

### Alignment, spacing and other details

page 136 flex container property のチートシートっぽいもの

- `justify-content`: main axis に対して flex item がどのように配置されるか
- `align-items`: cross axis に対して flex item がどのように配置されるか

justify -> main axis
align -> cross axis

## 07. Positioning and stacking contexts

`position` プロパティについて

### Fixed positioning

一番理解しやすいらしい
`position: fixed`

modal の背景を画面全体に固定する例

```css
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
```

modal 自体を画面全体に固定する例

```css
.modal-body {
  position: fixed;
  top: 3em;
  bottom: 3em;
  right: 20%;
  left: 20%;
  padding: 2em 3em;
  background-color: white;
  overflow: auto;
}
```

Fix された element は、通常の Document の flow からは外れる。
基本的に、通常の Document は Fix された Element の背後に隠れる。
Modal の場合はこれで良いが、サイドバー、ヘッダーなどの場合は、隠れると困るので、 margin を設定する。

### Absolute positioning

absolute の場合は、viewport をベースにするのではなく、直近の親のポジションに対しての位置になる。
例えば、Modal の Close ボタンを Modal の右上に配置する場合、top と right を指定すれば良い

```css
.modal-close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  padding: 0.3em;
  cursor: pointer;
}
```

Close -> × に変更したいが、×に変更してしまうと、Accessibility の問題が発生する。
そのため HTML では、Close と定義しておき、CSS で調整する。
そのため、ボタンの Text を ボタンの外に配置(`text-indent`) し、overflow を hidden にする。(こんなことやるの？？？)
そして、ボタンの ::after pseudo element で × を定義する。

### Relative positioning

### Stacking contexts and z-index

ブラウザがレイヤの上下を決める仕組み
ブラウザは、HTML をパースして、DOM tree を作る、その際に render tree も作る。
render tree は、見た目や、各要素の位置、要素が描画サれる順番を持つ。
position を設定していない場合は、基本的には、HTML に登場する順番。

position を設定している要素がある場合は、 position が設定されていない要素 -> position が設定されている要素の順番。

通常は、Modal は `</body>` の直前に配置される。
fixed な要素は、HTML のどの位置に配置しても問題ないが、 absolute や relative の場合は別のやり方を取る必要がある。 => z-index

↓の例では、 `box one` は `box two` の↓に配置されるので、`box one` 内に、`absolute` で定義している要素は、どんなに大きい z-index を指定しても、 `box two` の上には表示されない

```html
<body>
  <div class="box one positioned">
    one
    <div class="absolute">nested</div>
  </div>
  <div class="box two positioned">two</div>
  <div class="box three">three</div>
</body>
```

`z-index` は、CSS のカスタムプロパティとして登録しておくと良い

### Sticky positioning

`position: sticky` を設定することで、要素をスクロール時に固定することができる。
併せて `top:` を設定して、どの位置に固定するかを設定できる。

### Summary

- Modal には `position: fixed` を私用する
- Dropdown, tooltip などの動的な要素には、 absolute を使う
  - 併せて `::after` の pseudo element も使う

## 08. Responsive design

Desktop と Mobile で別の domain を割り当てて、別の HTML と CSS を返すアプローチ。
-> ブラウザの viewport のサイズによって、レンダリングする内容を変更するアプローチ。 => レスポンシブルデザイン

Newspaper site は特に様々なコンテンツをページ内に表示する必要があるので参考になる。www.bostonglobe.com など

Responsive design のキーとなる原則

1. A mobile first approach to design
  - デスクトップのレイアウトを作る前に、 mobile 用のバージョンを作る
2. `@media` at-rule
3. use of fluid layouts

### Mobile first

hero の上の文字に影をつけると、文字が読みやすくなる。
header が nav を含むのではなく、隣接させた。

hamburger は unicode で "\2261"。
元の toggle button は `overflow: hidden; text-indent: 5em;` で画面から消して、pseudo element で hamburger を表示させる。

```css
.menu-toggle::after {
  position: absolute;
  top: 0.2em;
  left: 0.2em;
  display: block;
  content: "\2261";
  text-indent: 0;
}
```

Mobile の UI を作る時には、各要素をタップできるサイズにするように気をつけること。

最後に↓の meta tag を追加する。
Mobile のブラウザで表示した際に、サイトが Mobile 用の準備が出来ていることを伝えるためのもの。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media queries

`@media` を使うことで、特定の条件でのみ適用する CSS を作成することができる。
`min`, `max`, `width`, `height` だけでなく、`orientation` や、 `resolution` などの条件もある。

```css
@media (min-width: 560px) {}
```

Mobile first アプローチの場合は、media query の条件は大体 `min-width` になる。

各 style を定義している部分の直後に media query を配置することで、元の style と media query の関係性がわかりやすくなる。

### Fluid layouts (liquid layout)

### Responsive images

Responsive design では、画像についてはサイズだけでなく、Mobile の回線速度の制限についても考慮しておく必要がある。

- 必ず画像は圧縮しておく
- 必要以上の解像度にしない

media query で背景画像の読み込み分けをする。
html 上の `<img>` タグについては、`srcset` 属性で対応する。

```html
<img alt="Tmp"
     src="image-small.png"
     srcset="image-small.png 560w,
             image-medium.png 800w,
             image-large.png 1280w"
>
```

## 09. Modular CSS

### Base styles: laying the ground work

全てのページに適用する base style
よくある bas style

- `box-sizing: bordder-box` にする
- デフォルトのフォントサイズとフォントファミリーを決める
  - `body { font-family: xxx; }`
- リンクの色
- Heading の style
- Margin
  - body の margin を 0 に設定する

[normalize.css](https://necolas.github.io/normalize.css/) を使うのを推奨

### A simple module

Component 化したい場合は、selector は、単一のクラスで表現する
例えば `#sidebar .message` とすると `#sidebar` の中でしか利用できないモジュールになってしまう。

module のバリエーション
一貫性は重要だが、ケースによっては module に変化を加えたい場合がある。
例えば、Error の場合は、背景を teal ではなく red にしたいなど。

そのような場合は、module のクラス名から始まる modifier クラスを作る。
`.message` -> `.message--success`

`module名--modifier名` の規約 (BEM)

**Context に依存した selector を書くべからず** Context に依存した selector を書くと、メンテナンスがとても大変になる為

例えば、dropdown を light -> dark にする要件が来た場合は、
`.page-header .dropdown` を修正するのではなく、 `.dropdown--dark` を新しく作成する。

---

## Memo

p41 まで

参考になりそうな[サイト](https://bradfrost.github.io/this-is-responsive/)

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

### input 要素の幅について

`display: block` にしても、幅 100 % にならないので、 `width: 100%` が必要。
