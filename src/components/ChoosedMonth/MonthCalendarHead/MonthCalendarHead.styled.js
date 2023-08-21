import { styled } from 'styled-components';

export const DaysOfWeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: var(--second-Bckg-Color);
`;

export const Day = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--sixth-Text-Color);
  &:nth-last-child(-n + 2) {
    color: #3e85f3;
  }
  @media screen and (max-width: 335px) {
    font-size: 4.776vw;
    padding: 16px 8px;
  }
`;
