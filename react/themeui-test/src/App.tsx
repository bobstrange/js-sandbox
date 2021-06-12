import React from "react";
import "./App.css";

import { ThemeProvider } from "theme-ui";
const theme = {
  colors: {
    background: "yellow",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>Theme-ui test</h1>
        <p>Please work</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
