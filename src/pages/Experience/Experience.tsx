import {  CardContainer, ExperienceContainer, Title } from "./styles"
import Rectangle from "components/Rectangle/Rectangle"
import Elipce from "components/Elipce/Elipse"
import JobCard from "components/JobCard/JobCard";
import jobsData from "components/JobCard/data";
import { useTranslation } from "react-i18next";

function Experience() {
  const {t} = useTranslation();
  return (
    <ExperienceContainer>
      <Elipce />
      <Rectangle />
      <Title>{t("experience.experience_title")}</Title>
      <CardContainer>
          <JobCard  jobs={jobsData}/>
      </CardContainer>
    </ExperienceContainer>
  )
}

export default Experience
