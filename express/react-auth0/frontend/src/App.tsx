import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './auth/ProtectedRoute'
import { Profile } from './views/Profile'
import { Layout } from './Layout'

const Home: React.FC = () => {
  return <h1>Home</h1>
}

const ExternalApi: React.FC = () => {
  return <h1>External API</h1>
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/external-api" exact component={ExternalApi} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
