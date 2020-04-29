import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './components/Navbar'
import { Search, AlertType, SearchProps } from './components/users/Search'
import { Users } from './components/users/Users'
import { User as UserComponent } from './components/users/User'
import { Alert } from './components/Alert'
import { User } from './types/User'

import { About } from './pages/About'

import { searchUsers, fetchUser } from './services/githubClient'

type AppState = {
  users: User[],
  user: User | null,
  loading: boolean,
  alert: { message: string, type: AlertType } | null
}

class App extends Component<{}, AppState> {
  state = {
    users: [],
    user: null,
    loading: false,
    alert: null
  }

  searchUsers: SearchProps['searchUsers'] = async (searchText) => {
    try {
      const response = await searchUsers(searchText)
      this.setState({ users: response.data.items })
    } catch (error) {
      console.error('searchUsers failed: ', error)
    } finally {
      this.setState({ loading: false })
    }
  }

  getUser = async (username: string) => {
    try {
      const response = await fetchUser(username)
      this.setState({ user: response.data })
    } catch (error) {
      console.error('fetchUser failed: ', error)
    } finally {
      this.setState({ loading: false })
    }
  }

  clearUsers: SearchProps['clearUsers'] = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert: SearchProps['setAlert'] = (message, alertType) => {
    this.setState({
      alert: {
        message,
        type: alertType
      }
    })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000)
  }

  render() {
    const { loading, users, user } = this.state
    const content = (
      <Fragment>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                    showClear={users.length > 0}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UserComponent
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Fragment>
    )

    return (
      <Router>
        <div className="App">
          {content}
        </div>
      </Router>
    )
  }
}

export default App
