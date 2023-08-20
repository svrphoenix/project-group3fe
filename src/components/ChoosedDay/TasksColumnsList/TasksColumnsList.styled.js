import { styled } from 'styled-components';

export const ScrollableContainer = styled.div`
  display: grid;
  justify-content: center;
`;
export const TasksColumnWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  overflow-x: auto;
  width: 335px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    grid-gap: 27px;
    width: 100%;
  }
`;
