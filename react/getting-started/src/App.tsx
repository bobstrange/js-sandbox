import React from 'react'
import logo from './logo.svg'
import './App.css'

import Confirm from './components/Confirm'

const handleCancelClick = () => {
  console.log('Cancel Clicked')
}
const handleOKClick = () => {
  console.log('OK Clicked')
}

const App = () => (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <Confirm
      title="React and TypeScript"
      content="Are you sure you want to learn React and TypeScript"
      onCancelClick={handleCancelClick}
      onOKClick={handleOKClick}
    />
  </div>
)

export default App
