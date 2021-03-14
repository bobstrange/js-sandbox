import React from 'react'
import { Link } from 'gatsby'

const IndexPage: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Hi there</p>
      <Link to="/about/">About</Link>
    </>
  )
}

export default IndexPage
