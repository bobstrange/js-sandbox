import React, { FC, useState } from 'react'

import styles from './NewGrudge.module.scss'

export const NewGrudge: FC = () => {
  const [person, setPerson] = useState('')
  const [reason, setReason] = useState('')

  return (
    <form className={styles.NewGrudge}>
      <input
        type="text"
        className="NewGrudge-input"
        placeholder="Person"
        onChange={(e) => setPerson(e.target.value)}
        value={person}
      />
      <input
        type="text"
        className="NewGrudge-input"
        placeholder="Reason"
        onChange={(e) => setReason(e.target.value)}
        value={reason}
      />
      <input className="submit button" type="submit" />
    </form>
  )
}
