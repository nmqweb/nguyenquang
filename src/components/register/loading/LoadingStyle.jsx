import styled, { css } from "styled-components";

export const loadingContainer = styled.div`
  display: ${(props) => props.display};

  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
`;
export const loadingProgress = styled.div`
  display: ${(props) => props.display};

  position: relative;
  height: 30px;
  width: 1110%;
  border: 10px solid blueviolet;
  border-radius: 15px;
`;
export const colorLoading = styled.div`
  position: absolute;
  background-color: blue;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: progres 4s infinite linear;

  @keyframes progres {
    0% {
      width: 0%;
    }
    25% {
      width: 50%;
    }
    50% {
      width: 75%;
    }
    75% {
      width: 85%;
    }
    100% {
      width: 100%;
    }
  }
`;
