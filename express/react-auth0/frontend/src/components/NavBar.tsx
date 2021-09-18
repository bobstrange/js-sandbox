import { css } from '@emotion/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const container = css`
  background-color: black;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
        <div css={mainNav}>
          <NavLink css={navLink} to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>

          <NavLink css={navLink} to="/profile" exact activeStyle={activeStyle}>
            Profile
          </NavLink>

          <NavLink
            css={navLink}
            to="/external-api"
            exact
            activeStyle={activeStyle}
          >
            External API
          </NavLink>
        </div>
        <div>
          <button css={button}>Login</button>
        </div>
      </nav>
    </div>
  )
}
