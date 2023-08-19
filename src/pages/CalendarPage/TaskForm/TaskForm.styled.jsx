import styled from 'styled-components';

export const TaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TaskLabelStyled = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: #343434;
`;

export const TaskInputStyled = styled.input`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 15px 15px;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 14px;
  outline: none;
  border: 1px solid #f7f7f7;
  border-radius: 8px;
  background-color: #f7f7f7;
  color: #343434;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #3e85f3;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0);
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
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #343434;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RadioButtonInput = styled.input`
  margin-right: 6px;
  appearance: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  outline: 1px solid
    ${props => {
      if (props.checked) {
        switch (props.value) {
          case 'low':
            return 'rgba(114, 194, 248, 0.3)';
          case 'medium':
            return 'rgba(243, 178, 73, 0.3)';
          case 'high':
            return 'rgba(234, 61, 101, 0.3)';
          default:
            return '';
        }
      }

      switch (props.value) {
        case 'low':
          return '#72c2f8';
        case 'medium':
          return '#f3b249';
        case 'high':
          return '#ea3d65';
        default:
          return '';
      }
    }};

  border: 1px solid
    ${props => {
      if (props.checked) {
        return '#ffffff';
      }

      switch (props.value) {
        case 'low':
          return '#72c2f8';
        case 'medium':
          return '#f3b249';
        case 'high':
          return '#ea3d65';
        default:
          return '';
      }
    }};

  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72c2f8';
      case 'medium':
        return '#f3b249';
      case 'high':
        return '#ea3d65';
      default:
        return '';
    }
  }};

  @media screen and (min-width: 375px) {
    width: 10px;
    height: 10px;
    border: 2px solid
      ${props => {
        if (props.checked) {
          return '#ffffff';
        }

        switch (props.value) {
          case 'low':
            return '#72c2f8';
          case 'medium':
            return '#f3b249';
          case 'high':
            return '#ea3d65';
          default:
            return '';
        }
      }};

    outline: 2px solid
      ${props => {
        if (props.checked) {
          switch (props.value) {
            case 'low':
              return 'rgba(114, 194, 248, 0.3)';
            case 'medium':
              return 'rgba(243, 178, 73, 0.3)';
            case 'high':
              return 'rgba(234, 61, 101, 0.3)';
            default:
              return '';
          }
        }

        switch (props.value) {
          case 'low':
            return '#72c2f8';
          case 'medium':
            return '#f3b249';
          case 'high':
            return '#ea3d65';
          default:
            return '';
        }
      }};
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 12px 40px;
  background-color: #3e85f3;
  border-radius: 8px;
  transition: background-color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 40px;
  }
`;

export const EditIcon = styled.svg`
  display: block;
  stroke: #ffffff;
  fill: transparent;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 12px 21px;
  background-color: #3e85f3;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 51px;
  }
`;

export const CancelBtn = styled.button`
  cursor: pointer;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #343434;
  outline: none;
  border: none;
  padding: 12px 18px;
  background-color: #e5edfa;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #f7f7f7;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 48px;
  }
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
