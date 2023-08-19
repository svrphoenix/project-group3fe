import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const Vector = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--first-Icon-Color);

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
