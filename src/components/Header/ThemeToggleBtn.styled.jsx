import styled from 'styled-components';

const accentColor = '#3E85F3';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const Vector = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${accentColor};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
