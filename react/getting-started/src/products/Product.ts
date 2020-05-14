export interface Product {
  id: number
  name: string
  description: string
  price: number
}

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Programming TypeScript',
    description:
      'Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.',
    price: 27.48
  },
  {
    id: 2,
    name: 'Essential TypeScript',
    description:
      'Work with Typescript and get the most from this versatile open source language. Author Adam Freeman begins this book by describing Typescript and the benefits it offers, and goes on to show you how to use TypeScript in realistic scenarios, going in-depth to give you the knowledge you need. ',
    price: 34.02
  },
  {
    id: 3,
    name: 'Effective TypeScript',
    description:
      'TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript.',
    price: 26.49
  }
]
