# nodejs

[ref](https://frontendmasters.com/courses/node-js-v2)

## Note

- VSCode で Top Level await が怒られるのどうすればよいのか？
  - import.meta も怒られる
  - jsconfig.json で `"module": "ES2020"`　とか追加したがまだエラー出る
- `.mjs` の中だと `__dirname` が使えない :-(
  - `import.meta.url` と URL で
  - Before
    - `const template = await readFile(path.join(__dirname, 'template.html'))`
  - After
    - `const template = await readFile(new URL('template.html', import.meta.url))`
