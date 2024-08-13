import styled from "@emotion/styled"

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  flex: 1;
  position: relative;

  @media (max-width: 480px){
    gap: 15vw;
    margin-bottom: 15vw;
  }
`
export const Title = styled.h1`
  font-size: 3.75vw;
  font-weight: bold;
  text-shadow:
    2px 2px 0px rgba(252, 241, 228, 0.1),
    -2px -2px 0px rgba(252, 241, 228, 0.1);
  color: #fcf1e4;
  position: relative;
  z-index: 3;

  @media (max-width: 480px){
    font-size: 1.2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  gap: 0.52vw;
  width: 70vw;

  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10vw;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 15.62vw;
  height: 18.22vw;
  border-radius: 0.42vw;
  border: 0.05vw solid rgba(252, 241, 228, 0.7);
  position: relative;
  z-index: 3;
  background-size: 100%;
  filter: brightness(0.4);
  cursor: pointer;
  :hover {
    transform: scale(1.06);
    filter: brightness(0.8);
  }

  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70vw;
    height: 90vw;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.52vw;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Img = styled.img`
  position: relative;
  top: 158%;
  width: 100%;
  object-fit: contain;
`
