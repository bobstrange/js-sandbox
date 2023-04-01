import { useEffect, useState } from 'react'

type Store<T> = {
  getState: T
  setState: (action: T | ((prevState: T) => T)) => void
  subscribe: (callback: () => void) => () => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const createStore = <T extends unknown>(initialValue: T) => {
  let state = initialValue
  const subscribers = new Set<() => void>()

  const getState = () => state

  const setState = (nextState: T | ((prevState: T) => T)) => {
    state = typeof nextState === 'function' ? (nextState as (prevState: T) => T)(state) : nextState
    subscribers.forEach((callback) => callback())
  }

  const subscribe = (callback: () => void) => {
    subscribers.add(callback)
    return () => {
      subscribers.delete(callback)
    }
  }

  return { getState, setState, subscribe }
}

const useStore = (store) => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })
    return unsubscribe
  }, [store])

  return [state, store.setState]
}
