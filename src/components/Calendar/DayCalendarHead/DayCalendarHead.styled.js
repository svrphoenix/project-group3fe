import { styled } from 'styled-components';

export const Day = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:nth-last-child(-n + 2) {
    color: #3e85f3;
  }
  @media screen and (max-width: 335px) {
    font-size: 4.776vw;
    padding: 16px 8px;
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
