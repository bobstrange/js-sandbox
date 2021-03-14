import React from 'react'
import { Link } from 'gatsby'

const About: React.FC = () => {
  return (
    <>
      <h1>About Me</h1>
      <p>This is gatsby example blog.</p>
      <Link to="/">&larr; back to home</Link>
    </>
  )
}

export default About
