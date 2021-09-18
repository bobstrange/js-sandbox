import { css } from '@emotion/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const container = css`
  background-color: black;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const navItem = css`
  font-size: 1.3rem;
  color: #eee;
  margin-left: 1rem;
`

const activeStyle: React.CSSProperties = {
  fontWeight: 'bold',
}

export const NavBar: React.FC = () => {
  return (
    <div css={container}>
      <nav>
        <NavLink css={navItem} to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>

        <NavLink css={navItem} to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>

        <NavLink
          css={navItem}
          to="/external-api"
          exact
          activeStyle={activeStyle}
        >
          External API
        </NavLink>
      </nav>
    </div>
  )
}
