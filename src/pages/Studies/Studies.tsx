import {
  Card,
  Country,
  DescriptionStudies,
  Period,
  StudiesContainer,
  StyledAStudies,
  Title,
  TitleStudium,
} from "./styles"
import Rectangle from "components/Rectangle/Rectangle"
import Elipce from "components/Elipce/Elipse"
import { useTranslation } from "react-i18next";

function Studies() {

  const {t} = useTranslation();

  return (
    <StudiesContainer>
      <Elipce />
      <Rectangle />
      <Title>{t("studies.studies_title")}</Title>
      <Card>
        <TitleStudium>
          <StyledAStudies href="https://www.sovrso.ru/univer/suifsin/index.html" target="_blank">
          {t("studies.institut")}
          </StyledAStudies>
        </TitleStudium>
        <Country>{t("studies.country_city1")}</Country>
        <Period>2005 - 2011</Period>
        <DescriptionStudies>
          {t("studies.description_studies1")}
        </DescriptionStudies>
      </Card>
      <Card>
        <TitleStudium>
          <StyledAStudies href="https://www.ait-tr.de/de" target="_blank">
          AIT-TR
          </StyledAStudies>&nbsp; &nbsp; IT-{t("studies.description_ait-tr")}
        </TitleStudium>
        <Country>{t("studies.country_city2")}</Country>
        <Period>2023 - 2024</Period>
        <DescriptionStudies>
       {t("studies.description_studies2")}
        </DescriptionStudies>
      </Card>
    </StudiesContainer>
  )
}

export default Studies
