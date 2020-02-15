# Memo

## Initial Design
mega user class
### User

```ts
class User {
  private data: UserProps
  get(propName: string): (string|number)
  set(update: UserProps): void
  on(eventName: string, callback: () => {})
  trigger(eventName: string): void
  fetch(): Promise
  save(): Promise
}

/* classとは別にPropsを定義する */
interface UserProps {

}
```

なぜ type ではなく interface なのか？

## Composition based design
- User
- Eventing

### Eventingをどのように注入するか？
1. constructorの引数に追加
  - Userのインスタンスを作るときに、`Eventing`を必ず注入する必要があるのは微妙、、、
2. constructorの引数には、依存だけ(Eventing)で、Userのプロパティは、FactoryMethodでセットする
  - factoryの中での初期化が将来的に重くなりそう
  - `Eventing`がstatic methodのなかにハードコードされるので、将来的な切り替えがやりにくい
3. constructorではUserのプロパティのみ受け取る. 依存(Eventing)は、クラスのプロパティとして定義する
  - Compositionのメリット(他の依存との切り替え)が失われる
  - ただ、Eventsを切り替えたい場合はあまりないのでこの方法が良いのでは？

## Server
Use JSON Server

Install

```shell
npm install -D json-server
```

Create data (./db.json)


Serve
```shell
npx json-server -w db.json
```
