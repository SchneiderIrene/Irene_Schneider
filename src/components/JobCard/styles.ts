import styled from "@emotion/styled"
import { GoDotFill } from "react-icons/go";

export const JobCardWrapper = styled.div`
position: relative;
gap: 1vw;
display: flex;
flex-direction: column;
flex: 1;
`

export const CardComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.42vw;
  border: 0.05vw solid rgba(252, 241, 228, 0.7);
  position: relative;
  z-index: 3;
  gap: 1.66vw;
  padding: 3vw;
  line-height: 1.9em;
`

export const TitleH2Card = styled.h2`
  font-size: 1.6vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 1rem;
  }
`
export const TitleH3Card = styled.h2`
  font-size: 1.3vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 0.9rem;
  }
`

export const TitleH4Card = styled.h2`
  font-size: 1.1vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 0.8rem;
  }
`

export const TitleDesc = styled.h2`
  font-size: 1.3vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 0.7rem;
  }
`
export const DescriptionExperience = styled.p`
  font-size: 1.1vw;
  color: rgba(252, 241, 228, 0.8);
  line-height: 2;
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 0.7rem;
  }
`
export const StyledLi = styled.li`
 color: rgba(252, 241, 228, 0.8);
`

export const StyledA = styled.a`
  color: #fcf1e4;
  display: inline-block;
 :hover {
       transform: scale(1.1);
  }

  @media (max-width: 480px){
    :hover {
       transform: none;
  }
  }
`

export const StyledSpan = styled.span`
  font-weight: bold;
  color: rgba(252, 241, 228, 0.9);
`

export const Part = styled.div`
display: flex;
flex-direction: column;
gap: 0.2vw;
margin-bottom: 1.66vw;
`

interface ButtonControlProps{
  position?: boolean
}

export const ButtonControl = styled.div<ButtonControlProps>`
display: flex;
justify-content: center;
align-items: center;
gap: 0.3vw;
position: absolute;
top: ${({position})=> position ? "-4vw" : "none"};
bottom: ${({position})=> position ? "none" : "-4vw"};
width: 100%;
z-index: 9;

@media (max-width: 480px) {
    gap: 20vw;
    top: ${({position})=> position ? "-15vw" : "none"};
    bottom: ${({position})=> position ? "none" : "-15vw"};
}
`
interface IconProps {
  disabled: boolean
  scaleX?: boolean
}
export const IconBox = styled.img<IconProps>`
width: 3vw;
height: 2.5vw;
padding: 0.5vw;
opacity: ${({disabled})=>disabled ? "0.4" : "1"};
cursor: ${({disabled})=>disabled ? "auto" : "pointer"};
transform: ${({scaleX})=>scaleX ? "scaleX(-1)" : "scaleX(1)"}; 
:hover {
       transform: ${({disabled, scaleX})=>
      disabled 
       ? (scaleX ? 'scaleX(-1)' : 'scaleX(1)') 
       : (scaleX ? 'scaleX(-1) scale(1.3)' : 'scale(1.3)')
      }
     
  }

  @media (max-width: 480px) {
    width: 10vw;
    height: 15vw;
    display: flex;
    gap: 30vw;
}
`

export const ButtonStart = styled.div`
display: flex;
gap: 0.2vw;
cursor: pointer;
:hover{
  transform: scale(1.3);
}

@media (max-width: 480px) {
    gap: 3vw;

    :hover{
  transform: none;
}
}

`

export const GoDotFillComponent = styled(GoDotFill)`
font-size: 0.4vw;
color: rgba(252, 241, 228, 0.9);

@media (max-width: 480px) {
  font-size: 0.7rem;
}
`
