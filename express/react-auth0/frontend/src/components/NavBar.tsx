import { css } from '@emotion/react'
import React from 'react'

import { MainNav } from '../components/MainNav'

const container = css`
  background-color: black;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const button = css`
  display: inline-block;
  margin-right: 1rem;
  border-radius: 0.4rem;
  font-weight: bold;
  color: #333;
  font-size: 1.2rem;
  background-color: #eee;
  padding: 0.2em 1em;
`

export const NavBar: React.FC = () => {
  return (
    <div>
      <nav css={container}>
        <MainNav />
        <div>
          <button css={button}>Login</button>
        </div>
      </nav>
    </div>
  )
}
