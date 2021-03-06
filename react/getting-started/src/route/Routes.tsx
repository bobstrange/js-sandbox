import React, { FC, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../layouts/Header'
import AdminPage from '../admin/AdminPage'
import ProductsPage from '../products/ProductsPage'
import ProductPage from '../products/ProductPage'
import NotFoundPage from '../common/NotFoundPage'
import LoginPage from '../common/LoginPage'

const Routes: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/admin">
            {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
