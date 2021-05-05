import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './HomePage.module.scss'

export const HomePage: FC = () => {
  return (
    <div className={styles.HomePage}>
      <h1 className={styles.title}>Home</h1>
      <ul className={styles.list}>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  )
}
