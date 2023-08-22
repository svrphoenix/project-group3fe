import { styled } from 'styled-components';

export const ControlPanel = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconBtn = styled.button`
  display: flex;
  gap: 5px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const PopupBtn = styled(IconBtn)`
  width: 130px;
  justify-content: space-between;
  color: var(--LogReg-Text-Color);
  &:hover {
    fill: var(--fourth-Bckg-Color);
  }
`;

export const Vector = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--LogReg-Text-Color);

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    &:hover {
      fill: var(--fourth-Bckg-Color);
    }
  }
`;
