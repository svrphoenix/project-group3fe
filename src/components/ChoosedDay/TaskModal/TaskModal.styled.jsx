import { AddIcon } from 'components/UserForm/Icons';
import { styled } from 'styled-components';

export const TaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px dashed var(--fourth-Bckg-Color);
  background: var(--addtask-Bckg-Btn-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
`;

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
  align-self: center;
`;
