import React, { FC, useEffect, useState } from 'react'

import styles from './Counter.module.scss'

type Props = {
  max: number
  step: number
}

const getStateFromLocalStorage = (): number => {
  const storage = localStorage.getItem('counterState')
  console.log(storage)
  if (storage) {
    const state = JSON.parse(storage)
    if (typeof state.count === 'number') {
      return state.count
    }
  }
  return 0
}

const storeStateInLocalStorage = (count: number) => {
  localStorage.setItem('counterState', JSON.stringify({ count }))
  console.log(localStorage)
}

export const Counter: FC<Props> = ({ max, step }) => {
  const [count, setCount] = useState(getStateFromLocalStorage())

  const increment = () =>
    setCount((count) => {
      if (count > max) {
        return count
      }
      return count + step
    })
  const decrement = () => setCount((count) => count - step)
  const reset = () => setCount(0)

  useEffect(() => {
    document.title = `Counter: ${count}`
  }, [count])

  useEffect(() => {
    storeStateInLocalStorage(count)
  }, [count])

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
