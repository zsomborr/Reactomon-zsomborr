import { Ul, Li, NavLink, ToggleButton } from "./styleElemets/NavbarStyle";

const Navbar = () => {
  return (
    <Ul>
      <Li>
        <NavLink to="/pokemons">Pokemons</NavLink>
      </Li>
      <Li>
        <NavLink to="/types">Types</NavLink>
      </Li>
      <Li>
        <ToggleButton />
      </Li>
    </Ul>
  );
};

export default Navbar;
