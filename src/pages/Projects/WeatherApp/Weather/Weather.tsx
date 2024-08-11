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
import { SlActionUndo } from "react-icons/sl";
import { useTranslation } from "react-i18next";

function Weather() {
  const navigate = useNavigate()
  const saveWeather = useAppSelector(weatherSliceSelectors.savedWeather)
  const dispatch = useDispatch()

  const {t} = useTranslation();

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
            {t("projects.weather.buttonDelete")}
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
          <SlActionUndo/><br/> {t("projects.weather.bunttonProjects")} <br/> {t("projects.weather.bunttonProjects_br")}
        </ProjekteButton>
      {weatherCard}
      {weatherCard.length > 0 && (
        <>
        <DeleteButtonAllCards onClick={deleteAllCards}>
        {t("projects.weather.buttonDeleteAll")}
        </DeleteButtonAllCards>
        <SearchButton
        onClick={() => navigate(-1)}
        disabled={status === "loading" || status === "error"}
      >
        {t("projects.weather.buttonSearch")}
      </SearchButton>
        </>
      )}
      {weatherCard.length === 0 && (
        <>
        <StyledP> {t("projects.weather.ooops")}</StyledP>
              <SearchButton
        onClick={() => navigate(-1)}
        disabled={status === "loading" || status === "error"}
      >
         {t("projects.weather.buttonSearch")}
      </SearchButton>
        </>
      )
      }
      
    </WeatherPagesWrapper>
  )
}

export default Weather
