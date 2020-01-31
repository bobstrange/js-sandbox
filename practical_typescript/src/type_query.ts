type SomeType = {
  foo: string
  bar: string
  baz: string
}

let someKey: keyof SomeType
/** 'foo' | 'bar' | 'baz' */

let myObject = {
  foo: 'Foo',
  bar: 'Bar',
  baz: 'Baz'
}

let myObjectKey: keyof typeof myObject
/** 'foo' | 'bar' | 'baz' */
