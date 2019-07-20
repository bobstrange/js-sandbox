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
