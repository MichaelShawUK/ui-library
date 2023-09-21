import { styled } from "styled-components";

import theme from "../../theme";

const StyledThemeSlider = styled.div<{ $lightMode: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.$lightMode ? theme.primaryGradient : "white"};
  padding: 10px;
`;

export default StyledThemeSlider;
