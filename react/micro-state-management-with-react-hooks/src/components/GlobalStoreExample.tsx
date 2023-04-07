import { useEffect, useState } from 'react'

type Store<T> = {
  getState: () => T
  setState: (action: T | ((prev: T) => T)) => void
  subscribe: (callback: () => void) => () => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const createStore = <T extends unknown>(initialState: T) => {
  let state = initialState
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

const store = createStore({ count: 0 })

const useStore = (store: Store<{ count: number }>) => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })
    setState(store.getState()) // useEffect の実行時には store の値が更新されている可能性があるので store.getState した値を setState する
    return unsubscribe
  }, [store])

  return [state, store.setState]
}

const Component1 = () => {
  const [state, setState] = useStore(store)
  const inc = () => {
    setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      }
    })
  }
  return (
    <div>
      {state.count} <button onClick={inc}>+1</button>
    </div>
  )
}

const Component2 = () => {
  const [state, setState] = useStore(store)
  const inc2 = () => {
    setState((prev) => {
      return {
        ...prev,
        count: prev.count + 2,
      }
    })
  }
  return (
    <div>
      {state.count} <button onClick={inc2}>+2</button>
    </div>
  )
}

export const GlobalStoreExample = () => {
  return (
    <>
      <h2>Global Store Example</h2>
      <Component1 />
      <Component2 />
    </>
  )
}
