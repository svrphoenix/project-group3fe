import { styled } from 'styled-components';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: inherit;
    margin-bottom: 32px;
  }
`;

export const DaysOfWeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid var(--calendar-border-btn-group);
`;
