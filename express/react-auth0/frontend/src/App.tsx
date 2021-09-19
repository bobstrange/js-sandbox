import React from 'react'
import { css } from '@emotion/react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './auth/ProtectedRoute'
import { NavBar } from './components/NavBar'
import { Profile } from './views/Profile'

const base = css`
  max-width: 80em;
  margin: 0 auto;
`

const Home: React.FC = () => {
  return <h1>Home</h1>
}

const ExternalApi: React.FC = () => {
  return <h1>External API</h1>
}

function App() {
  return (
    <div className="App" css={base}>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/external-api" exact component={ExternalApi} />
        </Switch>
      </div>
    </div>
  )
}

export default App
