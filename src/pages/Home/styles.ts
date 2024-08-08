import styled from "@emotion/styled";
import { Elipce, Foto } from "assets";

export const HomeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 6vw;
`

export const HeroSection = styled.section`
display: flex;
`


export const HeroArticle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 10vw;
position: relative;
z-index: 6;
`

export const ArticleText = styled.article`
width: 29vw;
display: flex;
flex-direction: column;
gap: 1vw;
`

export const TextHeroSection = styled.p`
font-size: 1vw;
color: #FCF1E4;
line-height: 1.5;
`
export const TitleHeroSection = styled.h1`
font-size: 3.56vw;
font-weight: bold;
text-shadow: 2px 2px 0px rgba(252, 241, 228, 0.1), -2px -2px 0px rgba(252, 241, 228, 0.1);
color: #FCF1E4;
`
export const ButtonControl = styled.div`
display: flex;
flex-direction: column;
gap: 1vw;

`
export const FotoArticle = styled.img`
position: absolute;
top: 0;
right: 3vw;
z-index: 5;
width: 52vw;
`
FotoArticle.defaultProps = { src: Foto }

export const ContainerEclipse = styled.div`
position: relative;
`


export const ElipceComponent = styled.img`
position: absolute;
left: -50vw;
top: -20vw;
z-index: 1;
width: 60vw;
height: 60vw;
transform: scaleX(-1);
`
ElipceComponent.defaultProps = { src: Elipce }


export const ServiseSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 3.4vw;
position: relative;
`

export const ArticleTextService = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1vw;
width: 100%;
`

export const TitleServiceSection = styled.h2`
font-size: 1.8vw;
color: #FCF1E4;

`

export const TextServiceSection = styled.p`
font-size: 0.8vw;
color: #FCF1E4;
position: relative;
z-index: 4;
`
export const BlockContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

export const Block = styled.div`
display: flex;
flex-direction: column;
gap: 1vw;
width: 16.6vw;
align-items: start;
position: relative;
z-index: 2;
`
export const NummerBlock = styled.h2`
font-size: 3.125vw;
color: #800080;
`

export const TitleBlock = styled.h3`
font-size: 1.04vw;
color: #FCF1E4;
`
export const DescriptionBlock = styled.p`
font-size: 0.83vw;
color: rgba(252, 241, 228, 0.6);
`
export const Linie = styled.div`
width: 0.15vw;
height: 17.7vw;
background-color: #FCF1E4;;
`
