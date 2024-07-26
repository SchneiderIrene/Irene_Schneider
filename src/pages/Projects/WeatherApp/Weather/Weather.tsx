import { useAppSelector } from "store/hooks"
import {
  DeleteButtonAllCards,
  DeleteButtonWeather,
  DeleteButtonWeatherBox,
  ProjekteButton,
  SearchButton,
  StyledP,
  WeatherPagesWrapper,
} from "./styles"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"

import {
  WeatherBlock,
  City,
  IconBox,
  IconWeather,
  IconWeatherContainer,
  Temperatur,
  WeatherInfo,
} from "../HomeWeather/styles"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { SlActionUndo } from "react-icons/sl";

function Weather() {
  const navigate = useNavigate()
  const saveWeather = useAppSelector(weatherSliceSelectors.savedWeather)
  const dispatch = useDispatch()

  const deleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllCards())
  }

  const weatherCard = saveWeather.map(weather => {
    const deleteWeatherCardWeather = (id: string) => {
      dispatch(weatherSliceActions.deleteWeatherCardWeather(id))
    }
    const tempCelc = () => {
      return `${(Number(weather.weather) - 273.15).toFixed(1)}°`
    }

    return (
      <WeatherBlock key={weather.id}>
        <WeatherInfo>
          <IconWeatherContainer>
            <Temperatur>{tempCelc()}</Temperatur>
            <IconBox>
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
            </IconBox>
          </IconWeatherContainer>
          <City>{weather.city}</City>
        </WeatherInfo>
        <DeleteButtonWeatherBox>
          <DeleteButtonWeather
            onClick={() => deleteWeatherCardWeather(weather.id)}
          >
            Delete
          </DeleteButtonWeather>
        </DeleteButtonWeatherBox>
      </WeatherBlock>
    )
  })

  return (
    <WeatherPagesWrapper>
      <ProjekteButton
          onClick={()=>navigate("/projects")}
          disabled={status === "loading" || status === "error"}
        >
          <SlActionUndo/><br/> Meine <br/> Projekte
        </ProjekteButton>
      {weatherCard}
      {weatherCard.length > 0 && (
        <>
        <DeleteButtonAllCards onClick={deleteAllCards}>
          Delete all cards
        </DeleteButtonAllCards>
        <SearchButton
        onClick={() => navigate(-1)}
        disabled={status === "loading" || status === "error"}
      >
        Search
      </SearchButton>
        </>
      )}
      {weatherCard.length === 0 && (
        <>
        <StyledP>Ooops, you don't have saved weather ... </StyledP>
              <SearchButton
        onClick={() => navigate(-1)}
        disabled={status === "loading" || status === "error"}
      >
        Search
      </SearchButton>
        </>
      )
      }
      
    </WeatherPagesWrapper>
  )
}

export default Weather
