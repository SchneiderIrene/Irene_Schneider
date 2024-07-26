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
interface ModalProps{
  rotate: boolean
}
export const ModalContent = styled.div<ModalProps>`
  position: relative;
  top: 50%;
  left: 50%;
  transform-origin: center;
  width: ${({rotate})=> rotate ? "44.27vw" : "31.25vw"};
  height: ${({rotate})=> rotate ? "31.25vw" : "43vw"};
  padding: 1.04vw;
  box-sizing: border-box;
  z-index: 1001;
  transform: translate(-50%, -50%);
  border: 0.15vw solid rgba(128, 0, 128, 0.6);
  background-size: 100%;
  overflow: hidden;
  
`
