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

function Studies() {
  return (
    <StudiesContainer>
      <Elipce />
      <Rectangle />
      <Title>Studium & Weiterbildung</Title>
      <Card>
        <TitleStudium>
          <StyledAStudies href="https://www.sovrso.ru/univer/suifsin/index.html" target="_blank">
          Juristische Institut SLI of the FPS of Russia
          </StyledAStudies>
        </TitleStudium>
        <Country>Russland Samara</Country>
        <Period>2005 - 2011</Period>
        <DescriptionStudies>
          Diplom mit Auszeichnung in Rechtswissenschaft
        </DescriptionStudies>
      </Card>
      <Card>
        <TitleStudium>
          <StyledAStudies href="https://www.ait-tr.de/de" target="_blank">
          AIT-TR
          </StyledAStudies>&nbsp; &nbsp; IT-Schule
        </TitleStudium>
        <Country>Deutschland Berlin</Country>
        <Period>2023 - 2024</Period>
        <DescriptionStudies>
        Fullstack-Entwickler mit Schwerpunkt in Frontend-Entwicklung
        </DescriptionStudies>
      </Card>
    </StudiesContainer>
  )
}

export default Studies
