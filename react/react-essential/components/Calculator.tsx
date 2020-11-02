import React, { ChangeEventHandler, useState } from "react"
import { BoilingVerdict } from "./BoilingVerdict"
export const Calculator: React.FC = () => {
  const [temperature, setTemperature] = useState("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTemperature(e.target.value)
  }

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
      <BoilingVerdict temperature={parseFloat(temperature)} />
    </fieldset>
  )
}
