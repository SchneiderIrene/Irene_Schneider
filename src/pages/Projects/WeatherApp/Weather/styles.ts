import styled from "@emotion/styled"
import { Background } from "assets"

export const WeatherPagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 26.04vw;
  padding: 2.6vw;
  gap: 1.04vw;
  position: relative;
  border-radius: 0.625vw;
  background-image: url(${Background});
  background-size: 100%;

  @media (max-width: 480px) {
    height: auto;
    min-height: 80vh;
    background-size: cover;
    padding: 25vw 5vw 15vw 5vw;
  }
`

export const DeleteButtonWeather = styled.button`
  width: 8.07vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: rgba(255, 255, 255, 0);
  border: 0.05vw solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.04vw;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    width: 30vw;
    height: 10vw;
    border-radius: 10vw;

    :hover {
      transform: none;
    }
  }
`

interface ButtonStylesProps {
    disabled: boolean
  }

export const ProjekteButton = styled.button<ButtonStylesProps>`
position: absolute;
left: 50px;
width: 4vw;
height: 4vw;
border-radius: 2.6vw;
background-color: ${({ disabled }) =>
  disabled ? "rgba(54, 120, 180, 0.7)" : "rgba(54, 120, 180, 1)"};
border: none;
color: ${({ disabled }) =>
  disabled ? "rgba(255, 255, 255, 0.6)" : "aliceblue"};
font-size: 0.6vw;
cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

:hover {
  ${({ disabled }) =>
    disabled ? "transform: scale(1.0)" : "transform: scale(1.1)"}
}
@media (max-width: 480px) {
    width: 17vw;
    height: 17vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    border-radius: 50%;
    left: 1vw;
    top: 1vw;

    :hover {
      transform: none;
    }
  }
`

export const StyledP = styled.p`
 color: rgba(255, 255, 255, 1);
 font-size: 2.04vw;

 @media (max-width: 480px) {
 font-size: 0.7rem;
  }
`
export const SearchButton = styled.button`
  width: 36.45vw;
  height: 2.5vw;
  bottom: 2.6vw;
  border-radius: 2.6vw;
  background-color: rgba(54, 120, 180, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 1.04vw;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 10vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    :hover {
      transform: none;
    }
  }
`

export const DeleteButtonWeatherBox = styled.div`
  display: flex;
  justify-content: center;
`

export const DeleteButtonAllCards = styled.button`
  width: 36.45vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: rgba(54, 120, 180, 1);
  border: none;
  font-size: 1.04vw;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 10vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    :hover {
      transform: none;
    }
  }
`
