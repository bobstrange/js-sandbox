import React from 'react'

interface Props {
  name: string
  animal: string
  breed: string
}

export const Pet: React.FC<Props> = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  )
}
