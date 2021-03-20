import React from 'react'
import { Header } from './header'
import Helmet from 'react-helmet'

import './layout.scss'
import '../hooks/useSiteMetadata'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Layout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
