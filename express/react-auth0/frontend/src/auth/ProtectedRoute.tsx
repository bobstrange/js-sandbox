import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

type Props = RouteProps & {
  component: React.FC
}

export const ProtectedRoute: React.FC<Props> = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        // eslint-disable-next-line react/display-name
        onRedirecting: () => <p>Loading</p>,
      })}
      {...args}
    />
  )
}
