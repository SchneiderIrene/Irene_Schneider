import { CardContainer, ExperienceContainer, Title } from "./styles"
import Rectangle from "components/Rectangle/Rectangle"
import Elipce from "components/Elipce/Elipse"
import JobCard from "components/JobCard/JobCard"
import jobsData from "components/JobCard/data"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

function Experience() {
  const { t } = useTranslation()
  const keySkills = `${t("home.span")}, Frontend, ${t("home.specialized")}, ${t("home.what_can_i_do")}, ${t("home.all_kinds")}, ${t("home.block1_discreption")}, ${t("home.block2_discreption")}, ${t("home.block3_discreption")}  `
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`${keySkills},React, Redux, Frontend, Backend, Fullstack, Website, Websete, App, Web, Development, Entwicklung, Java, JavaScript, TypeScript, Spring, HTML5, CSS, StyledComponents, Emotional, MaterialUI, Figma, UI/UX, Design, Media-Queries, Adaptiv, Spring Boot, MVC, Security, Data JPA, Maven, TomCat, DataBase, API, Node.js, REST API, Frontend und Backend in der Webentwicklung`}
        />
        <meta name="keywords" content={keySkills} />
      </Helmet>
      <ExperienceContainer>
        <Elipce />
        <Rectangle />
        <Title>{t("experience.experience_title")}</Title>
        <CardContainer>
          <JobCard jobs={jobsData} />
        </CardContainer>
      </ExperienceContainer>
    </>
  )
}

export default Experience
