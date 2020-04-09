import { lookup, isNonEmpty } from 'fp-ts/lib/Array'
import { isSome, isNone } from 'fp-ts/lib/Option'

const data = [
  'Foo/Bar'
]

const existElem = lookup(0, data)

if (isSome(existElem)) {
  console.log(existElem.value.split('/'))
}

const nonExistElem = lookup(1, data)

if (isSome(nonExistElem)) {
  console.log(nonExistElem.value.split('/'))
} else {
  console.log(nonExistElem)
}

if (isNone(nonExistElem)) {
  console.log(nonExistElem)
}
