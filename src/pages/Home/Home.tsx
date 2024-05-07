import Weiterbildung from 'pages/Weiterbildung/Weiterbildung';
import { NavContainer, StyledNavLink } from './styles';

function Home() {
  return (
    <>
      Home
      <NavContainer>
        <StyledNavLink
          to="/weiterbildung"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Weiterbildung
        </StyledNavLink>

        <StyledNavLink
          to="/beruflicheErfahrung"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Berufliche Erfahrung
        </StyledNavLink>

        <StyledNavLink
          to="/studium"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Studium
        </StyledNavLink>

        <StyledNavLink  to="/kenntnisse"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}>Kenntnisse
            </StyledNavLink>

            <StyledNavLink  to="/interessen"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}>Interessen</StyledNavLink>
      </NavContainer>
    </>
  );
}

export default Home;
