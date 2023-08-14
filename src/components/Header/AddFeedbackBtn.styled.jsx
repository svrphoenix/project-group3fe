import styled from 'styled-components';

const accentColor = '#3E85F3';
const accentHoverColor = '#2B78EF';
const txtColor = '#fff';
const animate = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  color: ${txtColor};
  background-color: ${accentColor};
  text-align: center;
  font-family: 'Inter SemiBold';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  transition: background-color ${animate};

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 18px;
  }

  &:hover,
  &:focus {
    background-color: ${accentHoverColor};
  }
`;
