import { useState, createContext, useContext, memo } from 'react'
import { useRenderCount } from '../hooks/useRenderCount'

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

const ColorComponents = () => {
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

export const ColorExample = () => {
  const [color, setColor] = useState('red')
  return (
    <>
      <h2>Color Example</h2>
      <ColorContext.Provider value={color}>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <ColorComponents />
      </ColorContext.Provider>
    </>
  )
}
