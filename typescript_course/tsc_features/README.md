# Memo

## decorators.ts

### Run

```
npx ts-node decorators.ts
```

### decorator


> npx ts-node decorators.ts
> Target: Boat { formattedColor: [Getter], pilot: [Function] }
> Key: pilot

- first arg
  - prototype
- second arg
  - decorator applied to
- third arg
  - property descriptor

**Decorator only gets executed when the cord for this class is ran**

### decoreator essential
in TypeScript playground

```
var __decorate = function (decorators, target, key, desc) {
    var desc = Object.getOwnPropertyDescriptor(target, key)
    for (var decorator of decorators) {
        Object.defineProperty(target, key, desc)
    }
}
```

### PropertyDescriptor ?

```ts
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}
```

```js
const user = {
  name: 'John',
  age: 20
}

Object.getOwnPropertyDescriptor(user, 'name')
user.name = 'Tom'
console.log(user.name) // => 'Tom'
Object.defineProperty(user, 'name', { writable: false })
user.name = 'Mike'
console.log(user.name) // => !!!'Tom'


```
