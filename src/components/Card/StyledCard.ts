import { styled } from "styled-components";
import theme from "../../theme";

const { shadow } = theme;

const StyledCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0.2rem 10px 1px ${shadow};
`;

export default StyledCard;
