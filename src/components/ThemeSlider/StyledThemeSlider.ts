import { styled } from "styled-components";

const StyledThemeSlider = styled.div<{ $lightMode: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.$lightMode ? "black" : "white")};
  padding: 10px;
`;

export default StyledThemeSlider;
