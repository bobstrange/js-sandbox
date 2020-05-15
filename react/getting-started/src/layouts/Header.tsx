import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header: FC = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">TypeScriptBooks</h1>
      <nav>
        <Link to="/products" className="Header-link">
          Products
        </Link>
        <Link to="/admin" className="Header-link">
          Admin
        </Link>
      </nav>
    </header>
  )
}

export default Header
