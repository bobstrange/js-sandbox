import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'
import { HomePage } from './pages/HomePage'
import { CounterPage } from './pages/CounterPage'
import { GrudgesPage } from './pages/GrudgesPage'

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/grudges">
            <GrudgesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
