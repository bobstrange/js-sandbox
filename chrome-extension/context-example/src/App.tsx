import React from 'react'
import './App.css'

import { css } from '@emotion/react'

const style = css`
  font-size: 0.75rem;
  color: blue;
`

function App() {
  return (
    <div className="App">
      <h1 css={style}>Hello, world!</h1>
    </div>
  )
}

export default App
