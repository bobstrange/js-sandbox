import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, 5, -1, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XaAaBb')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()

// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection)

// const charactersSorter = new Sorter(charactersCollection)
// charactersSorter.sort()
// console.log(charactersSorter.collection)


// const linkedListSorter = new Sorter(linkedList)
// linkedListSorter.sort()
// linkedList.print()
