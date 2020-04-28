import React, { FC } from 'react'

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
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Finder',
  icon: 'fab fa-github'
}

export default Navbar
