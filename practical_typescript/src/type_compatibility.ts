{
  let object_1: {} = 0
  let object_2: {} = '1'
  let object_3: {} = false
  let object_4: {} = {}

  let object_5: object = 0      // Error
  let object_6: object = '1'    // Error
  let object_7: object = false  // Error
  let object_8: object = {}     // Error

  type Key0 = keyof {}          // type Key0 = never
  type Key1 = keyof { K: 'K' }  // type Key1 = 'K'
  type Key2 = keyof 0           // 'toString' | 'toFixed' | ...
  type Key3 = keyof '1'         // number | 'toString' | ...
  type Key4 = keyof false       // 'valueOf'
}

{
  let foo = { key1: 0 }
  let bar = { key2: 0 }
  foo = bar // Error
  bar = foo // Error
}

{
  let foo = { key1: 0 }
  let bar = { key1: 0, key2: 1 }
  foo = bar // OK
  bar = foo // Error
}

{
  let foo = {}
  let bar = { key1: 0 }
  foo = bar // OK
  bar = foo // Error
}
