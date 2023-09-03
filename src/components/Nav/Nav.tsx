import { NavLink } from "react-router-dom";

import StyledNav from "./StyledNav";

function Nav() {
  return (
    <StyledNav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/buttons">BUTTONS</NavLink>
      <NavLink to="/inputs">INPUTS</NavLink>
      <NavLink to="/modal">MODAL</NavLink>
    </StyledNav>
  );
}

export default Nav;
