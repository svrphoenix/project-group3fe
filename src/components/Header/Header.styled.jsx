import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    margin-bottom: 32px;
  }
`;

export const HeaderTitleWrapperNoGoose = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Title = styled.h1`
  color: var(--first-Text-Color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter Bold';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const HeaderTitleWrapperGoose = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const GooseMentorImg = styled.img`
  width: 64px;
  height: 60px;
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Motivator = styled.p`
  color: var(--first-Text-Color);
  font-family: 'Inter SemiBold';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  & > span {
    color: var(--first-Bckg-Btn-Color);
  }
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;

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

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;
