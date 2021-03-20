import React from 'react'
import { Header } from './header'
import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
