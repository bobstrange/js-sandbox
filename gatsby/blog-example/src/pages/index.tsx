import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hi there</p>
      <Link to="/about/">About</Link>
    </Layout>
  )
}

export default IndexPage
