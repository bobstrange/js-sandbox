import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type CountContextType = [number, Dispatch<SetStateAction<number>>]

const Count1Context = createContext<CountContextType | null>(null)

const Count1Provider = ({ children }: { children: ReactNode }) => {
  return <Count1Context.Provider value={useState(0)}>{children}</Count1Context.Provider>
}

const useCount1 = () => {
  const value = useContext(Count1Context)
  if (value === null) {
    throw new Error('Provider Missing')
  }
  return value
}

const Count2Context = createContext<CountContextType | null>(null)

const Count2Provider = ({ children }: { children: ReactNode }) => {
  return <Count2Context.Provider value={useState(0)}>{children}</Count2Context.Provider>
}

const useCount2 = () => {
  const value = useContext(Count2Context)
  if (value === null) {
    throw new Error('Provider Missing')
  }
  return value
}

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
      Count2: {count2}
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

export const CustomHooksAndProviderComponentsExample = () => {
  return (
    <>
      <h2>Custom hooks and Provider example</h2>
      <Count1Provider>
        <Count2Provider>
          <Parent />
        </Count2Provider>
      </Count1Provider>
    </>
  )
}
