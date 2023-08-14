import styled from 'styled-components';
import svg from '../../../../public/sprite.svg';

export const StyledTaskForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTaskLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTaskInput = styled.input`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 15px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

export const RadioButtonGorup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const RadioButtonLabel = styled.label``;

export const RadioButtonInput = styled.input`
  position: absolute;
`;

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelBtn = styled.button`
  cursor: pointer;
`;

export const ClockWrapp = styled.div`
  width: 17px;
  height: 17px;
`;
