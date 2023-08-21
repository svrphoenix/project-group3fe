import { styled } from 'styled-components';

export const WeekdayBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--second-Bckg-Color);
  border: var(--taskitem-border);
  border-radius: 8px;
  margin-bottom: 14px;
  padding: 12px 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    padding: 0 15px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 29px;
  }
`;

export const Weekday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 1px 8px;
  color: var(--sixth-Text-Color);
  font-family: 'Inter SemiBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    gap: 4px;
    padding: 10px 17px;
    font-size: 14px;
  }
`;

export const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
  background-color: transparent;
  border-radius: 8px;
  color: var(--second-Text-Color);
  font-family: 'Inter Bold';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    font-size: 16px;
    line-height: 18px;
  }

  &.current-date {
    background-color: #3e85f3;
    color: #fff;
  }
`;
