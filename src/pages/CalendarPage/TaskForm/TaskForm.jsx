import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledTaskForm,
  StyledTaskLabel,
  StyledTaskInput,
  Wrapper,
  RadioButtonGorup,
  RadioButtonLabel,
  RadioButtonInput,
  AddButton,
  CancelBtn,
} from './TaskForm.styled';

const TaskForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <Formik>
      <StyledTaskForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <StyledTaskLabel>
          <StyledTaskInput />
        </StyledTaskLabel>
      </StyledTaskForm>
      <Wrapper>
        <StyledTaskLabel>
          <StyledTaskInput />
        </StyledTaskLabel>
        <StyledTaskLabel>
          <StyledTaskInput />
        </StyledTaskLabel>
          </Wrapper>
          <RadioButtonGorup>
              <RadioButtonLabel>
                  <RadioButtonInput/>
              </RadioButtonLabel>
          </RadioButtonGorup>
    </Formik>
  );
};

export default TaskForm;

// export const StyledTaskForm = styled.form`
// export const StyledTaskLabel = styled.label`
// export const StyledTaskInput = styled.input`
// export const RadioButtonGorup = styled.div`
// export const RadioButtonLabel = styled.label``;
// export const RadioButtonInput = styled.input`
// export const AddButton = styled.button`
// export const CancelBtn = styled.button`
// export const ClockIcon = styled(IconClock)`
// export const ClockWrapp = styled.div`
