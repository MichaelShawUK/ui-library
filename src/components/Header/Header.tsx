import Nav from "../Nav/Nav";
import StyledHeader from "./StyledHeader";
import ThemeSlider from "../ThemeSlider/ThemeSlider";

const links = [
  {
    text: "HOME",
    to: "/",
  },
  {
    text: "BUTTONS",
    to: "/buttons",
  },
  {
    text: "INPUTS",
    to: "/inputs",
  },
  {
    text: "MODAL",
    to: "/modal",
  },
  {
    text: "DROP DOWN",
    to: "/dropdown",
  },
];

function Header() {
  return (
    <StyledHeader>
      <Nav links={links} />
      <ThemeSlider />
    </StyledHeader>
  );
}

export default Header;
