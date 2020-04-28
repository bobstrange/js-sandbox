import React, { Component, Fragment } from "react"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import axios from 'axios'
import { Navbar } from './components/Navbar'
import { Users } from './components/Users'
import { User } from './types/User'

type AppState = {
  users: User[],
  loading: boolean
}

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const response = await axios.get('https://api.github.com/users')
      this.setState({ users: response.data })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, users } = this.state
    const content =
      <Fragment>
        <Navbar />
        <div className="container">
          <Users
            loading={loading}
            users={users}
          />
        </div>
      </Fragment>

    return (
      <div className="App">
        {content}
      </div>
    )
  }
}

export default App
