# ts-webpack
## deps

```shell
npm install -D \
  webpack \
  webpack-cli \
  webpack-dev-server \
  typescript \
  ts-loader
```

For production
```shell
npm install -D \
  clean-webpack-plugin
```
## tsconfig.json
`tsconfig.json`作成

```shell
npx tsc --init
```

変更する可能性がある・変更する部分

- target: 'es5'- 
- module: 'ec2015'
- sourceMap: true
- outDir: './dist'

## webpack.config.js


