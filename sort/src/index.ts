import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, 5, -1, 0])
const charactersCollection = new CharactersCollection('XaAaBb')

const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersSorter = new Sorter(charactersCollection)
charactersSorter.sort()
console.log(charactersSorter.collection)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

const linkedListSorter = new Sorter(linkedList)
linkedListSorter.sort()
linkedList.print()
