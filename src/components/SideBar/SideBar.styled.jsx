import styled from 'styled-components';

export const SideBarBox = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 289px;
    height: 100vh;
    padding: 32px 24px 24px 24px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;
