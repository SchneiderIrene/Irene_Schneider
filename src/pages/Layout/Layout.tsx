import { useLocation, useNavigate } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
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
  IconMenuContainer,
  ModalContainer,
  NavContainerModalMenu,
  LanguageSwitcherBox,
  FaWhatsappComponent,
} from "./styles"
import { LayotProps } from "./types"
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next"
import { IoMenu } from "react-icons/io5"
import ModalMenu from "components/ModalMenu/ModalMenu"
import { useEffect, useState } from "react"
import { Logo } from "assets"
import i18n from "i18next";

function Layout({ children }: LayotProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
    return () => {
      window.history.scrollRestoration = "auto" // Восстанавливаем стандартное поведение при демонтировании
    }
  }, [location.pathname])

  const urlCV = () => {
    switch (i18n.language) {
      case 'de':
        return 'Irene Schneider LL.pdf';
      case 'en':
        return 'Irene Schneider CV.pdf';
      case 'ru':
        return 'Ирена Шнайдер резюме.pdf';
      default:
        return 'Irene Schneider LL.pdf';
    }
  };

 
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate("/")}>
          <LogoComponent src={Logo} />
        </LogoContainer>
        <IconMenuContainer onClick={handleOpenModal}>
          <IoMenu color="#fcf1e4" fontSize={"10vw"} />
        </IconMenuContainer>
        <ModalMenu isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <LanguageSwitcher />
            <NavContainerModalMenu onClick={handleCloseModal}>
              <StyledNavLink to={"/experience"}>
                {t("header.experience")}
              </StyledNavLink>
              <StyledNavLink to={"/studies"}>
                {t("header.studies")}
              </StyledNavLink>
              <StyledNavLink to={"/certificates"}>
                {t("header.certificates")}
              </StyledNavLink>
            </NavContainerModalMenu>
          </ModalContainer>
        </ModalMenu>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={"/experience"}
          >
            {t("header.experience")}
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={"/studies"}
          >
            {t("header.studies")}
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to={"/certificates"}
          >
            {t("header.certificates")}
          </StyledNavLink>
        </NavContainer>
        <LanguageSwitcherBox>
          <LanguageSwitcher />
        </LanguageSwitcherBox>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ContactContainer>
          <IconContainer>
            <IconWorld />
            <IconText>{t("footer.country")}</IconText>
          </IconContainer>
          <IconContainer>
            <IconCity />
            <IconText>{t("footer.city")}</IconText>
          </IconContainer>
          <IconContainer>
            <IconPhone />
            <IconText>+491792118677</IconText>
          </IconContainer>
          <IconContainerTransform>
            <IconMail />
            <IconText>
              <AStyled
                href="mailto:schneider_irene@outlook.com"
                target="_blank"
              >
                schneider_irene@outlook.com
              </AStyled>
            </IconText>
          </IconContainerTransform>
          <IconContainerTransform>
            <IconDownload />
            <IconText>
              <AStyled
                href={`/${urlCV()}`} //версия ссылки для деплоя, путь
                download={`Irene_Schneider_${t("footer.CV")}_${i18n.language.toString()}_`}
              >
                {t("footer.download")}
              </AStyled>
            </IconText>
          </IconContainerTransform>
        </ContactContainer>
        <ContactContainer>
          <AStyled href="https://wa.me/491792118677" target="_blank">
            <FaWhatsappComponent />
          </AStyled>
          <AStyled
            href="https://www.linkedin.com/in/irene-schneider-96853a274"
            target="_blank"
          >
            <IconLinkedin />
          </AStyled>
          <AStyled
            href="https://www.xing.com/profile/Irene_Schneider56/web_profiles?expandNeffi=true"
            target="_blank"
          >
            <IconXing />
          </AStyled>
        </ContactContainer>
        <IconText>{t("footer.data")}</IconText>
      </Footer>
    </LayoutComponent>
  )
}

export default Layout
