import styled from 'styled-components';

const accentColor = '#3E85F3';
const accentHoverColor = '#2B78EF';
const whiteColor = '#FFFFFF';
const animate = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 131px;
  padding: 14px 28px;
  border: none;
  border-radius: 16px;
  background-color: ${accentColor};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  transition: background-color ${animate};

  @media screen and (min-width: 768px) {
    gap: 11px;
    min-width: 141px;
    padding: 16px 23px;
  }

  &:hover,
  &:focus {
    background-color: ${accentHoverColor};
  }
`;

export const Txt = styled.p`
  color: ${whiteColor};
  font-family: 'Inter SemiBold';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const Vector = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${whiteColor};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
