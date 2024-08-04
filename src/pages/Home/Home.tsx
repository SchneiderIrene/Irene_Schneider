import Button from "components/Button/Button";
import { ArticleText, ArticleTextService, Block, BlockContainer, ButtonControl, ContainerEclipse, DescriptionBlock, ElipceComponent, FotoArticle,  HeroArticle, HeroSection, HomeContainer, Linie, NummerBlock, ServiseSection, TextHeroSection, TextServiceSection, TitleBlock, TitleHeroSection, TitleServiceSection } from "./styles";
import { useNavigate } from "react-router-dom";
import Elipce from "components/Elipce/Elipse";
import { useTranslation } from "react-i18next";

function Home(){
    const navigate = useNavigate()

    const {t, i18n} = useTranslation();
    console.log(i18n.language);
    

    
    return (
        <HomeContainer>
            <HeroSection>
                <HeroArticle>
                <ArticleText>
                <TextHeroSection>{t("home.hello")}</TextHeroSection>
                <TitleHeroSection>{t("home.name")}</TitleHeroSection>
                <TextHeroSection>{t("home.promising")} <span style={ {fontWeight : "bold"}}>Frontend-{t("home.span")}</span>, {t("home.specialized")}</TextHeroSection>
                </ArticleText>
                <ButtonControl>
                    <Button name="Projekten" onButtonClick={()=>{navigate("/projects")}}/>
                    <Button name="GitHub" onButtonClick={()=>window.open("https://github.com/SchneiderIrene", '_blank', 'noopener,noreferrer')} />
                </ButtonControl>
                </HeroArticle>
                 <FotoArticle/>
                 <ContainerEclipse>
                     <ElipceComponent/>
                 </ContainerEclipse>
            </HeroSection>
            
            <ServiseSection>
                <Elipce/>
                <ArticleTextService>
                    <TitleServiceSection>Was kann ich tun</TitleServiceSection>
                    <TextServiceSection>Alle Arten von Webanwendungen für unterschiedliche Anforderungen Personalisierte Lösungen und individuelle Herangehensweisen für jedes Projektteam.</TextServiceSection>
                </ArticleTextService>
                <BlockContainer>
                    <Block>
                        <NummerBlock>1</NummerBlock>
                        <TitleBlock>Front-End Entwicklung und nahtlose Backend-Integration</TitleBlock>
                        <DescriptionBlock>Nutzen Sie meine Expertise in JavaScript, TypeScript, React, Redux, HTML5, CSS und Tailwind für die Entwicklung dynamischer und benutzerfreundlicher Webanwendungen. Implementierung nahtloser Interaktionen zwischen Frontend und Backend mittels API und Node.js für eine optimale Benutzererfahrung.</DescriptionBlock>
                    </Block>
                    <Linie/>
                    <Block>
                        <NummerBlock>2</NummerBlock>
                        <TitleBlock>UI/UX Design und <br/>Prototyping</TitleBlock>
                        <DescriptionBlock>Erstellen Sie ansprechende Benutzeroberflächen mit modernen Tools wie Figma. Sicherstellung eines responsiven Designs durch Media-Queries, um eine optimale Darstellung auf verschiedenen Geräten zu gewährleisten.</DescriptionBlock>
                    </Block>
                    <Linie/>
                    <Block>
                        <NummerBlock>3</NummerBlock>
                        <TitleBlock>Backend Entwicklung und Testing</TitleBlock>
                        <DescriptionBlock>Entwicklung robuster Backend-Lösungen mit Java und dem Spring Framework (Spring Boot, MVC, Security, Data JPA). Effiziente Verwaltung von Abhängigkeiten mit Maven und Deployment von Anwendungen auf Tomcat. Umfassendes Testing mit JUnit5 und Postman sowie strukturierte Versionskontrolle mit Git und GitHub.</DescriptionBlock>
                    </Block>
                </BlockContainer>
            </ServiseSection>
        </HomeContainer>
    )
}

export default Home