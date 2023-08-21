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
`;
