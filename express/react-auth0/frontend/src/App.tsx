import React from 'react'
import { css } from '@emotion/react'

import { NavBar } from './components/NavBar'

const base = css`
  max-width: 80em;
  margin: 0 auto;
`

function App() {
  return (
    <div className="App" css={base}>
      <NavBar />
    </div>
  )
}

export default App
