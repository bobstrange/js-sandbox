import React, { Component, Fragment } from "react"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './Navbar'

class App extends Component {
  render() {
    const name = 'John Doe'
    const loading = false

    const content = loading ?
      <h4>Loading...</h4> :
      <Fragment>
        <Navbar />
        <h1>Hello {name}</h1>
      </Fragment>


    return (
      <Fragment className="App">
        {content}
      </Fragment>
    )
  }
}

export default App
