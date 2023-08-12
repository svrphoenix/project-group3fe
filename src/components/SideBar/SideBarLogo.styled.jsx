import styled from 'styled-components';

const accentColor = '#3E85F3';

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
  color: ${accentColor};
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
