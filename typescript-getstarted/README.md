# Typescript get started

## 雛形を作る

```shell
tsc --init
```

## コンパイルする

```shell
tsc
```

## Strict mode のエラーを起こす

```shell
sample.ts:1:22 - error TS7006: Parameter 'arg' implicitly has an 'any' type.

1 export const test = (arg) => {
                       ~~~
```

`any`型を期待するパラメータは、明示的に`any`を指定する必要がある

## Change input and output dir

```json
{
    "compilerOptions": {
        "outDir": "dist"
    },
    "include": [
        "src/**/*"
    ]
}
```

## Output *.d.ts

```json
{
    "compilerOptions": {
        "declaration": true
    }
}
```

## Jsファイルをインポートしてビルドする

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "declaration": false
    }
}
```

### 注意
`declaration: false` が必要
> Option 'allowJs' cannot be specified with option 'declaration'.

`checkJs: true` の場合は、JSファイル側で型推論できるようにしておく必要がある。
(場合によっては、型情報をコメントする必要がある)

## tsconfigファイルを分割する

`tsconfig.json`が格納されているファイルパスを`-b` オプションで複数指定可能

```shell
tsc -b src test
# src/tsconfig.json と test/tsconfig.json を参照してビルド

tsc -b src/tsconfig.something.json
# tsconfig.json 出ない場合は、configファイルをフルパスで指定
```
