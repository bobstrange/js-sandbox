import React, { FC, FormEventHandler, useState } from 'react'

import styles from './NewGrudge.module.scss'

type Props = {
  onSubmit: (arg: { person: string; reason: string }) => void
}

export const NewGrudge: FC<Props> = ({ onSubmit }) => {
  const [person, setPerson] = useState('')
  const [reason, setReason] = useState('')

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onSubmit({ person, reason })
  }

  return (
    <form className={styles.NewGrudge} onSubmit={submitHandler}>
      <input
        type="text"
        className="hoge"
        placeholder="Person"
        onChange={(e) => setPerson(e.target.value)}
        value={person}
      />
      <input
        type="text"
        className="hoge"
        placeholder="Reason"
        onChange={(e) => setReason(e.target.value)}
        value={reason}
      />
      <input className="submit button" type="submit" value="submit" />
    </form>
  )
}
