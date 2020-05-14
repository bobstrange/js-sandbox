import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Confirm from './components/Confirm'

interface AppState {
  confirmOpen: boolean
  confirmMessage: string
  confirmVisible: boolean
  count: number
}

export default class App extends Component<{}, AppState> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      confirmOpen: false,
      confirmMessage: 'Please hit the confirm button',
      confirmVisible: true,
      count: 30
    }
  }

  private timer = 0
  private renderCount = 0

  public componentDidMount() {
    this.timer = window.setInterval(this.handleTimerTick, 1000)
  }

  public componentWillUnmount() {
    clearInterval(this.timer)
  }

  public getSnapshotBeforeUpdate(prevProps: {}, prevState: AppState) {
    this.renderCount += 1
    console.log(
      'getSnapshotBeforeUpdate prevProps: ',
      prevProps,
      ' prevState: ',
      prevState
    )

    return this.renderCount
  }

  public componentDidUpdate(
    prevProps: {},
    prevState: AppState,
    snapshot: number
  ) {
    console.log(
      'componentDidUpdate prevProps: ',
      prevProps,
      ' prevState: ',
      prevState,
      ' snapshot: ',
      snapshot
    )
  }

  public shouldComponentUpdate(nextProps: {}, nextState: AppState): boolean {
    console.log(
      'shouldComponentUpdate nextProps: ',
      nextProps,
      ' nextState: ',
      nextState
    )

    return true
  }

  public render() {
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
        {this.state.confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>
        )}
        {this.state.count > 0 && (
          <Confirm
            open={this.state.confirmOpen}
            title="React and TypeScript"
            content="Are you sure you want to learn React and TypeScript"
            onCancelClick={this.handleCancelClick}
            onOKClick={this.handleOKClick}
          />
        )}
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
    clearInterval(this.timer)
  }

  private handleOKClick = () => {
    this.setState({
      confirmOpen: false,
      confirmMessage: 'Thank you ! Carry on reading !'
    })
    clearInterval(this.timer)
  }

  private handleTimerTick = () => {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${this.state.count} secs to go.`,
        count: this.state.count - 1
      },
      () => {
        if (this.state.count <= 0) {
          clearInterval(this.timer)
          this.setState({
            confirmMessage: 'Too late to confirm :-(',
            confirmVisible: false
          })
        }
      }
    )
  }
}
