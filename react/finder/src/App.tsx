import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './components/Navbar'
import { Search, AlertType, SearchProps } from './components/Search'
import { Users } from './components/Users'
import { Alert } from './components/Alert'
import { User } from './types/User'

import { searchUsers } from './services/githubClient'

type AppState = {
  users: User[],
  loading: boolean,
  alert: { message: string, type: AlertType } | null
}

class App extends Component<{}, AppState> {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUsers: SearchProps['searchUsers'] = async (searchText) => {
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
    const { loading, users } = this.state
    const content =
      <Fragment>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  setAlert={this.setAlert}
                  showClear={users.length > 0}
                />
                <Users
                  loading={loading}
                  users={users}
                />
              </Fragment>
            )}></Route>
          </Switch>
       </div>
      </Fragment>

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
