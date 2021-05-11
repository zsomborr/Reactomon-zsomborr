const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
