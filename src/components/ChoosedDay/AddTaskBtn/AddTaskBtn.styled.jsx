import { styled } from 'styled-components';

export const CreateTasksBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  width: calc(100% - 13px);
  height: 48px;
  border-radius: 8px;
  border: var(--addtask-Btn-border);
  background-color: var(--addtask-Btn-Day-Bckg-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  color: var(--first-Text-Color);
  transition: background-color var(--cubic);

  &:hover,
  &:focus {
    background-color: var(--addtask-Btn-Day-hover-color);
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 14px);
  }
`;
export const Vector = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--addtask-Btn-Day-svg-color);
`;
