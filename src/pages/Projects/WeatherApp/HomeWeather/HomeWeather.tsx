import Spiner from "components/Spinner/Spinner"
import { SlActionUndo } from "react-icons/sl";
import {
  ApiError,
  City,
  ErrorBox,
  IconBox,
  IconWeather,
  IconWeatherContainer,
  MessageError,
  MyWeatherButton,
  ProjekteButton,
  SaveDeleteButton,
  SaveDeleteButtonBox,
  Temperatur,
  WeatherBlock,
  WeatherButton,
  WeatherErrorWrapper,
  WeatherInfo,
  WeatherInput,
  WeatherMainWrapper,
  WeatherSearchWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

function HomeWeather() {
  const navigate = useNavigate()
  const [city, setCity] = useState<string>("")
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const dispatch = useAppDispatch()
  const data = useAppSelector(weatherSliceSelectors.weather)
  const status = useAppSelector(weatherSliceSelectors.status)
  const error = useAppSelector(weatherSliceSelectors.error)

  const {t} = useTranslation();

  const getWeather = () => {
    dispatch(weatherSliceActions.getWeather({ city }))

    setCity("")
  }

  const saveWeather = (id: string) => {
    dispatch(weatherSliceActions.saveWeatherCard(id))
    dispatch(weatherSliceActions.deleteWeatherCardHome(id))
  }

  const deleteError = () => {
    dispatch(weatherSliceActions.deleteError())
  }

  const weatherData = data.map(weather => {
    const tempCelc = () => {
      return `${(Number(weather.weather) - 273.15).toFixed(1)}°`
    }

    const deleteWeatherCardHome = () => {
      dispatch(weatherSliceActions.deleteWeatherCardHome(weather.id))
    }

    

    return (
      <WeatherBlock key={weather.id}>
        <WeatherInfo>
          <IconWeatherContainer>
            <Temperatur>{tempCelc()}</Temperatur>
            <IconBox>
              <IconWeather
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
              />
              <IconWeather
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
              />
            </IconBox>
          </IconWeatherContainer>
          <City>{weather.city}</City>
        </WeatherInfo>
        <SaveDeleteButtonBox>
          <SaveDeleteButton onClick={() => saveWeather(weather.id)}>
           {t("projects.weather.buttonSave")}
          </SaveDeleteButton>
          <SaveDeleteButton onClick={deleteWeatherCardHome}>
          {t("projects.weather.buttonDelete")}
          </SaveDeleteButton>
        </SaveDeleteButtonBox>
      </WeatherBlock>
    )
  })

  return (
    <WeatherMainWrapper>
      <ProjekteButton
          onClick={()=>navigate("/projects")}
          disabled={status === "loading" || status === "error"}
        >
          <SlActionUndo/><br/> {t("projects.weather.bunttonProjects")} <br/> {t("projects.weather.bunttonProjects_br")}
        </ProjekteButton>
      <WeatherSearchWrapper>
        <WeatherInput
          placeholder="Colorado"
          value={city}
          onChange={onChangeInput}
          disabled={status === "error" || status === "loading"}
        />
        <WeatherButton
          onClick={getWeather}
          disabled={status === "loading" || status === "error"}
        >
          {t("projects.weather.buttonSearch")}
        </WeatherButton>
      </WeatherSearchWrapper>
      {status === "loading" && <Spiner />}
      {weatherData}
      {status === "error" && (
        <WeatherErrorWrapper>
          <ErrorBox>
            <ApiError>API Error: {error.cod}</ApiError>
            <MessageError>{error?.message}</MessageError>
          </ErrorBox>
          <SaveDeleteButton onClick={deleteError}>Delete</SaveDeleteButton>
        </WeatherErrorWrapper>
      )}

      <MyWeatherButton
        onClick={() => navigate("/projects/weatherApp/weather")}
        disabled={status === "loading" || status === "error"}
      >
        {t("projects.weather.buttonMyWeather")}
      </MyWeatherButton>
    </WeatherMainWrapper>
  )
}

export default HomeWeather
