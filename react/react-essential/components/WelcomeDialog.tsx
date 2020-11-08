import React from "react"
import { FancyBorder } from "./FancyBorder"

export const WelcomeDialog: React.FC = () => {
  return (
    <>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting.</p>
      </FancyBorder>
    </>
  )
}
