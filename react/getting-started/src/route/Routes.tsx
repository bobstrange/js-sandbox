import React, { FC } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../layouts/Header'
import AdminPage from '../admin/AdminPage'
import ProductsPage from '../products/ProductsPage'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/products" component={ProductsPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </BrowserRouter>
  )
}

export default Routes
