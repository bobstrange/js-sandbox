import { css } from '@emotion/react'
import React from 'react'

import { NavLink } from 'react-router-dom'

const mainNav = css`
  justify-content: flex-start;
`
const navLink = css`
  font-size: 1.3rem;
  color: #eee;
  margin-left: 1rem;
`
const activeStyle: React.CSSProperties = {
  fontWeight: 'bold',
}

export const MainNav: React.FC = () => {
  return (
    <div css={mainNav}>
      <NavLink css={navLink} to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>

      <NavLink css={navLink} to="/profile" exact activeStyle={activeStyle}>
        Profile
      </NavLink>

      <NavLink css={navLink} to="/external-api" exact activeStyle={activeStyle}>
        External API
      </NavLink>
    </div>
  )
}
