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

### SyncとUserのやりとりをどのようにするべきか？
#### 1
Syncが引数を受け取るようにする

```ts
class Sync {
  save(id: number, data: UserProps): void
  fetch(id: number): UserProps
}
```

`Sync`が、`User`と強く結合してしまう

#### 2
`Sync`の引数に`Serializable`, `Deserializable`を実装したオブジェクトを受け取れるようにする

```ts
interface Serializable {
  serialize(): {}
}

interface Deserializable {
  deserialize(json: {}): void
}

class Sync {
  save(id: number, serialize: Serializable): void
  fetch(id: number, deserialize: Desirializable): void
}
```

`Serializable`の`serialize`の戻り値がobject型

#### 3
Genericsを使用して、`Sync`を汎用的に定義する

```ts
class Sync<T> {
  save(id: number, data: T): AxiosPromise<T>
  fetch(id: number): AxiosPromise<T>
}
```

### Sync.fetchの責務について

リクエストを実行しているが、受け取ったデータについては何もしていない
-> 受け取ったデータの処理は呼び出し側の責務

### UserへのSyncの注入について
`Eventing`とは異なり、`Sync`は切り替える需要がありそう(httpリクエスト, json-server, db, ...)

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
