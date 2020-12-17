# tailwind example

↓の写経
https://www.youtube.com/watch?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&v=21HuwjmuS7A&index=1

Install deps.

```shell
npm install tailwindcss postcss-cli autoprefixer
```

Inittailwind.

```shell
npx tailwind init
```

Create [postcss.config.js](./postcss.config.js)

Create `css/tailwind.css`. [file](./css/tailwind.css)
(whatever name path is ok)


Add build script to package.json


```json
     "build": "postcss css/tailwind.css -o public/build/tailwind.css"
```

`npm run build` で、public/build/tailwind.css に、tailwind の css が出力されるように。
