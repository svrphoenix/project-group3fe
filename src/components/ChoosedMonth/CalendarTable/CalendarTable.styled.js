import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Cells = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  border: 1px solid #eff2f3;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 14px;
`;
export const Cell = styled.li`
  display: flex;
  min-height: 94px;
  padding: 8px 4px 2px 4px;
  border: 1px solid #eff2f3;

  @media screen and (min-width: 768px) {
    min-height: 144px;
    padding: 4px;
    padding-top: 14px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 125px;
    padding: 8px;
    padding-top: 14px;
  }
`;
export const Number = styled.span`
  display: flex;
  color: #343434;
  font-family: 'Inter Bold';
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  padding: 4px 6px;
  &.active {
    color: #fff;
    border-radius: 8px;
    background: #3e85f3;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    padding: 4px 8px;
    margin-right: 14px;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`;
