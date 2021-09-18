import { css } from '@emotion/react'
import React from 'react'

import { MainNav } from '../components/MainNav'
import { AuthNav } from '../components/AuthNav'

const container = css`
  background-color: black;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBar: React.FC = () => {
  return (
    <div>
      <nav css={container}>
        <MainNav />
        <AuthNav />
      </nav>
    </div>
  )
}
