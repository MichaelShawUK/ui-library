import { styled } from "styled-components";
import theme from "../../theme";

const { primary, secondary } = theme;

const StyledInput = styled.div`
  display: grid;
  max-width: 300px;
  gap: 0.2rem;
  margin-bottom: 1rem;

  &:focus-within {
    label {
      color: ${secondary};
      background-color: ${primary};
    }
  }

  label {
    font-weight: bold;
    padding: 0.2rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
  }

  input:focus {
    background-color: #d8e4fb;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export default StyledInput;
