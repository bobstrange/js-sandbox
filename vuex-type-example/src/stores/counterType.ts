export interface CounterState {
  count: number
}

export interface CounterGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

export interface CounterMutations {
  setCount: { amount: number }
  multi: number
  increment: void
}

export interface CounterActions {
  asyncSetCount: { amount: number }
  asyncMulti: number
  asyncIncrement: void
}
