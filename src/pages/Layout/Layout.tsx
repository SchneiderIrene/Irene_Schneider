import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import {
  LayoutComponent,
  Header,
  Main,
  Footer,
  LogoContainer,
  LogoComponent,
  NavContainer,
  StyledNavLink,
  ContactContainer,
  IconContainer,
  IconWorld,
  IconText,
  IconCity,
  IconPhone,
  IconMail,
  IconDownload,
  IconLinkedin,
  IconXing,
  AStyled,
  IconContainerTransform,
  WhatsappContainer,

} from './styles';
import { LayotProps } from './types';


function Layout({ children }: LayotProps) {
const navigate = useNavigate()

  return (
    <LayoutComponent>
      <Header>
      <LogoContainer onClick={()=>navigate('/')}>
        <LogoComponent/>
      </LogoContainer>
      <NavContainer >
      <StyledNavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none"
            })}
            to={'/experience'}>
             Erfahrung
      </StyledNavLink>
      <StyledNavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none"
            })} 
            to={'/studies'}>
             Studium
      </StyledNavLink>
      <StyledNavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none"
            })}
            to={'/certificates'}>
             Zertifikate
      </StyledNavLink>
        
      </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <ContactContainer>
        <IconContainer>
            <IconWorld/>
            <IconText>Deutschland</IconText>
        </IconContainer>
        <IconContainer>
            <IconCity/>
            <IconText>Straubing</IconText>
        </IconContainer>
        <IconContainer>
            <IconPhone/>
            <IconText>+491792118677</IconText>
        </IconContainer>
        <IconContainerTransform>
            <IconMail/>
            <IconText>
              <AStyled href="mailto:schneider_irene@outlook.com" target='_blank'>schneider_irene@outlook.com</AStyled></IconText>
        </IconContainerTransform>
        <IconContainerTransform>
            <IconDownload/>
            <IconText>
              <AStyled 
              //href='../../../public/Irene Schneider LL.pdf'
              href='/Irene Schneider LL.pdf'
              download="Irene_Schneider_Lebenslauf">Lebenslauf herunterladen</AStyled> 
            </IconText>
        </IconContainerTransform>
      </ContactContainer>
      <ContactContainer>
        <WhatsappContainer>
          <AStyled href='https://wa.me/491792118677' target='_blank'>
            <FaWhatsapp color="rgba(252, 241, 228, 0.9)" fontSize={"1.7vw"}/>
          </AStyled>
        </WhatsappContainer>
       <AStyled href='https://www.linkedin.com/in/irene-schneider-96853a274' target='_blank'>
        <IconLinkedin/>
       </AStyled> 
        <AStyled href='https://www.xing.com/profile/Irene_Schneider56/web_profiles?expandNeffi=true' target='_blank'>
          <IconXing/>
        </AStyled> 
      </ContactContainer>
      <IconText>Juni 2024</IconText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
