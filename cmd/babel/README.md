# Cmd

```shell
npm install -D \
  @babel/core \
  @babel/cli \
  @babel/preset-env \
  @babel/polyfill
```


トランスパイル結果を標準出力

```shell
npx babel sample.js
```

トランスパイル結果をファイル出力
```shell
npx babel sample.js -o transpiled.js
```

`src`配下のコードを`dist`配下にTranspile
```
npx babel src -d dist
```
