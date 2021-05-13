import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler";

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: yellow;
`;

export const Li = styled.li`
  float: left;
`;

export const NavLink = styled(Link)`
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: white;
  }
`;

export const ToggleButton = styled(ThemeToggler)`
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: white;
  }
`;
