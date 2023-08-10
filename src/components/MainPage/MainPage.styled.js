import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 128px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #3e85f3;
  height: 100vh;
`;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  text-shadow: 0px 9px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter Bold';
  font-size: 44px;
  line-height: 1.1;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 100px;
    line-height: 1.3;
  }
  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: initial;
      margin-left: 24px;
    }
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  text-shadow: 0px 9px 57px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter SemiBold';
  font-size: 12px;
  line-height: 1.17;
  text-decoration-line: underline;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const NavLinkBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  padding: 15px 29px;
  color: #3e85f3;
`;

export const Section = styled.section`
  padding-top: 64px;
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2n + 1) {
      padding-left: 77px;
    }
    &&:nth-child(2n) {
      flex-direction: row-reverse;
      padding-right: 77px;
    }
  }
`;

export const ItemWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 275px;
  }
`;

export const ItemNumber = styled.p`
  font-family: 'Inter Bold';
  color: #3e85f3;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const ItemTitle = styled.p`
  color: #171820;
  font-family: 'Inter Bold';
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    text-shadow: 0px 9px 57px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
  }
`;
export const ItemDescription = styled.p`
  color: rgba(17, 17, 17, 0.9);
  font-family: 'Inter Medium';
  font-size: 14px;
  line-height: 1.29;
`;

export const ItemBadge = styled.h2`
  display: inline-block;
  padding: 8px 18px;
  color: #3e85f3;
  font-family: 'Inter Bold';
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  background-color: #dcebf7;
  border-radius: 44px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const ItemImg = styled.img`
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;
