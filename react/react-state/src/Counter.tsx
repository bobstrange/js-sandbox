import React, { FC, useState } from 'react'

export const Counter: FC = ({ max, step }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  const reset = () => setCount(0)

  return (
    <>
      <p>{count}</p>
      <section>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </>
  )
}
