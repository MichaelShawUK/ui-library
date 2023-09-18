import { styled } from "styled-components";

import theme from "../../theme";

const StyledDropDownMenu = styled.div`
  width: max-content;
  font-weight: bold;

  .menu-btn {
    border-radius: 4px;
    padding: 1rem;
    background: ${theme.primaryGradient};
    color: ${theme.primaryColor};
    display: flex;
    gap: 1rem;
    cursor: pointer;
  }

  .list {
    position: absolute;
    margin: 2px;
    background: ${theme.primaryGradient};
    color: ${theme.primaryColor};
    border-radius: 4px;
    padding: 0 1rem;
    list-style-type: none;
    font-weight: normal;

    li {
      padding: 1rem;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }

    li:not(:first-child) {
      border-top: 1px solid white;
    }
  }
`;

export default StyledDropDownMenu;
