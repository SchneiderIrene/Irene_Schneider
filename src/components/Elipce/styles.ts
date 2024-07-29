import styled from "@emotion/styled";
import { Elipce } from "assets";



export const ContainerEclipse = styled.div`
  position: absolute;
  right:-14vw;
  bottom: -15vw;
  z-index: 1;
  width: 50vw;
  height: 50vw;
  z-index: 1;
`


export const ElipceComponent = styled.img`
  width: 100%;
  height: 40vh;
  `
  ElipceComponent.defaultProps = { src: Elipce }