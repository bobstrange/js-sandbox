import { css } from '@emotion/react'
import React from 'react'

const container = css`
  max-width: 36em;
  padding: 0 1em;
  margin: 3em auto 6em;
`

export const Layout: React.FC = ({ children }) => {
  return <div css={container}>{children}</div>
}
