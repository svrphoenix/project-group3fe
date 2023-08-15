import { styled } from 'styled-components';

export const Day = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-last-child(-n + 2) {
    color: #3e85f3;
  }
`;
