import styled from "@emotion/styled"

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  width: 100%;
  position: relative;
  z-index: 33;

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
  flex-direction: column;
  gap: 1.04vw;
  width: 100%;
  position: relative;
  z-index: 3;
`

