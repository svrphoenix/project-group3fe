import styled from 'styled-components';


export const TaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const TaskLabelStyled = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: rgba(250, 250, 250, 0.3);
`;

export const TaskInputStyled = styled.input`
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

export const ButtonIcon = styled.button`
  flex-grow: 1;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background: #3e85f3;
  border-radius: 8px;
  border: none;
  color: green;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
`;

export const Errors = styled.span`
  position: absolute;
  min-height: 14px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: purple;
`;