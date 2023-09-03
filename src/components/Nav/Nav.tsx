import { NavLink } from "react-router-dom";

import StyledNav from "./StyledNav";

type link = {
  text: string;
  to: string;
};

interface Props {
  links: link[];
}

function Nav({ links }: Props) {
  const navLinks = links.map((link, index) => (
    <NavLink key={index} to={link.to}>
      {link.text}
    </NavLink>
  ));

  return <StyledNav>{navLinks}</StyledNav>;
}

export default Nav;
