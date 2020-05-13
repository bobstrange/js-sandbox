import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Confirm from './components/Confirm'

interface AppState {
  confirmOpen: boolean
  confirmMessage: string
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      confirmOpen: true,
      confirmMessage: 'Please hit the confirm button'
    }
  }

  render() {
    return (
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
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm
          open={this.state.confirmOpen}
          title="React and TypeScript"
          content="Are you sure you want to learn React and TypeScript"
          onCancelClick={this.handleCancelClick}
          onOKClick={this.handleOKClick}
        />
      </div>
    )
  }

  private handleConfirmClick = () => {
    this.setState({
      confirmOpen: true
    })
  }

  private handleCancelClick = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: ':-('
    })
  }

  private handleOKClick = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: 'Thank you ! Carry on reading !'
    })
  }
}
