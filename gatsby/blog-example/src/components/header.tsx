import { Link } from 'gatsby'
import React from 'react'

import './header.scss'

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </header>
  )
}
