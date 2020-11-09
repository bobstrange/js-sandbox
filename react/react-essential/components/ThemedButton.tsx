import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

type Props = {
  onClick?: () => void
}

export const ThemedButton: React.FC<Props> = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background, height: 40 }}
    />
  )
}
