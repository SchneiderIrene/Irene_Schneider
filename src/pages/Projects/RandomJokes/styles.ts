import styled from "@emotion/styled"
import { Joke } from "assets"

export const RandomJokesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.04vw;
  padding: 2.6vw;
  background-image: url(${Joke});
  background-size: cover;
  background-position: center;
  flex: 1;
  overflow: hidden;

  @media (max-width: 480px) {
    gap: 5vw;
    min-height: 100vh;
  }
`
interface JokeCardPropsStyled {
  isShowBlock?: boolean
}
export const JokeCard = styled.div<JokeCardPropsStyled>`
  width: 100%;
  color: rgba(196, 209, 185, 0.9);
  font-size: 1.04vw;
  display: ${({ isShowBlock }) => (isShowBlock ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.04vw;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`

export const JokeText = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 0.2vw;
  padding: 0.52vw;
  font-size: 0.7rem;
  color: #fcf1e4;
  border: 0.05vw solid rgba(252, 241, 228, 0.6);

  @media (max-width: 480px) {
    border: 0.5vw solid rgba(252, 241, 228, 0.6);
    border-radius: 0.8vw;
    padding: 2vw;
  }
`

interface ButtonStylesProps {
  disabled?: boolean
}
export const ButtonJoke = styled.button<ButtonStylesProps>`
  width: 100%;
  height: 3.2vw;
  outline: none;
  border: 0.15vw solid #fcf1e4;
  padding: 0.5vw;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(252, 241, 228, 0.6)" : "transparent"};
  background-size: contain;
  color: #fcf1e4;
  font-weight: bold;
  font-size: 1.04vw;
  cursor: pointer;
  :hover {
    ${({ disabled }) => (disabled ? "none" : "transform: scale(1.1)")}
  }

  @media (max-width: 480px) {
    height: 10vw;
    font-size: 1rem;

    :hover {
      transform: none;
    }
  }
`
