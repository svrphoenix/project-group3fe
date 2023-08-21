import styled from 'styled-components';

import { EditIconSvg } from './EditIconSvg';
import { AddIcon } from 'components/UserForm/Icons';
import { Form, ErrorMessage } from 'formik';

export const TaskFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const ErrorMess = styled(ErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  font-size: 12px;
  font-family: 'Inter Medium';
  line-height: 14px;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TaskLabelStyled = styled.label`
  font-family: 'Inter Medium';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: var(--addtask-Label-text-color);
`;

export const TaskInputStyled = styled.input`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 15px 15px;

  font-family: 'Inter SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 14px;
  outline: none;
  border: 1px solid var(--addtask-Input-Border-color);
  border-radius: 8px;
  background-color: var(--addtask-Input-Bckg-color);
  color: var(--addtask-Input-Text-color);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid var(--addtask-Input-Hover-color);
  }

  &::-webkit-calendar-picker-indicator {
    filter: var(--addtask-icon-color-time-input);
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;

  @media screen and (min-width: 375px) {
    gap: 15px;
  }
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 2px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const RadioButtonGorup = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonLabel = styled.label`
  font-family: 'Inter SemiBold';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: var(--addtask-RadioButtonLabel-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const getColorByValue = value => {
  switch (value) {
    case 'low':
      return 'var(--addtask-RadioButton-low-color)';
    case 'medium':
      return 'var(--addtask-RadioButton-middle-color)';
    case 'high':
      return 'var(--addtask-RadioButton-high-color)';
    default:
      return '';
  }
};

const getOutlineByValue = (value, checked) => {
  if (checked) {
    const colorMap = {
      low: 'var(--addtask-RadioButton-low-checked-color)',
      medium: 'var(--addtask-RadioButton-middle-checked-color)',
      high: 'var(--addtask-RadioButton-high-checked-color)',
    };
    return colorMap[value] || '';
  }
  return getColorByValue(value);
};

export const RadioButtonInput = styled.input`
  margin-right: 16px;
  appearance: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  outline: 1px solid ${props => getOutlineByValue(props.value, props.checked)};
  border: 1px solid
    ${props =>
      props.checked
        ? 'var(--addtask-RadioButton-outline-default-color)'
        : getColorByValue(props.value)};
  background-color: ${props => getColorByValue(props.value)};

  @media screen and (min-width: 375px) {
    width: 10px;
    height: 10px;
    border: 2px solid
      ${props =>
        props.checked
          ? 'var(--addtask-RadioButton-outline-default-color)'
          : getColorByValue(props.value)};
    outline: 2px solid ${props => getOutlineByValue(props.value, props.checked)};
  }

  &:hover,
  &:focus {
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;
  width: 100%;
`;

export const EditButton = styled.button`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--addtask-EditBtn-text-color);
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: var(--addtask-EditBtn-Bckg-color);
  border-radius: 8px;
  transition: background-color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--addtask-EditBtn-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 40px;
  }
`;

export const AddButton = styled.button`
  gap: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--addtask-AddBtn-text-color);
  outline: none;
  border: none;
  padding: 12px 21px;
  background-color: var(--addtask-AddBtn-Bckg-color);
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--addtask-AddBtn-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 51px;
  }
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  width: 100%;
  font-family: 'Inter SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--addtask-Cancel-Btn-text-color);
  outline: none;
  border: none;
  padding: 12px 18px;
  background-color: var(--addtask-Cancel-Bckg-color);
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--addtask-Cancel-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 48px;
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  align-self: center;
`;

export const StyledEditIcon = styled(EditIconSvg)`
  align-self: center;
`;
