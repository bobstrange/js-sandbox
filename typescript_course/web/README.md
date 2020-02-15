# Memo

## Initial Design
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

### Server
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
