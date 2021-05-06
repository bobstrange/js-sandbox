import React, { FC } from 'react'
import { Grudge } from '../models/grudge'
import styles from './GrudgeItem.module.scss'

type Props = {
  grudge: Grudge
}

export const GrudgeItem: FC<Props> = ({ grudge }) => (
  <article className={styles.GrudgeItem}>
    <h3>{grudge.person}</h3>
    <p>{grudge.reason}</p>
  </article>
)
