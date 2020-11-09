import { createContext } from "react"

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

export const ThemeContext = createContext<{
  theme: typeof themes["light"]
  toggleTheme?: () => void
}>({
  theme: themes.light, // default value
  toggleTheme: () => {},
})
