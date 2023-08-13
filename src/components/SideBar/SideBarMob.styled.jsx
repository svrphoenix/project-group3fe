import styled from 'styled-components';

export const SideBarMobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 225px;
  height: 100vh;
  padding: 24px 20px;

  @media screen and (min-width: 768px) {
    width: 289px;
    height: 100vh;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Vector = styled.svg`
  position: absolute;
  z-index: 1;
  top: 28px;
  left: 20px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    top: 29px;
    left: 32px;
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
