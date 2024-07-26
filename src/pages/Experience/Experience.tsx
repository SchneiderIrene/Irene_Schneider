import {  CardContainer, ExperienceContainer, Title } from "./styles"
import Rectangle from "components/Rectangle/Rectangle"
import Elipce from "components/Elipce/Elipse"
import JobCard from "components/JobCard/JobCard";
import jobsData from "components/JobCard/data";

function Experience() {
  return (
    <ExperienceContainer>
      <Elipce />
      <Rectangle />
      <Title>Berufliche Erfahrung</Title>
      <CardContainer>
          <JobCard  jobs={jobsData}/>
      </CardContainer>
    </ExperienceContainer>
  )
}

export default Experience
