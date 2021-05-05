import React, { useState } from 'react'
import { Counter } from '../components/Counter'

import styles from './CounterPage.module.scss'

export const CounterPage = () => {
  const [max, setMax] = useState(10)
  const [step, setStep] = useState(1)

  return (
    <div className={styles.CounterPage}>
      <div className={styles.control}>
        <div className={styles.controlItem}>
          <label className={styles.label}>Max</label>
          <input
            className={styles.input}
            value={max}
            type="number"
            name="max"
            onChange={(e) => setMax(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className={styles.controlItem}>
          <label className={styles.label}>step</label>
          <input
            className={styles.input}
            value={step}
            type="number"
            name="step"
            onChange={(e) => setStep(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>
      <Counter max={max} step={step} />
    </div>
  )
}
