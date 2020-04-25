import React, { Component, Fragment } from "react"
import "./App.css"

class App extends Component {
  render() {
    const name = 'John Doe'
    const loading = false

    const content = loading ?
      <h4>Loading...</h4> :
      <h1>Hello {name}</h1>

    return (
      <Fragment className="App">
        {content}
      </Fragment>
    )
  }
}

export default App
