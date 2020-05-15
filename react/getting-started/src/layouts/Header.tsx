import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header: FC = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">TypeScriptBooks</h1>
      <nav>
        <NavLink
          to="/products"
          className="Header-link"
          activeClassName="Header-link-active"
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          className="Header-link"
          activeClassName="Header-link-active"
        >
          Admin
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
