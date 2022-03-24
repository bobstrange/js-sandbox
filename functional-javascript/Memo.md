# JavaScript 関数型プログラミングメモ

## 純粋関数

- 入力値のみに依存する
  - 隠された値や外部スコープの値には依存しない
- スコープの外にある値を一切変更しない
  - グローバルオブジェクト
  - 参照渡し

一般的に、関数が外部のリソースを読み書きする時に、関数は副作用を持つ

副作用を伴う [showStudent](./src/1-2-2_bad_show_student.js)
改善した [showStudent](./src/1-2-2_good_show_student.js)

HTML オブジェクトのやり取りを専用の関数 `append` に移したことにより、不順な処理から純粋な処理を分離できた
処理結果が一貫性を持ち、予測可能になる => 参照等価性

## 等式推論

全てのプログラムは、入力値を処理して戻り地を返す関数のセットとして定義できると仮定すると

```
Program = [Input] + [func1, func2, ...] -> Output
```

func1, func2, ... が純粋関数とすると、[val1, val2, ...] とインライニングできる。
純粋関数なので入力が一定なら戻り値も一定

## 関数型プログラミング

- 分解 (プログラムを小さな処理単位に分ける)
- 合成 (小さい処理単位を結合する)

`showStudent` は `find` と `csv` と `append` に分解でき、それらを合成してつくられる

関数 f と g の合成 を `f(g(x))` と書く
f の引数と g の戻り値の数と型が揃っていれば、 f と g は合成可能

合成 -> `compose`

## 非同期に対する対処

[badVerify](./src/1-3-3_bad_verify.js)
[goodVerify](./src/1-3-3_good_verify.js)

## オブジェクト指向と関数型プログラミング

- オブジェクト指向
  - カプセル化
  - オブジェクトのデータと振る舞いに強い結合
- 関数型プログラミング
  - データと振る舞いを分離
  - データに対する操作はデータとは別のところに有る一般化された関数を使う

```js
// Object Oriented

class Person {
  get fullname() {
    return [this.firstname, this.lastname].join(' ')
  }
}

// Functional
const fullname = (person) => [person.firstname, person.lastname].join(' ')
```

オブジェクト指向プログラミングでの、
与えられた Person オブジェクトと同じ国に済む全ての Person を見つける
与えられた Student オブジェクトと同じ国に炭同じ学校に通う Student を見つける
を行いたい場合

元データ

```js
const curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State)
curry.address = new Address('US')

const turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton')
turing.address = new Address('England')

const church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton')
church.address = new Address('US')

const kleene - new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton')
kleene.address = new Address('US')
```

オブジェクト指向で実装
[Person](./src/2/student.js) と [Student](./src/2/student.js)

```js
church.studentsInSameCountryAndSchool([curry, turing, kleene])
```

関数型プログラミングで実装

```js
// 学生の国と、学校を比較する関数
const selector = (country, school) => {
  return (student) => {
    // オブジェクトグラフを走査
    return student.address.country === country &&
           student.school == school
  }
}

const findStudentsBy = (friends, selector) => {
  // 配列
  return friends.filter(selector)
}

findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton'))
```

関数合成により `findStudentsBy` を生成
この関数は、`address` と `school` を備えた I/F を持つオブジェクトを受け取る

## オブジェクトを値として扱う

Value オブジェクトパターン

```js
const zipCode = (code, location) => {
  let _code = code
  let _location = location
  return {
    code() {
      return _code
    },
    location() {
      return _location
    },
    fromString(str) {
      const parts = str.split('-')
      return zipCode(parts[0], parts[1])
    },
    toString() {
      return `${_code}-${_location}`
    }
  }
}

const princetonZip = zipCode('08544', '3345')
princetonZip.toString()
```

このようにすることで、 `_location` と `_code` にアクセスできないようにすることができる。

## オブジェクトを freeze する

`Object.freeze()` で、オブジェクトの状態変更を防止できる。
TypeScript 使って readonly しておけば、コンパイルタイムで検知できるので、これはあまり要らないか。

## 高階関数

例: 米国在住者のリストを出力する

```js
// 命令形
const printPeopleInUs = (people) => {
  for (const person of people) {
    if (person.address.country === 'US') {
      console.log(person)
    }
  }
}

// 宣言型
const printPeople = (people, action) => {
  for (const person of people) {
    action(person)
  }
}

const action = (person) => {
  if (person.address.country === 'US') {
    console.log(person)
  }
}

// リファクタリング宣言型
const printPeople = (people, selector, printer) => {
  people.forEach((person) => {
    if (selector(person)) {
      printer(person)
    }
  })
}
```

命名が命令的ではないのは宣言型なのもあるのか？
filter すりゃいいのにしてないのはなんか理由があるのか？
