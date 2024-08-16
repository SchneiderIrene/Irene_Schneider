import { useState } from "react"
//import { VscDebugStepBack } from "react-icons/vsc";
import {
  ButtonControl,
  ButtonStart,
  CardComponent,
  DescriptionExperience,
  GoDotFillComponent,
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
import { JobDescription, JobProps } from "./types"
import { Skip } from "assets"
import { useTranslation } from "react-i18next"
import Tooltip from "@mui/material/Tooltip"

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

  const { t } = useTranslation()

  const descriptions = t(`jobs.${index}.description`, {
    returnObjects: true,
  }) as JobDescription[]

  descriptions.map(desc => ({
    titleDescription: desc.titleDescription ? t(desc.titleDescription) : "",
    spans: desc.span ? desc.span.map(span => t(span)) : [],
    listItems: desc.li ? desc.li.map(liItem => t(liItem)) : [],
  }))

  return (
    <JobCardWrapper>
      <ButtonControl position>
        <Tooltip title={t("tooltips.tooltipBack")}>
          <IconBox
            src={Skip}
            onClick={handlePrev}
            disabled={index === 0}
            scaleX
          />
        </Tooltip>
        <Tooltip title={t("tooltips.tooltipStart")}>
          <ButtonStart onClick={handleReset}>
            <GoDotFillComponent />
            <GoDotFillComponent />
            <GoDotFillComponent />
            {/* <RiRestartLine color="rgba(252, 241, 228, 0.9)" fontSize={"1.5vw"}/> */}
          </ButtonStart>
        </Tooltip>
        <Tooltip title={t("tooltips.tooltipNext")}>
          <IconBox
            src={Skip}
            onClick={handleNext}
            disabled={index === jobs.length - 1}
          />
        </Tooltip>
      </ButtonControl>
      <CardComponent>
        <TitleH2Card>
          {t(`jobs.${index}.title`)} &nbsp;
          <StyledA href={t(`jobs.${index}.link`)} target="_blank">
            {" "}
            {t(`jobs.${index}.company`)}
          </StyledA>{" "}
          &nbsp; {t(`jobs.${index}.companyDescription`)},{" "}
          {t(`jobs.${index}.location`)}
        </TitleH2Card>
        <TitleH3Card>{t(`jobs.${index}.period`)}</TitleH3Card>
        <TitleH4Card>{t(`jobs.${index}.responsibilities`)}</TitleH4Card>
        <DescriptionExperience>
          {descriptions.map((desc, i) => (
            <Part key={i}>
              {desc.titleDescription && (
                <TitleDesc>{t(desc.titleDescription)}</TitleDesc>
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
        <ButtonStart title="zum Anfang" onClick={handleReset}>
          <GoDotFillComponent />
          <GoDotFillComponent />
          <GoDotFillComponent />
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
