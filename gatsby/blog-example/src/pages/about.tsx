import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About: React.FC = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is gatsby example blog.</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  )
}

export default About
