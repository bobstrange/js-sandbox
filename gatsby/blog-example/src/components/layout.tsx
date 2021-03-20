import React from 'react'
import { Header } from './header'
import Helmet from 'react-helmet'

import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>Example blog</title>
        <meta name="description" content="site-description" />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
