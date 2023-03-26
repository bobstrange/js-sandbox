import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'
type Action = { type: 'INC1' } | { type: 'INC2' }

const Count1Context = createContext<number>(0)
const Count2Context = createContext<number>(0)
// eslint-disable-next-line @typescript-eslint/no-empty-function
const DispatchContext = createContext<Dispatch<Action>>(() => {})

const Counter1 = () => {
  const count1 = useContext(Count1Context)
  const dispatch = useContext(DispatchContext)

  return (
    <div>
      Count1: {count1}
      <button onClick={() => dispatch({ type: 'INC1' })}>+1</button>
    </div>
  )
}

const Counter2 = () => {
  const count2 = useContext(Count2Context)
  const dispatch = useContext(DispatchContext)

  return (
    <div>
      Count1: {count2}
      <button onClick={() => dispatch({ type: 'INC2' })}>+1</button>
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

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    (prevState: { count1: number; count2: number }, action: Action) => {
      switch (action.type) {
        case 'INC1':
          return { ...prevState, count1: prevState.count1 + 1 }
        case 'INC2':
          return { ...prevState, count2: prevState.count2 + 1 }
        default:
          throw new Error('Invalid action')
      }
    },
    { count1: 0, count2: 0 }
  )

  return (
    <DispatchContext.Provider value={dispatch}>
      <Count1Context.Provider value={state.count1}>
        <Count2Context.Provider value={state.count2}>{children}</Count2Context.Provider>
      </Count1Context.Provider>
    </DispatchContext.Provider>
  )
}

export const GlobalContextWithMultipleContextsExample = () => {
  return (
    <>
      <h2>Global Context With Multiple Contexts Example</h2>
      <Provider>
        <Parent />
      </Provider>
    </>
  )
}
