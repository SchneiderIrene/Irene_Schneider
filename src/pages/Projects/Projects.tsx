
import Elipce from "components/Elipce/Elipse";
import { Card, CardContainer,  Description,  ImgCatFacts, ImgLeafGrow, ImgWeather, ProjectsWrapper, StyledA, StyledNavLink, Title, TitleCard } from "./styles";
import Rectangle from "components/Rectangle/Rectangle";
import { useTranslation } from "react-i18next";

function Projects(){
    const { t } = useTranslation()
    return (
        <ProjectsWrapper>
            <Elipce/>
            <Rectangle/>
            <Title>{t("projects.titleProject")}</Title>
            <CardContainer>
            <StyledNavLink to={"/projects/weatherApp/home"}>
                  <Card>
                    <ImgWeather/>
                    <Description>{t("projects.discription1")}</Description>
                    <TitleCard>{t("projects.title1")}</TitleCard>
                </Card>  
                    </StyledNavLink>
                <StyledA href="https://leafgrow-app-foign.ondigitalocean.app/#/" target="_blank">
                <Card>
                    <ImgLeafGrow/>
                    <Description>{t("projects.discription2")}</Description>
                    <TitleCard>{t("projects.title2")}</TitleCard>
                </Card>
                </StyledA>
                <StyledNavLink to={"/projects/catfacts/catfacts"}>
                <Card>
                    <ImgCatFacts/>
                    <Description>{t("projects.discription3")}</Description>
                    <TitleCard>{t("projects.title3")}</TitleCard>
                </Card>
                </StyledNavLink>
            </CardContainer>
        </ProjectsWrapper>
    )
}

export default Projects