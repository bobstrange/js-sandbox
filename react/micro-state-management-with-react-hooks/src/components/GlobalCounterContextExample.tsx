/* eslint-disable @typescript-eslint/no-empty-function */

import { useState, createContext, Dispatch, SetStateAction, useContext, ReactNode } from 'react'

type CountContextType = [number, Dispatch<SetStateAction<number>>]

const Count1Context = createContext<CountContextType>([0, () => {}])
const Count2Context = createContext<CountContextType>([0, () => {}])

const Counter1 = () => {
  const [count1, setCount1] = useContext(Count1Context)

  return (
    <div>
      Count1: {count1}
      <button onClick={() => setCount1((c) => c + 1)}>+1</button>
    </div>
  )
}

const Counter2 = () => {
  const [count2, setCount2] = useContext(Count2Context)

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

const Count1Provider = ({ children }: { children: ReactNode }) => {
  const [count1, setCount1] = useState(0)

  return <Count1Context.Provider value={[count1, setCount1]}>{children}</Count1Context.Provider>
}

const Count2Provider = ({ children }: { children: ReactNode }) => {
  const [count2, setCount2] = useState(0)

  return <Count2Context.Provider value={[count2, setCount2]}>{children}</Count2Context.Provider>
}

export const GlobalCounterContextExample = () => {
  return (
    <>
      <h2>Global Counter Context Example</h2>
      <Count1Provider>
        <Count2Provider>
          <Parent />
        </Count2Provider>
      </Count1Provider>
    </>
  )
}
