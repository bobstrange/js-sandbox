import { createContext, ReactNode, useContext } from 'react'

const createStateContext = <Value, State>(useValue: (init?: Value) => State) => {
  const StateContext = createContext<State | null>(null)
  const StateProvider = ({
    initialValue,
    children,
  }: {
    initialValue?: Value
    children?: ReactNode
  }) => {
    return <StateContext.Provider value={useValue(initialValue)}>{children}</StateContext.Provider>
  }
  const useContextState = () => {
    const value = useContext(StateContext)
    if (value === null) {
      throw new Error('Provider Missing')
    }
    return value
  }
  return [StateProvider, useContextState] as const
}
