import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Foto, Interessen, Job, Skills, Studium, Weiterbildung, Zertifikate } from 'assets';


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
  grid-auto-flow: column;
  width: 50%;
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 34px;
  font-weight: normal;
  text-decoration: none;
  color: #ff00ff;
  border: 1px solid #ff00ff;
  border-radius: 4px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  //background-color: rgba(255, 0, 255, 0.5);

  :hover {
    transform: scale(1.01);
  }
`;

export const HomeContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: aliceblue;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  box-shadow: 0 -1px 0 #ff00ff;
  gap: 50px;
  padding: 5%;
`;

export const FotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 30%;
  gap: 20px;
 background-image: url(${Foto});
 background-repeat: no-repeat;
 background-size: 100% 100%;
`;

export const FotoBackground = styled.div`
  min-width: 100%;
  min-height: 500px;
   /* background-color: rgba(0, 0, 0, 0.7); */
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 4px;
`;

export const InfoBlock = styled.div`
  min-width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
font-size: 30px;
color: aliceblue;
font-weight: normal;
`

export const JobTitle = styled.h2`
font-size: 24px;
color: aliceblue;
font-weight: normal;
`

export const Adresse = styled.p`
font-size: 16px;
color: aliceblue;
font-weight: normal;
`
export const Tel = styled.p`
font-size: 18px;
color: aliceblue;
font-weight: normal;
`

export const Email = styled.p`
font-size: 18px;
color: aliceblue;
font-weight: normal;
`

export const WeiterbildungImg = styled.div`
  background-image: url(${Weiterbildung});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
  
`;

export const StudiumgImg = styled.div`
  background-image: url(${Studium});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
`;

export const JobImg = styled.div`
  background-image: url(${Job});
  background-size: 120% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
`;

export const SkillsImg = styled.div`
  background-image: url(${Skills});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
`;

export const InteressenImg = styled.div`
  background-image: url(${Interessen});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
`;

export const ZertifikateImg = styled.div`
  background-image: url(${Zertifikate});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  :hover {
    transform: scale(1.01);
  }
`;