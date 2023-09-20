import { motion } from "framer-motion";
import { styled } from "styled-components";
import theme from "../../theme";

const StyledInteractiveCard = styled(motion.div)`
  background: ${theme.primaryGradient};
  color: ${theme.primaryColor};
  font-size: 2rem;
  border-radius: 10px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 1rem;

  .card {
    background-color: white;
    margin: 2rem;
    color: black;
    min-height: 200px;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;
    max-width: 600px;
    box-shadow: 1px 2px 2px #0003;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    border-radius: 0;
    margin: 0;

    .card {
      margin-inline: 16px;
      margin-bottom: 0;
    }
  }
`;

export default StyledInteractiveCard;
