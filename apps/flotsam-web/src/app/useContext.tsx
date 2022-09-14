import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

type FormContext = {
  firstName?: string;
  lastName?: string;
}

const ThemeContext = React.createContext<FormContext>({});

function App() {
  return (
    <ThemeContext.Provider value={{}}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.firstName, color: theme.lastName }}>
      I am styled by theme context!
    </button>
  );
}
