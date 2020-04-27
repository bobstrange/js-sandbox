import React, { Component, Fragment } from "react"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './components/Navbar'
import { UserItem } from './components/UserItem'

class App extends Component {
  render() {
    const content =
      <Fragment>
        <Navbar />
        <UserItem />
      </Fragment>

    return (
      <div className="App">
        {content}
      </div>
    )
  }
}

export default App
