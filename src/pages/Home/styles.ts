import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Foto } from 'assets';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
  grid-auto-flow: column;
  width: 100%;
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: aliceblue;
  border: 2px solid #ff00ff;
  border-radius: 4px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(252, 15, 192, 0.1);

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
  padding: 100px;
`;

export const FotoContainer = styled.div`
  display: flex;
`;

export const FotoImg = styled.img`
  border-radius: 7px;

  :hover {
    transform: scale(1.01);
  }
`;

FotoImg.defaultProps = { src: Foto };
