const { css, styled } = require('styled-components');

const sharedStyle = css`
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
  background-color: var(--calendar-background);
  &:disabled {
    color: var(--calendar-btn-disabled);
  }
  &:hover {
    background-color: var(--calendar-btn-hover-color);
  }
`;

export const PeriodPaginatorWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: space-between;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    justify-content: initial;
    margin-bottom: initial;
  }
`;

export const PeriodPaginatorDisplay = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Inter Bold';
  font-size: 16px;
  line-height: 1.13;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #3e85f3;
  padding: 8px 12px;
  margin-right: 8px;
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  border: 1px solid var(--calendar-border-btn-group);
  border-radius: 8px;
`;

export const Button = styled.button`
  color: var(--calendar-txt-color);
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid var(--calendar-border-btn-group);
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  ${sharedStyle};
`;
