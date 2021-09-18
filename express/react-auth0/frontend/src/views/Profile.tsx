import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { css } from '@emotion/react'

const profileImage = css``

export const Profile: React.FC = () => {
  const { user } = useAuth0()

  if (!user) {
    return null
  }

  const { picture, name, email } = user
  return (
    <div>
      <div>
        <img src={picture} alt="Profile" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  )
}
