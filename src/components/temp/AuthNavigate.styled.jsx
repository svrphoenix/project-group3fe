import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigate = styled(NavLink)`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter SemiBold;
  font-size: 12px;
  line-height: 1.16;
  text-decoration-line: underline;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-top: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 30px;
  padding: 10px 0px;
  width: 70px;

  &:hover,
  &:focus {
    color: #2b78ef;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 24px;
    width: 100px;
  }
`;
