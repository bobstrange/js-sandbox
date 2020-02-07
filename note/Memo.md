# Memo
## Type Operators for Object Types
### The keying-in operator

GraphQL APIの結果などを扱う場合

```ts
type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}
```

APIにリクエストして、結果を表示したい

```ts
function getAPIResponse(): Promise<APIResponse> {
  // ...
}

function renderFriendList(friendList: unknown) {
  // ...
}
```

`renderFriendList`の引数`friendList`はとりあえず`unknown`としたが、
`APIResponse`の型を↓のように書き直すこともできる

```ts
type FriendList = {
  count: number
  friends: {
    firstName: string
    lastName: string
  }[]
}

type APIResponse = {
  user: {
    userId: string
    friendList: FriendList
  }
}
```

ただ、このようなケース(下位のオブジェクトを引数として渡したい場合)に、Topレベルに毎回戻ってきて定義し直す必要がでてくる。
(コードの自動生成をしているときなどは、あまりやりたくない)

代わりに↓のようにキー名で、型を取得してくることができる

```ts
type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}
type FriendList = APIResponse['user']['friendList']
```

`Friend`単体も↓のように取得できる
(numberは、Arrayに対して結果の型を指定したい場合に使う)
(tupleの場合には、0, 1, ... でアクセスできる)
```ts
type Friend = FriendList['friends'][number]
```

### The keyof operator

`keyof`を使うことで、オブジェクトのキーをstringのUnionTypeとして取得できる

```ts
type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
```

`keyof`to,`keying-in`を組み合わせて、型安全なgetterを作ることができる
```ts
function get<O extends Object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k]
}

type ActivityLog = {
  lastEvent: Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'Write'
  }[]
}
let activityLog: ActivityLog = {
  // ...
}
const lastEvent = get(activityLog, 'lastEvent')
```

### Record Type
TODO: RecordTypeの良いUseCaseを探してくる
