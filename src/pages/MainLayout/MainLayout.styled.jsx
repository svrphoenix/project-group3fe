import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    width: calc(100vw - 289px);
  }
`;
