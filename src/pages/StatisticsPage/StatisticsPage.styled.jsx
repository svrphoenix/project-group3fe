import { styled } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StatisticsDiv = styled.div`
  font-family: 'Poppins Regular';
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 335px;
  justify-content: centre;
  border-radius: 16px;
  background: var(--second-Bckg-Color);
  padding: 28px 14px 0 14px;
  color: var(--second-Text-Color);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 132px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding-top: 134px;
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

export const StyledDatePicker = styled(DatePicker)`
  font-family: 'Inter SemiBold';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0px 14px;
  border: 1px solid var(--first-Input-Border-Color);
  border-radius: 8px;
  width: 100%;
  height: 42px;
  color: var(--first-Text-Color);
  background-color: var(--second-Bckg-Color);
  &::placeholder {
    color: var(--placeholder-Color);
    font-size: 12px;
  }
  &:hover,
  &:focus {
    border: 1px solid var(--second-Input-Border-Color);
    outline: none;
  }

  @media screen and (min-width: 375px) {
    width: 299px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    font-size: 16px;
  }
`;
