import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../layouts/Header'
import AdminPage from '../admin/AdminPage'
import ProductsPage from '../products/ProductsPage'
import ProductPage from '../products/ProductPage'
import NotFoundPage from '../NotFoundPage'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Routes
