import React, { FC } from 'react'
import { Grudge } from '../models/grudge'
import { GrudgeItem } from './GrudgeItem'
import styles from './GrudgeList.module.scss'

type Props = {
  grudges: Grudge[]
}

export const GrudgeList: FC<Props> = ({ grudges }) => (
  <section className={styles.GrudgeList}>
    <h2>
      Grudges <span className={styles.grudgesCount}>{grudges.length}</span>
    </h2>
    {grudges.map((grudge) => (
      <GrudgeItem key={grudge.id} grudge={grudge} />
    ))}
  </section>
)
