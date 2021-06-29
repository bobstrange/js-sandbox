# CSS in Depth

CSS in Depth の写経

[ref repo](https://github.com/CSSInDepth/css-in-depth)

## Note

### Chapter 1

Rule of Thumb

- css セレクタに id を使用しない
- !important を使用しない

Inheritance

- 特定の property のみ inherit される
  - text に関するもの color, font, ...
  - list property に関するもの list-style, ...
- ↑以外の property で inherit をしたい場合は明示する
- 逆に、デフォルトに設定死体場合は `initial` を設定する
  - 例: width の場合は `auto` がデフォルトなので、 `initial` と書くことは `auto` と書くことと同意

## Memo

p23 まで
