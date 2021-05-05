import React, { FC } from 'react'
import './App.scss'
import { CounterPage } from './pages/CounterPage'

const App: FC = () => {
  return (
    <div className="App">
      <CounterPage />
    </div>
  )
}

export default App
