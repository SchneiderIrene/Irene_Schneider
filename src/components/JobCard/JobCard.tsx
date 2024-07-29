import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { RiRestartLine } from "react-icons/ri";
import {
  ButtonControl,
  ButtonStart,
  CardComponent,
  DescriptionExperience,
  IconBox,
  JobCardWrapper,
  Part,
  StyledA,
  StyledLi,
  StyledSpan,
  TitleDesc,
  TitleH2Card,
  TitleH3Card,
  TitleH4Card,
} from "./styles"
import { JobProps } from "./types"
import { Skip } from "assets"

function JobCard({ jobs }: JobProps) {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if (index < jobs.length - 1) {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1)
    }
  }

  const handleReset = () => {
    setIndex(0)
  }

  return (
    <JobCardWrapper>
      <ButtonControl position>
        <IconBox
          src={Skip}
          onClick={handlePrev}
          disabled={index === 0}
          scaleX
        />
        <ButtonStart 
        title="zum Anfang" 
        onClick={handleReset}>
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          {/* <RiRestartLine color="rgba(252, 241, 228, 0.9)" fontSize={"1.5vw"}/> */}
        </ButtonStart>

        <IconBox
          src={Skip}
          onClick={handleNext}
          disabled={index === jobs.length - 1}
        />
      </ButtonControl>
      <CardComponent>
        <TitleH2Card>
          {jobs[index].title} &nbsp;
          <StyledA href={jobs[index].link} target="_blank">
            {" "}
            {jobs[index].company}
          </StyledA>{" "}
          &nbsp; {jobs[index].companyDescription}, &nbsp;{jobs[index].location}
        </TitleH2Card>
        <TitleH3Card>{jobs[index].period}</TitleH3Card>
        <TitleH4Card>Hauptverantwortlichkeiten:</TitleH4Card>
        <DescriptionExperience>
          {jobs[index].description.map((desc, i) => (
            <Part key={i}>
              {desc.titleDescription && (
                <TitleDesc>{desc.titleDescription}</TitleDesc>
              )}
              {desc.li &&
                desc.li.map((liItem, k) => (
                  <StyledLi key={k}>
                    {desc.span && desc.span[k] && (
                      <StyledSpan>{desc.span[k]} &nbsp;</StyledSpan>
                    )}
                    {liItem}
                  </StyledLi>
                ))}
            </Part>
          ))}
        </DescriptionExperience>
      </CardComponent>
      <ButtonControl>
        <IconBox
          src={Skip}
          onClick={handlePrev}
          disabled={index === 0}
          scaleX
        />
        <ButtonStart 
        title="zum Anfang" 
        onClick={handleReset}>
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          <GoDotFill color="rgba(252, 241, 228, 0.9)" fontSize={"0.4vw"} />
          {/* <RiRestartLine color="rgba(252, 241, 228, 0.9)" fontSize={"1.5vw"}/> */}
        </ButtonStart>
        <IconBox
          src={Skip}
          onClick={handleNext}
          disabled={index === jobs.length - 1}
        />
      </ButtonControl>
    </JobCardWrapper>
  )
}

export default JobCard
