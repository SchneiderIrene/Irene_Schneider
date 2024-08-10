import Button from "components/Button/Button";
import { ArticleText, ArticleTextService, Block, BlockContainer, ButtonControl, ContainerEclipse, DescriptionBlock, ElipceComponent, FotoArticle,  HeroArticle, HeroSection, HomeContainer, Linie, NummerBlock, ServiseSection, TextHeroSection, TextServiceSection, TitleBlock, TitleHeroSection, TitleServiceSection } from "./styles";
import { useNavigate } from "react-router-dom";
import Elipce from "components/Elipce/Elipse";
import { useTranslation } from "react-i18next";

function Home(){
    const navigate = useNavigate()

    const {t} = useTranslation();
   
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
                    <Button name={t("home.project_Button")} onButtonClick={()=>{navigate("/projects")}}/>
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
                    <TitleServiceSection>{t("home.what_can_i_do")}</TitleServiceSection>
                    <TextServiceSection>{t("home.all_kinds")}</TextServiceSection>
                </ArticleTextService>
                <BlockContainer>
                    <Block>
                        <NummerBlock>1</NummerBlock>
                        <TitleBlock>Frontend {t("home.block1_title")}</TitleBlock>
                        <DescriptionBlock>{t("home.block1_discreption")}</DescriptionBlock>
                    </Block>
                    <Linie/>
                    <Block>
                        <NummerBlock>2</NummerBlock>
                        <TitleBlock>UI/UX {t("home.block2_title")} <br/>{t("home.br")}</TitleBlock>
                        <DescriptionBlock>{t("home.block2_discreption")}</DescriptionBlock>
                    </Block>
                    <Linie/>
                    <Block>
                        <NummerBlock>3</NummerBlock>
                        <TitleBlock>Backend {t("home.block3_title")}</TitleBlock>
                        <DescriptionBlock>{t("home.block3_discreption")}</DescriptionBlock>
                    </Block>
                </BlockContainer>
            </ServiseSection>
        </HomeContainer>
    )
}

export default Home