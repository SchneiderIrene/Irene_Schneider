import styled from "@emotion/styled";

export const LanguageSwitcherContainer = styled.div`
display: flex;
position: absolute;
right: 15vw;
top: 0;
z-index: 7;
`

interface ButtonLanguageProps {
    activ: boolean
}
export const ButtonLanguage = styled.button<ButtonLanguageProps>`
background-color: transparent;
border: none;
color: ${({activ})=> activ ? "rgba(252, 241, 228, 0.6)" : "rgba(252, 241, 228, 0.3)"} ;
cursor: pointer;

:hover {
    transform: scale(1.3);
  }
`