import styled, { keyframes } from "styled-components/macro";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.img`
  background-color: transparent;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  border: 0.3rem solid rgba(211, 29, 169, 0.6);
  border-radius: 50%;
  border-top-color: orange;
  animation: ${spinAnimation} 1s ease-in-out infinite;
  -webkit-animation: ${spinAnimation} 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerOverlay, SpinnerContainer };
