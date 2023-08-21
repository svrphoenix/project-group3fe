import { styled } from 'styled-components';

export const ScrollableContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export const TasksColumnWrapper = styled.div`
  display: grid;
  align-items: start;
  grid-auto-flow: column;
  grid-gap: 16px;
  overflow-x: auto;
  width: 335px;
  padding-bottom: 14px;
  scrollbar-width: thin;
  scrollbar-color: var(--horizontal-scrollbar-thumb-color)
    var(--horizontal-scrollbar-track-color);

  &::-webkit-scrollbar {
    width: 6px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--horizontal-scrollbar-track-color);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--horizontal-scrollbar-thumb-color);
    border-radius: 50px;
  }
  @media screen and (min-width: 768px) {
    scrollbar-width: auto;
    width: 704px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 14px;
    }
  }
  @media screen and (min-width: 1440px) {
    grid-gap: 27px;
    width: 100%;
  }
`;
