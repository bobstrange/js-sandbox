import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProtectedRoute } from './auth/ProtectedRoute'
import { Layout } from './Layout'
import { Profile } from './views/Profile'
import { ExternalApi } from './views/ExternalApi'

const Home: React.FC = () => {
  return <h1>Home</h1>
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
