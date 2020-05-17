import React, { FC, useState, useEffect } from 'react'
import { Product, dummyProducts } from './Product'
import './ProductsPage.css'
import { Link, RouteComponentProps } from 'react-router-dom'
import 'url-search-params-polyfill'

const ProductsPage: FC<RouteComponentProps<{}>> = (props) => {
  const [products, setProducts] = useState<Product[]>([])

  const searchParams = new URLSearchParams(props.location.search)
  const search = searchParams.get('search')

  useEffect(() => {
    setProducts(dummyProducts)
  }, [])

  const productsToRender = search
    ? products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    : products

  return (
    <div className="page-container">
      <h1>TypeScriptBooks</h1>
      <ul className="product-list">
        {productsToRender.length
          ? productsToRender.map((product) => (
              <li key={product.id} className="product-list__item">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export default ProductsPage
