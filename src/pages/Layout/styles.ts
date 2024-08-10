import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import {
  City,
  Download,
  Linkedin,
  Logo,
  Mail,
  Phone,
  World,
  Xing,
} from "assets"
import { FaWhatsapp } from "react-icons/fa";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #1e1e1e;
  
`

export const Header = styled.header`
  width: 100%;
  min-width: 59vw;
  padding: 3vw 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 77;

  @media (max-width: 480px){
  padding: 4vw;
}

/* @media (min-width: 480px) and (max-width: 1020px){
 
  height: 150px;
} */
`

export const LogoContainer = styled.div`
  cursor: pointer;
  flex-grow: 1;
  :hover {
    transform: scale(1.1);
  }
`
export const LogoComponent = styled.img`
  width: 12.5vw;

  @media (max-width: 480px){
  width: 30vw;
}
`

LogoComponent.defaultProps = { src: Logo }

export const IconMenuContainer = styled.div`
display: none;

@media (max-width: 480px){
  display: flex;
  justify-content: center;
}
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 22vw;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const LanguageSwitcherBox = styled.div`
  @media (max-width: 480px){
    display: none;
}
`

export const NavContainerModalMenu = styled.div`
  display: flex;
  gap: 10vw;
  flex-direction: column;
`


export const NavContainer = styled.div`
  display: flex;
  gap: 5vw;
  justify-content: flex-end;

  @media (max-width: 480px){
  display: none;
}
`
export const StyledNavLink = styled(NavLink)`
  position: relative;
  z-index: 2;
  color: #fcf1e4;
  font-family: "Inter", sans-serif;
  font-size: 1.5vw;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px){
    font-size: 5vw;
}
`



export const Main = styled.main`
  width: 100%;
  min-width: 59vw;
  min-height: 100%;
  padding: 3vw 15vw;
  display: flex;
  

  @media (max-width: 480px){
  padding: 4vw;
}
`
export const Footer = styled.footer`
  width: 100%;
  min-width: 59vw;
  padding: 3vw 15vw;
  display: flex;
  gap: 3vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 44;
  flex: 1;

  @media (max-width: 480px){
  padding: 4vw;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
}
`

export const ContactContainer = styled.div`
  display: flex;
  gap: 4.1vw;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px){
  flex-direction: column;
  align-items: start;
}
`

export const IconContainer = styled.div`
  display: flex;
  gap: 0.25vw;
  align-items: center;

  @media (max-width: 480px){
    gap: 1vw;
}
`

export const IconContainerTransform = styled.div`
  display: flex;
  gap: 0.25vw;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px){
    gap: 1vw;
}
`

export const IconWorld = styled.img`
  width: 1.04vw;
  height: 1.04vw;

  @media (max-width: 480px){
    width: 4vw;
    height: 4vw;
}
`
IconWorld.defaultProps = { src: World }

export const IconCity = styled.img`
  width: 1.04vw;
  height: 1.04vw;

  @media (max-width: 480px){
    width: 4vw;
    height: 4vw;
}
`
IconCity.defaultProps = { src: City }

export const IconPhone = styled.img`
  width: 1.04vw;
  height: 1.04vw;

  @media (max-width: 480px){
    width: 4vw;
    height: 4vw;
}
`
IconPhone.defaultProps = { src: Phone }

export const IconMail = styled.img`
  width: 1.04vw;
  height: 1.04vw;

  @media (max-width: 480px){
    width: 4vw;
    height: 4vw;
}
`
IconMail.defaultProps = { src: Mail }

export const IconDownload = styled.img`
  width: 1.04vw;
  height: 1.04vw;

  @media (max-width: 480px){
    width: 4vw;
    height: 4vw;
}
`
IconDownload.defaultProps = { src: Download }

export const IconLinkedin = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px){
  width: 5vw;
  height: 5vw;
  margin-bottom: 5vw;
}
`
IconLinkedin.defaultProps = { src: Linkedin }


export const IconXing = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px){
    width: 5vw;
  height: 5vw;
}
`
IconXing.defaultProps = { src: Xing }

export const IconText = styled.p`
  color: rgba(252, 241, 228, 0.6);
  font-size: 0.5vw;
  position: relative;
  top: 0.25vw;

  @media (max-width: 480px){
    font-size: 2vw;
}
`
export const AStyled = styled.a`
  text-decoration: none;
  color: rgba(252, 241, 228, 0.6);
  font-size: 0.5vw;
  position: relative;

  @media (max-width: 480px){
    font-size: 2vw;
}
`


export const FaWhatsappComponent = styled(FaWhatsapp)`
color: rgba(252, 241, 228, 0.9);
font-size: 1.7vw;

:hover {
    transform: scale(1.2);
  }

@media (max-width: 480px){
    font-size: 5vw;
    margin-bottom: 5vw;
}



`
