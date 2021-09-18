import React from 'react'
import { css } from '@emotion/react'

import { NavBar } from './components/NavBar'
import { Route, Switch } from 'react-router-dom'

const base = css`
  max-width: 80em;
  margin: 0 auto;
`

const Home: React.FC = () => {
  return <h1>Home</h1>
}

const Profile: React.FC = () => {
  return <h1>Profile</h1>
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
          <Route path="/profile" exact component={Profile} />
          <Route path="/external-api" exact component={ExternalApi} />
        </Switch>
      </div>
    </div>
  )
}

export default App
