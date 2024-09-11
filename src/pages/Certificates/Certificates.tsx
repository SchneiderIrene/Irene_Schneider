import { AITCertificate, B2, CrashKurs, Diplom,  Java1,  Spring, SQL, Udemy } from "assets"
import {
  Card,
  CardContainer,
  CertificateContainer,
  Img,
  ModalContainer,
  Title,
} from "./styles";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import Elipce from "components/Elipce/Elipse";
import Rectangle from "components/Rectangle/Rectangle";
import { useTranslation } from "react-i18next";


function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenWithChildren, setIsModalOpenWithChildren] = useState(false)
  const [background, setBackground] = useState<string>('')
  const [rotate, setRotate] = useState<boolean>(false)

  const handleOpenModal = (image: string, rotate: boolean = false) => {
    setBackground(image)
    setIsModalOpen(true)
    setRotate(rotate)
  }
  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenModalWithChildren = (image: string, rotate: boolean = false) => {
    setIsModalOpenWithChildren(true)
    setBackground(image)
    setRotate(rotate)
}

  const handleCloseModalWithChildren = () => setIsModalOpenWithChildren(false)
  
  const {t} = useTranslation();

  return (
    <CertificateContainer>
       <Elipce/>
       <Rectangle/>
      <Title>{t("certificates.certificates_title")}</Title>
      <CardContainer>
            <Card
          style={{ backgroundImage: `url(${Diplom})` }}
          onClick={()=>handleOpenModal(Diplom)}/>
        <Card
          style={{ backgroundImage: `url(${AITCertificate})` }}
          onClick={()=>handleOpenModal(AITCertificate, true)}
        />
        <Card
          style={{ backgroundImage: `url(${B2})` }}
          onClick={()=>handleOpenModal(B2)}
        />
        <Card
          style={{ backgroundImage: `url(${CrashKurs})` }}
          onClick={()=>handleOpenModal(CrashKurs)}
        />
        <Card
          style={{ backgroundImage: `url(${Udemy})` }}
          onClick={()=>handleOpenModalWithChildren('', true)}
        />
      </CardContainer>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} rotate={rotate} backgroundImage={background}/>
      <Modal isOpen={isModalOpenWithChildren} onClose={handleCloseModalWithChildren} rotate={rotate} backgroundImage={background}>
        <ModalContainer>
            <Img src={Java1}/>
            <Img src={Udemy}/>
            <Img src={Spring}/>
            <Img src={SQL}/>
        </ModalContainer>
      </Modal>
      
    </CertificateContainer>
  )
}

export default Certificates
