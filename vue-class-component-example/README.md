# vue-class-component-example
## Component
```ts
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
```

## PropsとData
### Dataの定義
ComponentのDataはクラスメンバーとして値を宣言する

```ts
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  flag: boolean = false
  inputText: string | null = null
}
```

### Propsの定義
- ComponentのPropsは `@Prop` デコレータを使って、クラスメンバーとして宣言する
- 初期値は、 `default` で設定する
- メンバ変数名に続けて `!` キーワードが必要

```ts
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: Boolean, default: false })
  flag!: boolean

  @Prop({ type: String, default: null })
  message!: string | null

  @Prop({ type: [String, Number], default: null })
  value!: string | number | null
}
```

## ComputedとMethods
### Computed
- Computedは、`get` アクセサを付与した関数として定義する
- 戻り値は自動で推論されるので、アノテーションしなくても良い

```ts
<template>
  <div class="hello">
    <p>{{ greet }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  name: string = 'Taro'
  value: any = false

  get greet(): string {
    return `Hello ${this.name}`
  }

  // string: true, noImplicitAnyでもなぜかコンパイルエラーにならず？
  get valueLabel() {
    return this.value // any型なので、string以外の可能性もある
  }
}
</script>
```

### Method
- methods はクラスメンバーとしてそのまま定義する
```ts
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  onClickEvent({ target }: { target: HTMLButtonElement }) {
    console.log(target.getBoundingClientRect())
  }
}
```
