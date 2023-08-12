import styled from 'styled-components';

const titleColor = '#111';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const HeaderTitleWrapperNoGoose = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${titleColor};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter Bold';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const HeaderTitleWrapperGoose = styled.div``;

export const GooseMentorImg = styled.img``;

export const TxtWrapper = styled.div``;

export const Motivator = styled.p``;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
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
