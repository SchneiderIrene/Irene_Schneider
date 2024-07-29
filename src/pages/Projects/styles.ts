import styled from "@emotion/styled"
import { CatFacts, LeafGrow, Weather } from "assets";
import { NavLink } from "react-router-dom";

export const ProjectsWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap: 5.2vw;
width: 100%;
position: relative;
z-index: 7;
height: 100%;
`
export const Title = styled.h1`
font-size: 3.75vw;
font-weight: bold;
text-shadow: 2px 2px 0px rgba(252, 241, 228, 0.1), -2px -2px 0px rgba(252, 241, 228, 0.1);
color: #FCF1E4;
position: relative;
z-index: 3;
`

export const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

`

export const Card = styled.div`
width: 18.75vw;
height: 25.52vw;
display: flex;
position: relative;
flex-direction: column;
justify-content: start;
align-items: center;
gap: 2vw;
padding:  7vw 1.8vw;
z-index: 3;
border-radius: 1.9vw;
border: none; 
border: 0.15vw solid rgba(128, 0, 128, 0.6);
cursor: pointer;
:hover {
    transform: scale(1.1);
  }

`
export const ImgWeather = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);
`
ImgWeather.defaultProps = { src: Weather }

export const ImgLeafGrow = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);
`
ImgLeafGrow.defaultProps = { src: LeafGrow }

export const ImgCatFacts = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);
`
ImgCatFacts.defaultProps = { src: CatFacts }

export const Description = styled.p`
font-size: 0.83vw;
color: rgba(252, 241, 228, 0.6);
`
export const TitleCard = styled.h3`
color: #FCF1E4;
font-size: 1.45vw;
position: absolute;
bottom: 1.56vw;
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
`
export const StyledA = styled.a`
text-decoration: none;
`


