import React, { FC } from 'react'

import styles from './Layout.module.scss'

export const Layout: FC = ({ children }) => (
  <div className={styles.Layout}>{children}</div>
)
