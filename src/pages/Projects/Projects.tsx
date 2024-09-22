import Elipce from "components/Elipce/Elipse"
import {
  Card,
  CardContainer3Card,
  CardContainerAll,
  Description,
  ImgCatFacts,
  ImgJoke,
  ImgLeafGrow,
  ImgWeather,
  ProjectsWrapper,
  StyledA,
  StyledNavLink,
  Title,
  TitleCard,
} from "./styles"
import Rectangle from "components/Rectangle/Rectangle"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet";

function Projects() {
  const { t } = useTranslation()
    const keySkills = `${t("home.span")}, Frontend, ${t("home.specialized")}, ${t("home.what_can_i_do")}, ${t("home.all_kinds")}, ${t("home.block1_discreption")}, ${t("home.block2_discreption")}, ${t("home.block3_discreption")}  `
  return (
    <>
    <Helmet>
        <meta
          name="description"
          content={`${keySkills},React, Redux, Frontend, Backend, Fullstack, Website, Websete, App, Web, Development, Entwicklung, Java, JavaScript, TypeScript, Spring, HTML5, CSS, StyledComponents, Emotional, MaterialUI, Figma, UI/UX, Design, Media-Queries, Adaptiv, Spring Boot, MVC, Security, Data JPA, Maven, TomCat, DataBase, API, Node.js, REST API, Frontend und Backend in der Webentwicklung, Webentwicklung`}
        />
        <meta name="keywords" content={keySkills} />
      </Helmet>
    <ProjectsWrapper>
      <Elipce />
      <Rectangle />
      <Title>{t("projects.titleProject")}</Title>
      <CardContainerAll>
        <CardContainer3Card>
        <StyledNavLink to={"/projects/weatherApp/home"}>
          <Card>
            <ImgWeather />
            <Description>{t("projects.discription1")}</Description>
            <TitleCard>{t("projects.title1")}</TitleCard>
          </Card>
        </StyledNavLink>
        <StyledA
          href="https://leafgrow-app-foign.ondigitalocean.app/#/"
          target="_blank"
        >
          <Card>
            <ImgLeafGrow />
            <Description>{t("projects.discription2")}</Description>
            <TitleCard>{t("projects.title2")}</TitleCard>
          </Card>
        </StyledA>
        <StyledNavLink to={"/projects/catfacts/catfacts"}>
          <Card>
            <ImgCatFacts />
            <Description>{t("projects.discription3")}</Description>
            <TitleCard>{t("projects.title3")}</TitleCard>
          </Card>
        </StyledNavLink>
        </CardContainer3Card>
        <CardContainer3Card>
            <StyledNavLink to={"/projects/randomJokes/randomJokes"}>
          <Card>
            <ImgJoke />
            <Description>{t("projects.discription4")}</Description>
            <TitleCard>{t("projects.title4")}</TitleCard>
          </Card>
        </StyledNavLink>
        </CardContainer3Card>
      </CardContainerAll>
    </ProjectsWrapper>
    </>
  )
}

export default Projects
