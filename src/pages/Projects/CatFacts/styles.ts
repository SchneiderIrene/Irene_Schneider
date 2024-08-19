import styled from "@emotion/styled"
import { CatFactsBackground } from "assets"

export const CatFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.04vw;
  padding: 2.6vw;
  flex: 1;
  background-image: url(${CatFactsBackground});
  background-size: cover;
  background-position: center;

  @media (max-width: 480px) {
    gap: 5vw;
    min-height: 50vh;
  }
`
interface ButtonStylesProps {
  disabled?: boolean
}
export const ButtonCat = styled.button<ButtonStylesProps>`
  width: 100%;
  height: 3.2vw;
  outline: none;
  border: 0.15vw solid #9fd179;
  padding: 0.5vw;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(196, 209, 185, 0.3)" : "transparent"};
  background-size: contain;
  color: #dbd396;
  font-weight: bold;
  font-size: 1.04vw;
  cursor: pointer;
  :hover {
    ${({ disabled }) => (disabled ? "none" : "transform: scale(1.1)")}
  }

  @media (max-width: 480px) {
    height: 15vw;
    font-size: 1rem;

    :hover {
      transform: none;
    }
  }
`

interface ResultContainerPropsStyled {
  isShowBlock?: boolean
}

export const ResultContainer = styled.div<ResultContainerPropsStyled>`
  width: 100%;
  color: rgba(196, 209, 185, 0.9);
  font-size: 1.04vw;
  display: ${({ isShowBlock }) => (isShowBlock ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.04vw;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`

export const CatFactWrapper = styled.div`
  border: 0.05vw solid rgba(196, 209, 185, 0.6);
  width: 100%;
  border-radius: 0.2vw;
  padding: 0.52vw;

  @media (max-width: 480px) {
    border: 0.5vw solid rgba(196, 209, 185, 0.6);
    border-radius: 0.8vw;
    padding: 2vw;
  }
`
