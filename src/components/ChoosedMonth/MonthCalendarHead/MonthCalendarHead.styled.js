import { styled } from 'styled-components';

export const DaysOfWeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid var(--calendar-border-btn-group);
  background-color: var(--calendar-background);
`;

export const Day = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: var(--calendar-text-color);
  &:nth-last-child(-n + 2) {
    color: #3e85f3;
  }
  @media screen and (max-width: 335px) {
    font-size: 4.776vw;
    padding: 16px 8px;
  }
`;
