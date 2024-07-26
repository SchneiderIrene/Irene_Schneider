import styled from "@emotion/styled"
import { Background } from "assets"
import { NavLink } from "react-router-dom"

export const WeatherMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 2.6vw;
  gap: 1.04vw;
  min-height: 26vw;
  border-radius: 0.625vw;
  background-image: url(${Background});
`

export const WeatherSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.78vw;
  width: 36.45vw;
`
interface ButtonStylesProps {
  disabled: boolean
}
export const WeatherButton = styled.button<ButtonStylesProps>`
  width: 7.6vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(54, 120, 180, 0.7)" : "rgba(54, 120, 180, 1)"};
  border: none;
  color: ${({ disabled }) =>
    disabled ? "rgba(255, 255, 255, 0.6)" : "aliceblue"};
  font-size: 1.04vw;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  :hover {
    ${({ disabled }) =>
      disabled ? "transform: scale(1.0)" : "transform: scale(1.1)"}
  }
`
export const MyWeatherButton = styled.button<ButtonStylesProps>`
  width: 36.45vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(54, 120, 180, 0.7)" : "rgba(54, 120, 180, 1)"};
  border: none;
  color: ${({ disabled }) =>
    disabled ? "rgba(255, 255, 255, 0.6)" : "aliceblue"};
  font-size: 1.04vw;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  :hover {
    ${({ disabled }) =>
      disabled ? "transform: scale(1.0)" : "transform: scale(1.1)"}
  }
`

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
`
export const WeatherInput = styled.input`
  height: 2.5vw;
  width: 28.64vw;
  border-radius: 2.08vw;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.05vw solid aliceblue;
  outline: none;
  padding: 1.04vw;
  color: aliceblue;
  gap: 0.52vw;
  font-size: 1.04vw;
  padding: 1.04vw;
  font-weight: bold;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`

export const WeatherBlock = styled.div`
  width: 100%;
  height: 6.71vw;
  background-color: rgba(47, 72, 111, 0.62);
  border-radius: 0.93vw;
  color: aliceblue;
  width: 36.92vw;
  height: 11.45vw;
  display: flex;
  flex-direction: column;
  gap: 1.04vw;
  padding: 1.45vw;
`

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconWeatherContainer = styled.div`
  width: 15.1vw;
  height: 3.85vw;
  display: flex;
  gap: 8.75vw;
`

export const IconBox = styled.div`
  display: flex;
`

export const IconWeather = styled.img``

export const Temperatur = styled.p`
  display: flex;
  justify-content: start;
  gap: 1.56vw;
  font-size: 2.96vw;
`
export const City = styled.p`
  font-size: 1.04vw;
`

export const SaveDeleteButton = styled.button`
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
`
export const SaveDeleteButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`
export const WeatherErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.61vw;
  justify-content: center;
  align-items: center;
  width: 36.92vw;
  height: 11.45vw;
  background-color: rgba(47, 72, 111, 0.62);
  border-radius: 0.93vw;
  padding: 0.52vw;
`

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.52vw;
  justify-content: center;
  align-items: center;
`

export const ApiError = styled.h1`
  font-size: 2.96vw;
  color: rgba(243, 94, 94, 1);
  font-family: "Inter";
  font-weight: normal;
`

export const MessageError = styled.p`
  font-size: 0.93vw;
  color: aliceblue;
  font-family: "Inter";
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.04vw;
  color: white;
`
