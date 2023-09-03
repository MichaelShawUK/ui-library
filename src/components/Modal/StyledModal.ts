import { styled } from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: clip;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;

  .backdrop {
    background-color: #000f;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
  }

  .modal {
    position: relative;
    max-width: 500px;
    background-color: #fff;
    padding: 3rem;
    border-radius: 5px;
    box-shadow: 0 1px 5px #222;
    z-index: 1;

    .close-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      border-radius: 2px;

      &:hover {
        background-color: #222;
        color: white;
      }
    }
  }
`;

export default StyledModal;
