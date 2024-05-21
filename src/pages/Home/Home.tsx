import { Skills } from 'assets';
import {
  NavContainer,
  StyledNavLink,
  HomeContainer,
  CardContainer,
  WeiterbildungImg,
  FotoBackground,
  FotoContainer,
  InfoBlock,
  Title,
  JobTitle,
  Adresse,
  Tel,
  Email,
  StudiumgImg,
  JobImg,
  SkillsImg,
  InteressenImg,
  ZertifikateImg
} from './styles';

function Home() {
  return (
    <HomeContainer>
      <CardContainer>
        {/* <WeiterbildungImg> */}
          <NavContainer>
            <StyledNavLink to="/weiterbildung">Weiterbildung</StyledNavLink>
          </NavContainer>
        {/* </WeiterbildungImg> */}
        {/* <JobImg> */}
          <NavContainer>
          <StyledNavLink to="/beruflicheErfahrung">
            Berufliche Erfahrung
          </StyledNavLink>
        </NavContainer>
        {/* </JobImg> */}
        
{/* <InteressenImg> */}
  <NavContainer>
          <StyledNavLink to="/interessen">Interessen</StyledNavLink>
        </NavContainer>
{/* </InteressenImg> */}
        
        
{/* <StudiumgImg> */}
   <NavContainer>
          <StyledNavLink to="/studium">Studium</StyledNavLink>
        </NavContainer>
{/* </StudiumgImg> */}
       
{/* <SkillsImg> */}
  <NavContainer>
          <StyledNavLink to="/skills">Hard Skills & Soft Skills</StyledNavLink>
        </NavContainer>
{/* </SkillsImg> */}
   

  

       
{/* <ZertifikateImg> */}
  <NavContainer>
          <StyledNavLink to="/zertifikate">Zertifikate</StyledNavLink>
        </NavContainer>
{/* </ZertifikateImg> */}
        
      </CardContainer>

      <FotoContainer>
      <FotoBackground/>  
      {/* <InfoBlock>
        <Title>Irene Schneider</Title>
        <JobTitle>Softwareentwickler</JobTitle>
        <Adresse>Straubing Bayern Deutschland</Adresse>
        <Tel>+49 179 211 86 77</Tel>
        <Email>schneider_irene@outlook.com</Email>
      </InfoBlock> */}
      </FotoContainer>
      
    </HomeContainer>
  );
}

export default Home;
