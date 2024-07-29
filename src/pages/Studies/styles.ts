import styled from "@emotion/styled";

export const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  position: relative;
  z-index: 35;
  width: 100%;
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
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.42vw;
  border: 0.05vw solid rgba(252, 241, 228, 0.7);
  position: relative;
  z-index: 3;
  gap: 1.66vw;
  padding: 3vw;
`
export const TitleStudium = styled.h2`
 font-size: 1.46vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;
`

export const Country = styled.h3`
  font-size: 1.04vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;`


export const Period = styled.h3`
  font-size: 1.04vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;`

export const DescriptionStudies = styled.p`
  font-size: 1.04vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;
`
export const StyledAStudies = styled.a`
  color: #fcf1e4;
  text-decoration: none;
  display: inline-block;
 :hover {
       transform: scale(1.1);
  }
`