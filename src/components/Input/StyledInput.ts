import { styled } from "styled-components";
import theme from "../../theme";

const { primaryGradient } = theme;

const StyledInput = styled.div`
  display: grid;
  max-width: 300px;
  gap: 0.2rem;
  margin-bottom: 1rem;

  &:focus-within {
    label {
      color: white;
      background: ${primaryGradient};
    }
  }

  label {
    font-weight: bold;
    padding: 0.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
  }

  input:focus {
    background-color: #d8e4fb66;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export default StyledInput;
