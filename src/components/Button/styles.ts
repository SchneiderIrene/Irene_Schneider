import styled from "@emotion/styled";

interface ButtonComponentStylesProps{
    disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentStylesProps>`
    width: 100%;
    height: 5.2vw;
    outline: none;
    border: 0.3vw solid #800080;
    padding: 1vw;
    background-color:rgba(128, 0, 128, 0);
    color: #FCF1E4;
    font-size: 1.4vw;
    font-weight: bold;
    cursor: pointer;
    :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px){
   height: 15vw;
   font-size: 0.8rem;
   border: 0.5vw solid #800080;
   :hover {
    transform: none;
  }
}
  

` 
