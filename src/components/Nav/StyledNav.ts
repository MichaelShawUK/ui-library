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
    animation: slide-left 0.2s ease-in-out forwards;
    transform-origin: center;
  }

  @keyframes slide-left {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

export default StyledNav;
