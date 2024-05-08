import {
  NavContainer,
  StyledNavLink,
  HomeContainer,
  CardContainer,
  FotoContainer,
  FotoImg,
} from './styles';

function Home() {
  return (
    <HomeContainer>
      <CardContainer>
        <NavContainer>
          <StyledNavLink to="/weiterbildung">Weiterbildung</StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink to="/beruflicheErfahrung">
            Berufliche Erfahrung
          </StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink to="/interessen">Interessen</StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink to="/studium">Studium</StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink to="/skills">Hard Skills & Soft Skills</StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink to="/zertifikate">Zertifikate</StyledNavLink>
        </NavContainer>
      </CardContainer>
     <FotoImg />
    </HomeContainer>
  );
}

export default Home;
