import { styled } from 'styled-components';

export const StatisticsDiv = styled.div`
  font-family: 'Poppins Regular';
  display: flex;
  flex-direction: column;
  gap: 40px;
  width:335px
  justify-content: centre;
  border-radius: 16px;
  background: var(--white, #FFF);
  padding: 28px 14px 0 14px;

  @media screen and (min-width: 768px) {
   width: 704px;
  padding-top: 132px


  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding-top: 134px
  }
`;

export const StatisticsHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 576px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 780px;
  }
`;

export const ChartLegend = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ChartLegendItem = styled.li`
  &::before {
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
  &:first-child::before {
    background: #ffd2dd;
  }
  &:last-child::before {
    background: #3e85f3;
  }
`;
