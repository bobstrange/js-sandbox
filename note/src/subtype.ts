// AがBのサブタイプであるというのは?

class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}
function chirp(bird: Bird) {
  bird.chirp
  return bird
}

// 関数の引数の型のSubtypeを渡しても問題ない
chirp(new Animal) // Error
chirp(new Bird)
chirp(new Crow)


function clone(f: (b: Bird) => Bird) {
}

function birdToBird(b: Bird) {
  return new Bird
}
clone(birdToBird) // OK

function birdToCrow(b: Bird) {
  return new Crow
}
clone(birdToCrow) // OK

function birdToAnimal(b: Bird) {
  return new Animal
}
// 関数Aが関数BのSubtypeであるということは?
// この場合 f: (b: Bird) => Bird 型のSubtypeであるということは
// 戻り値は、元の戻り値 Bird型のSubtypeである必要がある
clone(birdToAnimal) // Error

function animalToBird(a: Animal) {
  return new Bird
}

function crowToBird(c: Crow) {
  return new Bird
}

// 逆に、引数は、元の引数 Bird型のSupertypeである必要がある
clone(animalToBird)
clone(crowToBird)
