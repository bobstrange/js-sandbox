import React from "react"
import { TemperatureInput } from "./TemperatureInput"

export const Calculator: React.FC = () => {
  return (
    <>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </>
  )
}
