import { machine } from './machine.mjs'

const tape = {
  0: '1',
  1: '0',
}

const program = {
  q0: {
    1: { write: '1', move: 1, next: 'q0' },
    0: { write: '0', move: 1, next: 'q0' },
    B: { write: 'B', move: -1, next: 'q1' },
  },
  q1: {
    1: { write: '0', move: -1, next: 'q1' },
    0: { write: '1', move: -1, next: 'q2' },
    B: { write: '1', move: -1, next: 'q3' },
  },
  q2: {
    1: { write: '1', move: -1, next: 'q2' },
    0: { write: '0', move: -1, next: 'q2' },
    B: { write: 'B', move: 1, next: 'q4' },
  },
  q3: {
    1: { write: '1', move: 1, next: 'q4' },
    0: { write: '0', move: 1, next: 'q4' },
    B: { write: 'B', move: 1, next: 'q4' },
  },
}

const result = machine(program, tape, 'q0', 'q4')
console.log(`result: ${JSON.stringify(result)}`)
