import styled from 'styled-components';

export const MainContainer = styled.div``;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 20px 40px 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 32px 38px 32px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% - 289px);
    margin: 0;
    margin-left: auto;
    padding: 40px 32px 32px 32px;
  }
`;

export const ContentInnerBox = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 1087px;
    margin: 0 auto;
  }
`;
