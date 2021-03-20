import { Link } from 'gatsby'
import React from 'react'

import './header.scss'

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="nav-link">
        Example Website
      </Link>
      <nav>
        <Link to="/" activeClassName="current-page" className="nav-link">
          Home
        </Link>
        <Link to="/about/" activeClassName="current-page" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  )
}
