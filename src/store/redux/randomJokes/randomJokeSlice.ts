
import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"
import i18n from "i18next";


const DEEPL_API_KEY = "79ec751d-5c36-410c-b1ec-0cc1071e9735:fx" // Замените на ваш API-ключ от DeepL

const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        auth_key: DEEPL_API_KEY,
        text: text,
        target_lang: targetLanguage.toUpperCase(),
      }).toString(),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`DeepL API Error: ${errorText}`)
    }

    const data = await response.json()

    if (data.translations && data.translations.length > 0) {
      return data.translations[0].text
    } else {
      throw new Error("No translations found")
    }
  } catch (error) {
    console.error("Ошибка перевода:", error)
    throw error
  }
}

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOMJOKES",
  initialState: randomJokesInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {

        try {
          const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke",
          )
          const result = await response.json()
          console.log(result)

          if (!response.ok) {
            return thunkApi.rejectWithValue(result)
          } else {
            // Определяем текущий язык приложения
            const currentLanguage = i18n.language

            // Определяем целевой язык перевода (de, en, ru)
            let targetLanguage = "en" // По умолчанию английский
            if (currentLanguage === "de") targetLanguage = "de"
            if (currentLanguage === "ru") targetLanguage = "ru"

            // Перевод текста шутки
            const translatedSetup = await translateText(result.setup, targetLanguage)
            const translatedPunchline = await translateText(result.punchline, targetLanguage)

            return {
              id: result.id,
              setup: translatedSetup,
              punchline: translatedPunchline,
            }
          }
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: RandomJokesSliceState) => {
          console.log("pending")

          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          console.log("fulfill")
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: action.payload?.id,
              question: action.payload?.setup,
              answer: action.payload?.punchline,
            },
          ]
        },
        rejected: (state: RandomJokesSliceState, action: any) => {
            state.status = 'error'
            state.error = action.payload
        },
      },
    ),
    deleteall: create.reducer((state: RandomJokesSliceState)=>{state.data = []})
  }),
  selectors: {
    joke: state => state,
  },
})

export const randomJokesSliceActions = randomJokesSlice.actions
export const randomJokesSliceSelectors = randomJokesSlice.selectors
