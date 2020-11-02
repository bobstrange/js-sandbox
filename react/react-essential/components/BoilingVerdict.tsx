import React from "react"

type Props = {
  temperature: number
}

export const BoilingVerdict: React.FC<Props> = ({ temperature }) => {
  return temperature >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water would not boil.</p>
  )
}
