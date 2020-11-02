import React, { useState } from "react"
import {
  toCelsius,
  toFahrenheit,
  tryConvert,
} from "../utils/temperatureCalclator"
import { TemperatureInput, TemperatureInputProps } from "./TemperatureInput"
export const Calculator: React.FC = () => {
  const [temperature, setTemperature] = useState("")
  const [scale, setScale] = useState<TemperatureInputProps["scale"]>("c")

  const handleCelsiusChange: TemperatureInputProps["onTemperatureChange"] = (
    temperature
  ) => {
    setScale("c")
    setTemperature(temperature)
  }

  const handleFahrenheitChange: TemperatureInputProps["onTemperatureChange"] = (
    temperature
  ) => {
    setScale("f")
    setTemperature(temperature)
  }

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </>
  )
}
