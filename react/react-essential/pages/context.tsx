import React, { useState } from "react"
import Layout from "../components/Layout"
import { ThemedButton } from "../components/ThemedButton"
import { ThemeTogglerButton } from "../components/ThemeTogglerButton"
import { ThemeContext, themes } from "../contexts/ThemeContext"

type ToolbarProps = {
  changeTheme: () => void
}

const Toolbar: React.FC<ToolbarProps> = ({ changeTheme }) => {
  return (
    <div
      style={{
        backgroundColor: "cyan",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 10,
      }}
    >
      <ThemedButton onClick={changeTheme}>Change Theme</ThemedButton>
    </div>
  )
}

const ContextPage: React.FC = () => {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === themes.dark ? themes.light : themes.dark
    })
  }

  return (
    <Layout title="Use context">
      <ThemeContext.Provider value={{ theme }}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <section>
        <ThemedButton>This won't be changed</ThemedButton>
      </section>
      <section>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeTogglerButton>This can change theme</ThemeTogglerButton>
        </ThemeContext.Provider>
      </section>
    </Layout>
  )
}

export default ContextPage
