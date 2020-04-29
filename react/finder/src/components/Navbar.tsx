import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export type NavbarProps = {
  icon?: string,
  title?: string
}

export const Navbar: FC<NavbarProps> = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Finder',
  icon: 'fab fa-github'
}

export default Navbar
