interface Box<T> {
  value: T
}

const box0: Box = { value: "test" } // Error
const box1: Box<string> = { value: "test" }
const box2: Box<number> = { value: "test" } // Error

function boxed<T>(props: T) {
  return { value: props }
}

const boxed2 = <T>(props: T) => {
  return { value: props }
}

const boxA = boxed('test') // boxA: { value: string; }
const boxB = boxed(0)      // boxB: { value: number; }
const boxC = boxed(false)  // boxC: { value: boolean; }
const boxD = boxed(null)   // boxD: { value: any; }

const annotatedBoxA = boxed('test' as string | null)
const annotatedBoxC = boxed(false as boolean | null)

const boxed3 = <T extends number | string>(props: T) => {
  return { value: props }
}

const boxAA = boxed3('test')
const boxBB = boxed3(100)
const boxCC = boxed3(true) // Error
