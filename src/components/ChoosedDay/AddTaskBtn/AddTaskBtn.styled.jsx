import { styled } from 'styled-components';

export const CreateTasksBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: var(--addtask-Btn-border);
  background: var(--addtask-Bckg-Btn-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  color: var(--first-Text-Color);
`;
export const Vector = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--LogReg-Text-Color);
`;
