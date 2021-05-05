import React, { FC, useState } from 'react'

import styles from './Counter.module.scss'

export const Counter: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  const reset = () => setCount(0)

  return (
    <div className={styles.Counter}>
      <p className={styles.count}>{count}</p>
      <section className={styles.controls}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  )
}
