
import Elipce from "components/Elipce/Elipse";
import { Card, CardContainer,  Description,  ImgCatFacts, ImgLeafGrow, ImgWeather, ProjectsWrapper, StyledA, StyledNavLink, Title, TitleCard } from "./styles";
import Rectangle from "components/Rectangle/Rectangle";

function Projects(){
    return (
        <ProjectsWrapper>
            <Elipce/>
            <Rectangle/>
            <Title>Meine Projekte</Title>
            <CardContainer>
            <StyledNavLink to={"/projects/weatherApp/home"}>
                  <Card>
                    <ImgWeather/>
                    <Description>Das Projekt ist eine Wetteranwendung, die in TypeScript mit React und Redux entwickelt wurde. Die Anwendung ermöglicht es dem Benutzer, Wetterinformationen für eine gewünschte Stadt abzurufen. Der Benutzer gibt den Namen der Stadt ein, woraufhin eine Anfrage an den Server gesendet wird. Der Server liefert die aktuellen Wetterdaten, die dann in der Anwendung angezeigt werden.</Description>
                    <TitleCard>Weather App</TitleCard>
                </Card>  
                    </StyledNavLink>
                <StyledA href="https://leafgrow-app-foign.ondigitalocean.app/#/" target="_blank">
                <Card>
                    <ImgLeafGrow/>
                    <Description>LeafGrow ist ein Projekt zur Verwaltung des Cannabisanbaus. Der Frontend-Teil der Anwendung wurde mit TypeScript unter Verwendung von React und Redux entwickelt und ermöglicht eine nahtlose Integration mit dem Backend und der Datenbank. Es bietet eine benutzerfreundliche, responsive Benutzeroberfläche, die auf verschiedenen Geräten optimal funktioniert. LeafGrow hilft den Benutzern, alle Aspekte des Cannabisanbaus zu kontrollieren und zu verwalten.</Description>
                    <TitleCard>LeafGrow</TitleCard>
                </Card>
                </StyledA>
                <StyledNavLink to={"/projects/catfacts/catfacts"}>
                <Card>
                    <ImgCatFacts/>
                    <Description>Ein Mini-Projekt, bei dem der Benutzer auf Anfrage vom Server eine interessante Tatsache über Katzen erhält. Der Frontend-Teil der Anwendung wurde mit TypeScript und React entwickelt und verwendet Redux zur Verwaltung des Anwendungszustands. Durch die Integration mit dem Backend kann der Benutzer mit einer einfachen Anfrage wissenswerte Fakten über Katzen abrufen.</Description>
                    <TitleCard>Cat Facts</TitleCard>
                </Card>
                </StyledNavLink>
            </CardContainer>
        </ProjectsWrapper>
    )
}

export default Projects