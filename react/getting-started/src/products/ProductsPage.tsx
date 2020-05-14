import React, { FC, useState, useEffect } from 'react'
import { Product, dummyProducts } from './Product'
import './ProductsPage.css'
export const ProductsPage: FC<{}> = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(dummyProducts)
  }, [])

  return (
    <div className="ProductsPage">
      <h1>TypeScriptBooks</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-list__item">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
