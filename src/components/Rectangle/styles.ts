import styled from "@emotion/styled";
import { Rectangle } from "assets";

export const RectangleComponent = styled.img`
  position: absolute;
  left: -15vw;
  top: -20vw;
  z-index: 1;
  width: 90vw;
  height: 80vw;
`

RectangleComponent.defaultProps = { src: Rectangle }