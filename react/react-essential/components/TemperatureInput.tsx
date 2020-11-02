import React, { ChangeEventHandler, useState } from "react"
import { BoilingVerdict } from "./BoilingVerdict"

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
}

type Props = {
  scale: keyof typeof scaleNames
  temperature: string
  onTemperatureChange: (arg: string) => void
}

export const TemperatureInput: React.FC<Props> = ({
  scale,
  temperature,
  onTemperatureChange,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onTemperatureChange(e.target.value)
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input type="text" value={temperature} onChange={handleChange} />
    </fieldset>
  )
}
