import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import Card from "./styleElemets/CardStyle";
import { ThemeProvider } from "styled-components";

const PokemonDetail = (props) => {
  const theme = {
    width: "160px",
    align: "left",
    backgroundColor: "yellow",
  };

  // let location = useLocation();
  // console.log(location);
  // console.log(props.location);

  const [details, setDetails] = useState([]);
  const { pokemonId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const detailsFromFetch = await fetchDetails();
      setDetails(detailsFromFetch);
    };

    const fetchDetails = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await res.json();

      return data;
    };

    getDetails();
  }, [pokemonId]);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <li>name: {details.name}</li>
        <li>height: {details.height}</li>
        <li>weight: {details.weight}</li>
        <li>order: {details.order}</li>
      </Card>
    </ThemeProvider>
  );
};

export default withRouter(PokemonDetail);
