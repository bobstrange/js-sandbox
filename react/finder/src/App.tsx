import React, { Component, Fragment } from "react"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { Users } from './components/Users'
import { User } from './types/User'

import { fetchUsers, searchUsers } from './services/githubClient'

type AppState = {
  users: User[],
  loading: boolean
}

class App extends Component<{}, AppState> {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const response = await fetchUsers()
      this.setState({ users: response.data })
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }

  searchUsers = async (searchText: string): Promise<void> => {
    console.log(searchText)
    try {
      const response = await searchUsers(searchText)
      this.setState({ users: response.data.items })
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
          <Search searchUsers={this.searchUsers} />
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
