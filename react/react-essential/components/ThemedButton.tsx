import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemedButton: React.FC = (props) => {
  const theme = useContext(ThemeContext)
  return <button {...props} style={{ backgroundColor: theme.background }} />
}
