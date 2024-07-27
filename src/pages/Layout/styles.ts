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
  position: relative;
  z-index: 77;
`

export const LogoContainer = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`
export const LogoComponent = styled.img`
  width: 12.5vw;
`

LogoComponent.defaultProps = { src: Logo }

export const NavContainer = styled.div`
  display: flex;
  gap: 5vw;
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
`

export const Main = styled.main`
  width: 100%;
  min-width: 59vw;
  min-height: 60vw;
  padding: 3vw 15vw;
  display: flex;
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
`

export const ContactContainer = styled.div`
  display: flex;
  gap: 4.1vw;
  justify-content: space-around;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 0.25vw;
  align-items: center;
`

export const IconContainerTransform = styled.div`
  display: flex;
  gap: 0.25vw;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
`

export const IconWorld = styled.img`
  width: 1.04vw;
  height: 1.04vw;
`
IconWorld.defaultProps = { src: World }

export const IconCity = styled.img`
  width: 1.04vw;
  height: 1.04vw;
`
IconCity.defaultProps = { src: City }

export const IconPhone = styled.img`
  width: 1.04vw;
  height: 1.04vw;
`
IconPhone.defaultProps = { src: Phone }

export const IconMail = styled.img`
  width: 1.04vw;
  height: 1.04vw;
`
IconMail.defaultProps = { src: Mail }

export const IconDownload = styled.img`
  width: 1.04vw;
  height: 1.04vw;
`
IconDownload.defaultProps = { src: Download }

export const IconLinkedin = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  :hover {
    transform: scale(1.1);
  }
`
IconLinkedin.defaultProps = { src: Linkedin }


export const IconXing = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  :hover {
    transform: scale(1.1);
  }
`
IconXing.defaultProps = { src: Xing }

export const IconText = styled.p`
  color: rgba(252, 241, 228, 0.6);
  font-size: 0.5vw;
  position: relative;
  top: 0.25vw;
`
export const AStyled = styled.a`
  text-decoration: none;
  color: rgba(252, 241, 228, 0.6);
  font-size: 0.5vw;
  position: relative;
`
