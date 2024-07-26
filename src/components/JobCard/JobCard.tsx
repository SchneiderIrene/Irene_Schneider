
import {
  CardComponent,
  DescriptionExperience,
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

function JobCard({jobs} : JobProps) {
    console.log('Rendering JobCard with jobs:', jobs);
  return (
    <>
    {jobs.length> 0 && jobs.map((job, index)=>{
      return (
        <CardComponent key={index}>
      <TitleH2Card>
        {job.title} &nbsp;
        <StyledA href={job.link} target="_blank"> {job.company} 
        </StyledA> &nbsp; {job.companyDescription}, &nbsp;{job.location}
      </TitleH2Card>
      <TitleH3Card>{job.period}</TitleH3Card>
      <TitleH4Card>Hauptverantwortlichkeiten:</TitleH4Card>
      <DescriptionExperience>
      {job.description.map((desc, i) => (
              <Part key={i}>
                {desc.titleDescription && (
                  <TitleDesc>{desc.titleDescription}</TitleDesc>
                )}
                {desc.li && desc.li.map((liItem, k) => (
                  <StyledLi key={k}>
                  {desc.span && desc.span[k] && (
                  <StyledSpan>{desc.span[k]} &nbsp;</StyledSpan>
                )}  
                    {liItem}</StyledLi>
                ))}
              </Part>
            ))}
      </DescriptionExperience>
    </CardComponent>
    )})}
     
    </>
   
  )
}

export default JobCard
