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
  padding-top: 28px;
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

export const PeriodPaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 0;
  }
`;

export const CustomDatePickerWidth = styled.div`
  > div.react-datepicker-wrapper,
  > div
    > div.react-datepicker__input-container
    > div
    > div.react-datepicker__input-container
    input {
    width: 200px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  color: #fff;
  text-align: center;
  font-family: 'Inter Bold';
  font-size: 14px;
  line-height: 1.13;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #3e85f3;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  max-width: 100%;

  &:focus {
    outline: none;
    box-shadow: rgba(62, 133, 243, 0.4) 0px 4px 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  border: 1px solid var(--first-Input-Border-Color);
  border-radius: 8px;
`;

export const Button = styled.button`
  color: #343434;
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid var(--first-Input-Border-Color);
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: 0px;
  border: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  min-width: 38px;
  padding: 8px 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--second-Bckg-Color);
  &:disabled {
    color: #dce3e5;
  }
  &:hover {
    background-color: var(--first-Bckg-Color);
    color: var(--second-Text-Color);
  }
`;
