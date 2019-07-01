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

