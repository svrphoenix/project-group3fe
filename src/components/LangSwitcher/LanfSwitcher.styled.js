import { styled } from 'styled-components';

export const Button = styled.button`
  width: 30px;
  padding: 4px;
  border-radius: 5px;
  border: none;
  background-color: var(--period-type-btn-hover-color);
  color: var(--calendar-light-theme-primary);
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  transition: background-color var(--cubic);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 40px;
    padding: 8px;
    font-size: 12px;
    line-height: 15px;
  }
  &:hover {
    background-color: #2b78ef;
    color: #fff;
  }
`;
