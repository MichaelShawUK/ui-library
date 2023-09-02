import { styled } from "styled-components";
import theme from "../../theme";

const { primary, secondary, shadow } = theme;

interface Props {
  $alt?: boolean;
}

const StyledButton = styled.button<Props>`
  padding: 0.7rem 1.4rem;

  font-size: 1rem;
  font-weight: bold;

  border: 2px solid ${primary};
  border-radius: 4px;

  cursor: pointer;

  background-color: ${(props) => (props.$alt ? secondary : primary)};
  color: ${(props) => (props.$alt ? primary : secondary)};

  box-shadow: 0px 0.2rem 2px 1px ${shadow};
`;

export default StyledButton;
