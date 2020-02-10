import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"

const numbersCollection = new NumbersCollection([10, 3, 5, -1, 0])
const charactersCollection = new CharactersCollection('XaAaBb')

const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersSorter = new Sorter(charactersCollection)
charactersSorter.sort()
console.log(charactersSorter.collection)
