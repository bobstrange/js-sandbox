import React, { FC, useState, useEffect } from 'react'
import { Product, dummyProducts } from './Product'
import './ProductsPage.css'
import { Link } from 'react-router-dom'

const ProductsPage: FC<{}> = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(dummyProducts)
  }, [])

  return (
    <div className="page-container">
      <h1>TypeScriptBooks</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-list__item">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
