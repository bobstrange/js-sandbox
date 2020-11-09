import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeTogglerButton: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        height: 40,
      }}
    >
      {children}
    </button>
  )
}
