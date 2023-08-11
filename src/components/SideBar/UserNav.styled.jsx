import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const accentColor = '3E85F3';
const grayscaleColor = 'rgba(52, 52, 52, 0.50)';
const activePageColor = 'E3F3FF';
const animate = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const UserNavWrapper = styled.div``;

export const UserNavHeading = styled.p`
  margin-bottom: 24px;
  color: ${grayscaleColor};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const UserNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const UserNavItem = styled.li`
  width: 185px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 241px;
  }
`;

export const UserNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 12px;
  border-radius: 8px;
  color: ${grayscaleColor};
  transition: color ${animate};

  @media screen and (min-width: 768px) {
    gap: 10px;
    padding-left: 20px;
  }

  &:hover,
  &:focus {
    color: ${accentColor};
  }

  &.active {
    color: ${accentColor};
    background-color: ${activePageColor};
  }
`;

export const UserNavIcon = styled.svg``;

export const UserNavTxt = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
