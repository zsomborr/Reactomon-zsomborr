import React, { useContext } from "react";
import { ViewThemeContext } from "./ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer",
};
const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ViewThemeContext);
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode((oldThemeMode) => ({
          ...oldThemeMode,
          mode: oldThemeMode.mode === "dark" ? "light" : "dark",
        }));
      }}
    >
      <span title="switch theme">
        {themeMode.mode === "light" ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default ThemeToggler;
