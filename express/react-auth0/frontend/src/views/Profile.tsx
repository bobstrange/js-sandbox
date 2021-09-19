import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { css } from '@emotion/react'

const container = css`
  padding: 2em;
`

const vioContainer = css`
  display: flex;
  align-items: center;
`

const profileImage = css`
  display: inline-block;
  width: 10em;
  height: 10em;
`

const info = css`
  margin-left: 2em;
`

const emailStyle = css`
  color: #999;
  font-weight: bold;
`

const codeContainer = css`
  margin-top: 5em;
`

const preStyle = css`
  background-color: black;
`

const codeStyle = css`
  color: white;
`

export const Profile: React.FC = () => {
  const { user } = useAuth0()

  if (!user) {
    return null
  }

  const { picture, name, email } = user
  return (
    <div css={container}>
      <div css={vioContainer}>
        <img src={picture} alt="Profile" css={profileImage} />
        <div css={info}>
          <h2>{name}</h2>
          <p css={emailStyle}>{email}</p>
        </div>
      </div>
      <div css={codeContainer}>
        <pre css={preStyle}>
          <code css={codeStyle}>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
    </div>
  )
}
