import "./App.css";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons();
      setPokemons(pokemonsFromServer);
    };

    getPokemons();
  }, []);

  // Fetch pokemons
  const fetchPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    return data.results;
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <PokemonList pokemons={pokemons} />
        <Route path="/types" component={TypeList} />
        {<PokemonDetail />}
      </div>
    </Router>
  );
};

export default App;
