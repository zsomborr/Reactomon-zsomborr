import { Link } from "react-router-dom";
import Card from "./styleElemets/CardStyle";
import { ThemeProvider } from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { ViewThemeContext } from "./ThemeContext";

const Pokemon = ({ pokemon, id }) => {
  const [theme, setTheme] = useState({
    width: "100px",
    align: "center",
    backgroundColor: "yellow",
  });

  const [themeMode, setThemeMode] = useContext(ViewThemeContext);

  useEffect(() => {
    if (themeMode.mode === "dark") {
      setTheme((oldTheme) => ({
        ...oldTheme,
        backgroundColor: "gray",
      }));
    } else {
      setTheme((oldTheme) => ({
        ...oldTheme,
        backgroundColor: "yellow",
      }));
    }
  }, [themeMode.mode]);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        {pokemon.name.slice(0, 1).toUpperCase() +
          pokemon.name.slice(1, pokemon.name.length)}
        <br />
        <Link to={{ pathname: `/pokemon/${id}`, state: { url: pokemon.url } }}>
          Detail
        </Link>
        <br />
      </Card>
    </ThemeProvider>
  );
};

export default Pokemon;
