import styled from 'styled-components';

export const SideBarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: 1440px) {
    gap: 10px;
  }
`;

export const LogoImg = styled.img`
  width: 36px;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;

export const LogoTxt = styled.p`
  color: var(--sidebar-logo-title);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter Bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  & > span {
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const CloseSideBarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Vector = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--second-Text-Color);

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
