# cypress getting started

## インストール

OS 毎に必要なライブラリが異なるので、[System Requirement](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) に書いてあるものを入れる。

```bash
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
npm init -y
npm i -D cypress
```

Cypress UI の起動

`npx cypress open` を実行するだけ。

実行すると、初期設定が入っていない場合は、初期化もしてくれる
初回に、`cypress.json` と `/cypress` ディレクトリ(と、その配下) 自動的に作成される。



基本的には npm scripts に入れておいたほうが良い。

```package.json
"scripts": {
  "cypress:open": "cypress open"
}
```

### Q: TypeScript の設定
## テストを書く

`{project_root}/cypress/integration/` 配下に spec ファイルを作成する。
Cypress の UI のテストのリストに即時に反映される。

ファイル作成してみる。

```bash
touch ./cypress/integration/sample_spec.js
```

UI で `sample_spec.js` をクリックすると、Cypress がブラウザを起動する。
テストを書くと、cypress は変更を watch していて勝手にテストが実行される。

`describe`, `it` は `Mocha`
`expect` は `Chai` のものを使用している。
