# Memo

## Create tsconfig skelton

```shell
npx tsc --init
```

## Watch

```shell
npx tsc -w
```

## Build

```shell
npm install -D nodemon concurrently
```

```json
...
  "scripts": {
    "dev:watch": "tsc -w",
    "dev:run": "nodemon dist/index.js",
    "dev": "concurrently npm:dev:*"
  },
  ...
```

```shell
npm run dev
```
