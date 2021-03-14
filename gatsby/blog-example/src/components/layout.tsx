import React from 'react'
import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  )
}

export default Layout
