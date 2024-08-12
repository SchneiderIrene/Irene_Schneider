import { useTranslation } from "react-i18next";
import { ButtonLanguage, LanguageSwitcherContainer } from "./styles";
import { useEffect, useState } from "react";

function LanguageSwitcher() {

    const { i18n } = useTranslation();
    const [activL, setActiv] = useState(i18n.language)

    useEffect(()=>{
        setActiv(i18n.language)
    }, [i18n.language])

    const handleChangeLanguage = (language : string) =>{
        setActiv(language)
        i18n.changeLanguage(language)
    }

    return(
        <LanguageSwitcherContainer>
            <ButtonLanguage activ={activL === "en"} onClick={()=>handleChangeLanguage("en")}>EN</ButtonLanguage>
            <ButtonLanguage activ={activL === "de"} onClick={()=>handleChangeLanguage("de")}>DE</ButtonLanguage>
            <ButtonLanguage activ={activL === "ru"} onClick={()=>handleChangeLanguage("ru")}>RU</ButtonLanguage>
        </LanguageSwitcherContainer>
    )
}

export default LanguageSwitcher;