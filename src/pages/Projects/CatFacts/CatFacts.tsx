import { useState } from "react"
import { v4 } from "uuid"

import {
  ResultContainer,
  CatFactWrapper,
  CatFactsContainer,
  ButtonCat,
} from "./styles"
import Spinner from "components/Spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { SlActionUndo } from "react-icons/sl"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

const DEEPL_API_KEY = "79ec751d-5c36-410c-b1ec-0cc1071e9735:fx" // Замените на ваш API-ключ от DeepL

const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      // Используем правильный URL для бесплатного API
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        auth_key: DEEPL_API_KEY,
        text: text,
        target_lang: targetLanguage.toUpperCase(), // DeepL требует язык в верхнем регистре
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

function CatFacts() {
  const navigate = useNavigate()
  const [catFacts, setCatFacts] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCatFact = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("https://catfact.ninja/fact")
      const result = await response.json()
      console.log(result.fact)

      if (!response.ok) {
        throw Object.assign(new Error("API Error"), {
          response: result,
        })
      } else {
        // Получаем текущий язык из i18n
        const currentLanguage = i18n.language

        // Определяем целевой язык для перевода (de, en, ru)
        let targetLanguage = "en" // По умолчанию английский
        if (currentLanguage === "de") targetLanguage = "de"
        if (currentLanguage === "ru") targetLanguage = "ru"

        const translatedText = await translateText(result.fact, targetLanguage)

        setCatFacts(prevValues => [...prevValues, translatedText])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const catFactsElement = catFacts.map((catFact: string) => {
    return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>
  })

  const deleteCatFacts = (): void => {
    setCatFacts([])
  }

  const { t } = useTranslation()

  return (
    <CatFactsContainer>
      <ButtonCat onClick={() => navigate("/projects")}>
        {" "}
        <SlActionUndo /> {t("projects.cat.buttonBack")}
      </ButtonCat>

      {isLoading && <Spinner />}
      <ResultContainer isShowBlock={!!catFacts.length}>
        {catFactsElement}
      </ResultContainer>

      <ButtonCat onClick={getCatFact}>{t("projects.cat.buttonCat")}</ButtonCat>
      <ButtonCat onClick={deleteCatFacts} disabled={!catFacts.length}>
        {t("projects.cat.buttonDeleteAll")}
      </ButtonCat>
    </CatFactsContainer>
  )
}

export default CatFacts
