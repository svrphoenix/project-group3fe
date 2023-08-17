import { css, styled } from 'styled-components';

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
  font-family: 'Inter Medium';
  font-size: 16px;
  line-height: 1.13;
  min-width: 82px;
  padding: 8px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: inherit;
  background-color: #e3f3ff;
  &.active {
    background-color: #cae8ff;
  }
  &:hover,
  &:focus {
    background-color: #cae8ff;
  }
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  color: #3e85f3;
  border-radius: 8px;
`;

export const Button = styled.button`
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  ${sharedStyle};
`;
