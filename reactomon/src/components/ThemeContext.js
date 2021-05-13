import { useState, createContext } from "react";

export const ViewThemeContext = createContext();

export const ViewThemeProvider = (props) => {
  const [theme, setTheme] = useState({ mode: "dark" });
  return (
    <ViewThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ViewThemeContext.Provider>
  );
};
