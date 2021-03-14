import React from 'react'
import { Link } from 'gatsby'

export default function about() {
  return (
    <>
      <h1>About Me</h1>
      <p>This is gatsby example blog.</p>
      <Link to="/">&larr; back to home</Link>
    </>
  )
}
