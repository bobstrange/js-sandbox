import { createContext, createElement, ReactNode, useContext, useState } from 'react'

const createStateContext = <Value, State>(useValue: (init?: Value) => State) => {
  const StateContext = createContext<State | null>(null)
  const StateProvider = ({
    initialValue,
    children,
  }: {
    initialValue?: Value
    children?: ReactNode
  }) => {
    return <StateContext.Provider value={useValue(initialValue)}>{children}</StateContext.Provider>
  }
  const useContextState = () => {
    const value = useContext(StateContext)
    if (value === null) {
      throw new Error('Provider Missing')
    }
    return value
  }
  return [StateProvider, useContextState] as const
}

const useNumberState = (init?: number) => useState(init ?? 0)

const [Count1Provider, useCount1] = createStateContext(useNumberState)
const [Count2Provider, useCount2] = createStateContext(useNumberState)

const Counter1 = () => {
  const [count1, setCount1] = useCount1()
  return (
    <div>
      Count1: {count1}
      <button onClick={() => setCount1((c) => c + 1)}>+1</button>
    </div>
  )
}

const Counter2 = () => {
  const [count2, setCount2] = useCount2()
  return (
    <div>
      Count1: {count2}
      <button onClick={() => setCount2((c) => c + 1)}>+1</button>
    </div>
  )
}

const Parent = () => {
  return (
    <div>
      <Counter1 />
      <Counter1 />
      <Counter2 />
      <Counter2 />
    </div>
  )
}

export const FactoryPatternWithCustomHookExample = () => {
  const providers = [
    [Count1Provider, { initialValue: 0 }],
    [Count2Provider, { initialValue: 0 }],
  ] as const

  return (
    <>
      <h2>Factory pattern with custom hook example</h2>
      {providers.reduceRight(
        (children, [Component, props]) => createElement(Component, props, children),
        <Parent />
      )}
    </>
  )
}
