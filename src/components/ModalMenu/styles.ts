import styled from "@emotion/styled"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  top: 20%;
  left: 75%;
  transform-origin: center;
 width: 80%;
 height: 100%;
  padding: 1.04vw;
  box-sizing: border-box;
  z-index: 1001;
  transform: translate(-50%, -50%);
  /* border: 0.15vw solid rgba(128, 0, 128, 0.6); */
  background-color: #1e1e1e;
  /* background-size: 100%;
  overflow: hidden; */
  
`
