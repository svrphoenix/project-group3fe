import { styled } from 'styled-components';

export const TasksBoxOuter = styled.div`
  overflow: auto;
  padding-right: 7px;
  margin-bottom: 32px;
  scrollbar-width: thin;
  scrollbar-color: var(--vertical-scrollbar-thumb-color)
    var(--vertical-scrollbar-track-color);

  &::-webkit-scrollbar {
    width: 6px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--vertical-scrollbar-track-color);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scrollbar-thumb-color);
    border-radius: 50px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 6px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 14px;
    }
  }
`;

export const TasksBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-height: 40vh;
`;
