import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../layouts/Header'
import AdminPage from '../admin/AdminPage'
import ProductsPage from '../products/ProductsPage'
import ProductPage from '../products/ProductPage'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/admin" component={AdminPage} />
      </div>
    </BrowserRouter>
  )
}

export default Routes
