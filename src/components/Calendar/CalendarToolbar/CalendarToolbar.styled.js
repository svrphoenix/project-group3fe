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
  border: 1px solid rgba(220, 227, 229, 0.5);
`;
export const Day = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-last-child(-n + 2) {
    color: #3e85f3;
  }
`;

export const DayNumber = styled.span`
  color: #343434;
  font-family: 'Inter Bold';
  font-size: 12px;
  line-height: 1.17;
  margin-top: 6px;
  &.current-date {
    color: #fff;
    border-radius: 8px;
    background: #3e85f3;
    padding: 4px 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    margin-top: 4px;
  }
`;
