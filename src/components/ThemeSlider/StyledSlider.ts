import { styled } from "styled-components";

const StyledSlider = styled.div<{ $lightMode: boolean }>`
  width: 36px;
  height: 18px;
  border-radius: 10px;
  background-color: ${(props) => (props.$lightMode ? "black" : "white")};
  outline: 2px solid black;
  outline-color: ${(props) => (props.$lightMode ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$lightMode ? "flex-start" : "flex-end")};
  padding: 2px;
  margin: 0 10px;

  .slider {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: ${(props) => (props.$lightMode ? "white" : "black")};
  }
`;

export default StyledSlider;
