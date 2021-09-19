import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider, AppState } from '@auth0/auth0-react'

export const Auth0ProviderWithHistory: FC = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

  const history = useHistory()

  const onRedirectCallback = (appState: AppState) => {
    history.replace(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
