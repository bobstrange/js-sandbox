import React, { FC, useEffect, useState } from 'react'

import styles from './Counter.module.scss'

type Props = {
  max: number
  step: number
}

const useLocalStorage = <T,>(
  initialState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const get = (): T => {
    const storage = localStorage.getItem(key)
    if (storage) {
      const state = JSON.parse(storage)
      if (state.value) {
        return state.value as T
      }
    }
    return initialState
  }

  const [value, setValue] = useState(get())

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }))
  }, [value])

  return [value, setValue]
}

export const Counter: FC<Props> = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'counter')

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
