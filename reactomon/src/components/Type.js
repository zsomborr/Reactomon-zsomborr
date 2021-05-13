import Card from "./styleElemets/CardStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  width: "100px",
  align: "center",
  backgroundColor: "yellow",
};

const Type = ({ type }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>{type.name}</Card>
    </ThemeProvider>
  );
};

export default Type;
