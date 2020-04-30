import React, { Fragment, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Navbar } from './components/Navbar'
import { Search, AlertType, SearchProps } from './components/users/Search'
import { Users } from './components/users/Users'
import { User as UserComponent } from './components/users/User'

import { Alert } from './components/Alert'

import { User } from './types/User'
import { Repo } from './types/Repo'

import { About } from './pages/About'

import { searchUsers as searchUsersData, fetchUser, fetchRepos } from './services/githubClient'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User|null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ message: string, type: AlertType } | null>(null)

  const searchUsers: SearchProps['searchUsers'] = async (searchText) => {
    try {
      setLoading(true)
      const response = await searchUsersData(searchText)
      setUsers(response.data.items)
    } catch (error) {
      console.error('searchUsers failed: ', error)
    } finally {
      setLoading(false)
    }
  }

  const getUser = async (username: string) => {
    try {
      setLoading(true)
      const response = await fetchUser(username)
      setUser(response.data)
    } catch (error) {
      console.error('fetchUser failed: ', error)
    } finally {
      setLoading(false)
    }
  }

  const clearUsers: SearchProps['clearUsers'] = () => {
    setUsers([])
    setLoading(false)
  }

  const showAlert: SearchProps['setAlert'] = (message, alertType) => {
    setAlert({
      message,
      type: alertType,
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  const getRepos = async (username: string) => {
    try {
      setLoading(true)
      const response = await fetchRepos(username)
      setRepos(response.data)
    } catch (error) {
      console.error('fetchRepos failed: ', error)
    } finally {
      setLoading(false)
    }
  }

  const content = (
    <Fragment>
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  setAlert={showAlert}
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
                getUser={getUser}
                getRepos={getRepos}
                user={user}
                repos={repos}
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

export default App
