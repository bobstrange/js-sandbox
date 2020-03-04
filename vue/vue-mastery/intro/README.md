# Memo

## vue instance
```js
new Vue({
  el: '#app', // -> plluging in to an element
  data: {     // -> putting our data in place
    key: 'value'
  }
})
```

## class binding

### example1

input
```html
<div
  class="color-box"
  :class="{ active: activeClass, 'text-danger': errorClass }"
>
</div>
```

```js
{
  data: {
    activeClass: true,
    errorClass: false
  }
}
```

output

```html
<div
  class="color-box active"
>
</div>
```

### example2
input
```html
<div :class="classObject"></div>
```

```js
{
  data: {
    classObject: {
      color-box: true,
      active: true,
      'text-danger': false
    }
  }
}
```

output
```html
<div class="color-box active"
```

### example3

```html
<div :class="[activeClass, errorClass]"></div>
```

```js
{
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

```html
<div class="active text-danger"></div>
```
