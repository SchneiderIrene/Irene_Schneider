import styled from '@emotion/styled';
import { hover } from '@testing-library/user-event/dist/hover';
import { Logo, HeaderBackground } from 'assets';
import { NavLink } from 'react-router-dom';

export const LayotComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  /* background-image: url(${HeaderBackground}); */
  background-color: rgba(0, 0, 0, 0.9);
  background-size: cover;
  color: aliceblue;
  /* height: 190px; */
`;

export const LogoNameContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const H1head = styled.h1`
  font-size: 24px;
`;

export const H2head = styled.h1`
  font-size: 18px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TelefonNummer = styled.p`
  font-size: 16px;
  color: aliceblue;
`;

export const Email = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: aliceblue;

  :hover{
color: #FA27B8;}
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
  width: 100%;
  padding: 20px;
  color: aliceblue;
  /* background-image: url(${HeaderBackground});
  transform: scaleX(-1);
  background-size: cover; */
  background-color: rgba(0, 0, 0, 0.9);
`;

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: aliceblue;
  :hover{
color: #FA27B8;}

`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
LogoImg.defaultProps = { src: Logo };

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: aliceblue;

  :hover {
    color: #fa27b8;
  }
`;
