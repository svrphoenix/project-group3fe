import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavWrapper = styled.div``;

export const UserNavHeading = styled.p`
  margin-bottom: 24px;
  color: var(--fourth-Text-Color);
  font-family: 'Inter SemiBold';
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
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--third-Text-Color);
  transition: color var(--cubic);

  @media screen and (min-width: 768px) {
    gap: 10px;
    padding: 16px 20px;
  }

  &:hover,
  &:focus {
    color: var(--user-nav-item-hover);
  }

  &.active {
    color: var(--user-nav-item-hover);
    background-color: var(--user-nav-item-bg-active);
  }
`;

export const Vector = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const UserNavTxt = styled.p`
  font-family: 'Inter SemiBold';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
