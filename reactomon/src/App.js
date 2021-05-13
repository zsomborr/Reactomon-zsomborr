import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { ViewThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ViewThemeProvider>
          <Navbar />
          <Route path="/types" component={TypeList} />
          <Route path="/pokemons" component={PokemonList} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
        </ViewThemeProvider>
      </div>
    </Router>
  );
};

export default App;
