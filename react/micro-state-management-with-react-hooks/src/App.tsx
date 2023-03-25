import { useState, createContext, useContext, useRef, useEffect, memo } from 'react'

const useRenderCount = () => {
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current += 1
  })
  return renderCount
}

const ColorContext = createContext('black')

const ColorComponent = () => {
  const color = useContext(ColorContext)
  const renderCount = useRenderCount()

  return (
    <div style={{ color }}>
      Hello {color} (renders: {renderCount.current})
    </div>
  )
}

const MemoedColorComponent = memo(ColorComponent)

const DummyComponent = () => {
  const renderCount = useRenderCount()

  return <div>Dummy (renders: {renderCount.current})</div>
}

const MemoedDummyComponent = memo(DummyComponent)

const Parent = () => {
  return (
    <ul>
      <li>
        <DummyComponent />
      </li>
      <li>
        <MemoedDummyComponent />
      </li>
      <li>
        <ColorComponent />
      </li>
      <li>
        <MemoedColorComponent />
      </li>
    </ul>
  )
}

function App() {
  const [color, setColor] = useState('red')

  return (
    <ColorContext.Provider value={color}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <Parent />
    </ColorContext.Provider>
  )
}

export default App
