import styled from "@emotion/styled";

export const LanguageSwitcherContainer = styled.div`
display: flex;
position: absolute;
right: 15vw;
top: 0;
z-index: 7;
@media (max-width: 480px){
  position: static;
  gap: 7vw;
 margin-top: 6vw;
}
@media (min-width: 481px) and (max-width: 1020px ){
  top: 1vw;
}
`

interface ButtonLanguageProps {
    activ: boolean
}
export const ButtonLanguage = styled.button<ButtonLanguageProps>`
background-color: transparent;
font-size: 1.2vw;
border: none;
color: ${({activ})=> activ ? "rgba(252, 241, 228, 0.6)" : "rgba(252, 241, 228, 0.3)"} ;
cursor: pointer;

:hover {
    transform: scale(1.3);
  }

  @media (max-width: 480px){
    font-size: 4vw;
  }
`