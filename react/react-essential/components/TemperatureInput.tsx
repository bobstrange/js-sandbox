import React, { ChangeEventHandler } from "react"

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
}

export type TemperatureInputProps = {
  scale: keyof typeof scaleNames
  temperature: string
  onTemperatureChange: (arg: string) => void
}

export const TemperatureInput: React.FC<TemperatureInputProps> = ({
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
