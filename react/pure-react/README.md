# pure react

- html に entry point を作る.
  - `id="app"` など
- JS で entry point の DOM を React に置き換える.
  - `ReactDom.render()`

```js
const App = () => {
    return React.createElement("div", {}, "whatever")
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)
```
