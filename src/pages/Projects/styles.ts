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

@media (max-width : 480px) {
  font-size: 1.2rem;
}
`

export const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

@media (max-width : 480px) {
  flex-direction: column;
  align-items: center;
  gap: 10vw;
}
`

export const Card = styled.div`
width: 20vw;
height: 26vw;
display: flex;
position: relative;
flex-direction: column;
justify-content: start;
align-items: center;
text-align: left;
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

  @media (max-width : 480px) {
    width: 60vw;
    height: 90vw;
    padding:  20vw 5vw;
    border: 0.5vw solid rgba(128, 0, 128, 0.6);

    :hover {
    transform: scale(1);
  }
}

`
export const ImgWeather = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);

@media (max-width : 480px) {
    width: 20vw;
    height: 20vw;
}
`
ImgWeather.defaultProps = { src: String(Weather) }

export const ImgLeafGrow = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);

@media (max-width : 480px) {
    width: 20vw;
    height: 20vw;
}
`
ImgLeafGrow.defaultProps = { src: String(LeafGrow) }

export const ImgCatFacts = styled.img`
width: 7.3vw;
height: 7.3vw;
position: absolute;
top: -2.86vw;
filter: brightness(60%);

@media (max-width : 480px) {
    width: 20vw;
    height: 20vw;
}
`
ImgCatFacts.defaultProps = { src: String(CatFacts) }

export const Description = styled.p`
font-size: 0.83vw;
color: rgba(252, 241, 228, 0.6);

@media (max-width : 480px) {
  font-size: 0.7rem;
}
`
export const TitleCard = styled.h3`
color: #FCF1E4;
font-size: 1.45vw;
position: absolute;
bottom: 1.56vw;

@media (max-width : 480px) {
  font-size: 1rem;
  bottom: 3vw;
}
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
`
export const StyledA = styled.a`
text-decoration: none;
`


