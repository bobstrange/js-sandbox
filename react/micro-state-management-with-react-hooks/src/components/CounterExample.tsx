import { useState, createContext, useContext, memo } from 'react'
import { useRenderCount } from '../hooks/useRenderCount'

const CounterContext = createContext({
  count1: 0,
  count2: 0,
})

const CounterComponents = () => {
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        <li style={{ marginTop: '1rem' }}>
          <div>Counter 1</div>
          <Counter1 />
        </li>
        <li style={{ marginTop: '1rem' }}>
          <div>Memoed Counter 1</div>
          <MemoedCounter1 />
        </li>
        <li style={{ marginTop: '1rem' }}>
          <div>Counter 2</div>
          <Counter2 />
        </li>
        <li style={{ marginTop: '1rem' }}>
          <div>Memoed Counter 2</div>
          <MemoedCounter2 />
        </li>
      </ul>
    </>
  )
}

const Counter1 = () => {
  const { count1 } = useContext(CounterContext)
  const renderCount = useRenderCount()

  return (
    <div>
      Count1: {count1} (renders: {renderCount.current})
    </div>
  )
}

const MemoedCounter1 = memo(Counter1)

const Counter2 = () => {
  const { count2 } = useContext(CounterContext)
  const renderCount = useRenderCount()

  return (
    <div>
      Count1: {count2} (renders: {renderCount.current})
    </div>
  )
}

const MemoedCounter2 = memo(Counter2)

export const CounterExample = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <h2>Counter Example</h2>
      <CounterContext.Provider value={{ count1, count2 }}>
        <button onClick={() => setCount1(count1 + 1)}>Increment Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment Count2: {count2}</button>
        <CounterComponents />
      </CounterContext.Provider>
    </>
  )
}
