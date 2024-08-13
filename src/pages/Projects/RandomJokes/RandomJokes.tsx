import { RandomJokesContainer, JokeCard, JokeText, ButtonJoke } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "store/redux/randomJokes/randomJokeSlice"
import { SlActionUndo } from "react-icons/sl"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Spinner from "components/Spinner/Spinner";

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector(randomJokesSliceSelectors.joke)

  const navigate = useNavigate()
  const { t } = useTranslation()

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const deleteAll = () => {
    dispatch(randomJokesSliceActions.deleteall())
  }

  const jokes = data.map(joke => {
    return (
      <JokeText key={joke.id}>
        {joke.question} : {joke.answer}
      </JokeText>
    )
  })

  return (
    <RandomJokesContainer>
      <ButtonJoke onClick={() => navigate("/projects")}>
        {" "}
        <SlActionUndo /> {t("projects.cat.buttonBack")}
      </ButtonJoke>
      {status === "loading" ? <Spinner/> : 
        <JokeCard isShowBlock={!!jokes.length}>{jokes}</JokeCard>
      }
      <ButtonJoke onClick={getJoke} disabled={status === "loading"}>
        {t("projects.randomJokes.buttonGet")}
      </ButtonJoke>
      <ButtonJoke onClick={deleteAll} disabled={status === "loading"}>
        {t("projects.randomJokes.buttonDeleteAll")}
      </ButtonJoke>
    </RandomJokesContainer>
  )
}

export default RandomJokes
