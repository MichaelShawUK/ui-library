import { styled } from "styled-components";

const StyledNav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  a {
    padding: 1rem;
    text-decoration: none;
    color: inherit;
  }

  .active {
    position: relative;
  }

  .active::before {
    content: "";
    background-color: black;
    position: absolute;
    bottom: 10px;
    left: 0;
    height: 4px;
    width: 100%;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
  }
`;

export default StyledNav;
