import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f6f9;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 24px 20px 40px 20px;
  background-color: #f7f6f9;
  @media screen and (min-width: 768px) {
    padding: 24px 32px 38px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 289px);
    padding: 40px 32px 32px 32px;
  }
`;
