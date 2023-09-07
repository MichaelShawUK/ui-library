import { styled } from "styled-components";
import theme from "../../theme";

const { primaryGradient, altGraident, primaryColor, altColor, shadow } = theme;

interface Props {
  $alt?: boolean;
}

const StyledButton = styled.button<Props>`
  padding: 0.7rem 1.4rem;

  font-size: 0.8rem;
  font-weight: bold;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  background: ${(props) => (props.$alt ? altGraident : primaryGradient)};
  color: ${(props) => (props.$alt ? altColor : primaryColor)};

  box-shadow: 0px 2px 2px 1px ${shadow};
`;

export default StyledButton;
