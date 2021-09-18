import { css } from '@emotion/react'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

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

export const AuthNav: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const loginHandler = () => loginWithRedirect()

  return (
    <div>
      {isAuthenticated ? (
        <button css={button}>Logout</button>
      ) : (
        <button css={button} onClick={loginHandler}>
          Login
        </button>
      )}
    </div>
  )
}
