import React, { FC, useState } from 'react'

import styles from './Counter.module.scss'

type Props = {
  max: number
  step: number
}

export const Counter: FC<Props> = ({ max, step }) => {
  const [count, setCount] = useState(0)

  const increment = () =>
    setCount((count) => {
      if (count > max) {
        return count
      }
      return count + step
    })
  const decrement = () => setCount((count) => count - step)
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
