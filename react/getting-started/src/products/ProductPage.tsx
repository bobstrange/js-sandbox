import React, { Component, Fragment } from 'react'
import { RouteComponentProps, Prompt } from 'react-router-dom'
import { Product, dummyProducts } from './Product'

type ProductProps = RouteComponentProps<{ id: string }>

interface ProductState {
  product?: Product
  added: boolean
}

class ProductPage extends Component<ProductProps, ProductState> {
  public constructor(props: ProductProps) {
    super(props)
    this.state = {
      added: false
    }
  }

  public componentDidMount() {
    if (this.props.match.params.id) {
      const id = parseInt(this.props.match.params.id, 10)
      const product = dummyProducts.find((p) => p.id === id)
      this.setState({ product })
    }
  }

  public render() {
    const { product } = this.state

    const navAwayMessage =
      'Are you sure you leave without buying this product ?'

    return (
      <div className="page-container">
        <Prompt when={!this.state.added} message={navAwayMessage} />
        {product ? (
          <Fragment>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="product-price">
              {new Intl.NumberFormat('en-US', {
                currency: 'USD',
                style: 'currency'
              }).format(product.price)}
            </p>
            {!this.state.added && (
              <button onClick={this.handleAddClick}>Add to cart</button>
            )}
          </Fragment>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    )
  }

  private handleAddClick = () => {
    this.setState({ added: true })
  }
}

export default ProductPage
