import {
  LayotComponent,
  Header,
  Main,
  Footer,
  TelefonNummer,
  LogoImg,
  Email,
  ContactBox,
  H1head,
  H2head,
  LogoNameContainer,
  TitleContainer,
  GitHub,
  StyledNavLink,
} from './styles';

// import {StyledNavLink} from '../../pages/Home/styles'

import { LayotProps } from './types';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { MdMobileFriendly } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

function Layout({ children }: LayotProps) {
  return (
    <LayotComponent>
      <Header>
        <LogoNameContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            <LogoImg />
          </StyledNavLink>
          <StyledNavLink to="/">
            <TitleContainer>
              <H1head>Irene Schneider</H1head>
              <H2head>Softwareentwicklerin</H2head>
            </TitleContainer>
          </StyledNavLink>
        </LogoNameContainer>
        <ContactBox>
          <TelefonNummer>
            <MdMobileFriendly /> Mobil: 01792118677
          </TelefonNummer>
          <Email href="mailto:schneider_irene@outlook.com" target="blank_">
            <MdOutlineMarkEmailUnread /> E-Mail: schneider_irene@outlook.com
          </Email>
        </ContactBox>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <GitHub href="https://github.com/SchneiderIrene" target="blank_">
          Meine Projekte: <FaGithub /> github.com/SchneiderIrene
        </GitHub>
      </Footer>
    </LayotComponent>
  );
}

export default Layout;
