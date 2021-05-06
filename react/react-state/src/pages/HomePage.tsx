import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

import styles from './HomePage.module.scss'

export const HomePage: FC = () => {
  return (
    <Layout>
      <div className={styles.HomePage}>
        <h1 className={styles.title}>Home</h1>
        <ul className={styles.list}>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/grudges">Grudges</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
