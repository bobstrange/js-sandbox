enum Direction {
  East,
  West,
  South,
  North
}

console.log(Direction.East)  // 0
console.log(Direction.North) // 3

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction2.Up)  // 1
console.log(Direction2.Right) // 4

enum Characters {
  BOB = 'Bob',
  TOM = 'Tom'
}

console.log(Characters.BOB) // Bob
