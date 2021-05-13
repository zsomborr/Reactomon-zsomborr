import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromApi = await fetchPokemons();
      setPokemons(pokemonsFromApi);
    };

    getPokemons();
  }, []);

  const fetchPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    return data.results;
  };

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index + 1} pokemon={pokemon} id={index + 1} />
      ))}
    </div>
  );
};

export default PokemonList;
