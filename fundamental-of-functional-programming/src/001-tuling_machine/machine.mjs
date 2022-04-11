export const machine = (program, tape, initState, endState) => {
  let position = 0
  let state = initState
  let currentInstruction

  while (state !== endState) {
    let cell = tape[String(position)]
    if (cell) {
      currentInstruction = program[state][cell]
    } else {
      currentInstruction = program[state].B
    }

    if (!currentInstruction) {
      return false
    } else {
      tape[String(position)] = currentInstruction.write
      position += currentInstruction.move
      state = currentInstruction.next
    }
  }
  return tape
}
