# vue-typescript-example

## Setup

```shell
npm install -g @vue/cli
vue create vue-typescript-example
cd vue-typescript-example
npm run serve
```

## propsのObject, Arrayに型情報を追加する

`props: { type : Object }` や `{ type: Array }` は propsに対する型の情報量が不足しているので
`PropType` を import して、型アサーションする

例:
```ts
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    obj: {
      type: Object as PropType<{ name: string }>,
      required: true
    },
    arr: {
      type: Array as PropType<{ task: string }[]>
    },
    msg: String,
  },
});
```

## dataに型を付ける

dataについて、初期値を指定して、型推論に任せると,,,

```ts
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      firstName: '', // (property) firstName: string
      lastName: '', // (property) lastName: string
      doneTodos: null, // (property) doneTodos: null
      todos: [] // (property) todos: never[]
    }
  }
})
```

- `doneTodos` は初期値は `null` だが、 実際は `null | boolean` としたい
- `todos` は `never[]` なので、何も追加できない

ここで、dataに型を付ける方法は2種類ある

### 1. as で型アサーションをする
なので、 `as` で型アサーションする

```ts
data() {
  return {
    firstName: '',
    lastName: '',
    doneTodos: null as null | boolean,
    todos: [] as {
      id: string,
      task: string,
      done: boolean
    }[]
  }
}
```

### 2. アノテーションで型定義を付与する

型を別で定義して、設定する

```ts
export type Todo = {
  id: string,
  task: string,
  done: boolean
}

export type Data = {
  firstName: string,
  lastName: string,
  todos: Todo[]
}

export default Vue.extend({
  data(): Data {
    return {
      firstName: 'Taro',
      lastName: 'Yamada',
      todos: []
    }
  }
})
```

## computedの型

**`computed` の各関数は戻り値のアノテーションが必須**

```ts
data() {
  return {
    defaultDateLabel: '1980-01-01',
    dateLabel: null as string | null
  }
},
computed: {
  dateFromDateLabel(): Date {
    let label = this.defaultDateLabel
    // this.dateLabel は nullable なので null チェック必須
    if (this.dateLabel !== null) {
      label = this.dateLabel
    }
    return new Date(label)
  }
}
```

## methodsの型
methodsには主にイベントハンドラーを記述する
予め `onClick({ target }: { target: HTMLElement})` のように、 `target` の型を絞り込んでおいたほうが楽

```ts
methods: {
  // { target: HTMLElement } としておくことで、 event.targetの型をあらかじめ絞り込める
  onClick({ target }: { target: HTMLElement }) {
    this.bounds = target.getBoundingClientRect()
  },
  // event自体を扱う必要がある場合は↓のように `instanceof` で絞り込む
  onClick2(event: Event) {
    if (!event.isTrusted) return
    if (event.target instanceof HTMLElement) {
      this.bounds = event.target.getBoundingClientRect()
    }
  }
}
```
