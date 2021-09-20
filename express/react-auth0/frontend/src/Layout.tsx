import { css } from '@emotion/react'
import React from 'react'
import { NavBar } from './components/NavBar'

const base = css`
  max-width: 80em;
  padding: 0;
  margin: 0 auto;
`

export const Layout: React.FC = ({ children }) => {
  return (
    <div css={base}>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}
