import { Formik, Field} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import {
  TaskFormStyled,
  TaskContainer,
  TaskLabelStyled,
  TaskInputStyled,
  TimeWrapper,
  RadioButtonContainer,
  RadioButtonGorup,
  RadioButtonLabel,
  RadioButtonInput,
  ButtonContainer,
  AddButton,
  CancelBtn,
  EditButton,
  StyledAddIcon,
  StyledEditIcon,
  ErrorMess,
} from './TaskForm.styled';
import { addTask, patchTask } from 'redux/tasks/operations';

const showToast = (message, isError = true) => {
  toast(message, {
    style: {
      background: isError ? 'orange' : 'green',
      overflow: 'hidden',
    },
    icon: isError ? '❗' : '✅',
    iconTheme: {
      primary: '#fff',
      secondary: isError ? 'orange' : 'green',
    },
  });
};

const TaskForm = ({ onCloseModal, ...editTask }) => {
  const params = useParams();
  const date = new Date(params.currentDay);
  const validDate =
    Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
      ? date
      : new Date();
  const currentDay = format(validDate, 'yyyy-MM-dd');
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .trim()
      .max(250, 'Title is too long'),
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
      .required('End time is required')
      .test(
        'is-greater',
        'End time should be bigger than start time',
        function (value) {
          return this.parent.start < value;
        }
      ),
    priority: Yup.string().required('Priority is required'),
  });

  const initialValues = {
    title: editTask?.title || '',
    start: editTask?.start || '09:00',
    end: editTask?.end || '09:30',
    priority: editTask?.priority || 'low',
    category: editTask?.category || 'to-do',
  };

  const onSubmit = async values => {
    const { title, start, end, priority, category } = values;
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      showToast('The start time must be earlier than the end time');
      return;
    }

    if (!title.trim() || !start.trim() || !end.trim()) {
      showToast('All fields must be filled');
      return;
    }

    if (
      title === initialValues.title &&
      start === initialValues.start &&
      end === initialValues.end &&
      priority === initialValues.priority
    ) {
      showToast('Change at least one field');
      return;
    }

    const taskData = {
      title,
      start,
      end,
      priority,
      category,
      date: currentDay,
    };

    if (editTask.id) {
      dispatch(patchTask({ id: editTask.id, task: taskData }));
    } else {
      dispatch(addTask(taskData));
      showToast('Successfully! Task added', false);
    }

    onCloseModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <TaskFormStyled>
          <TaskContainer>
            <TaskLabelStyled htmlFor="title">Title</TaskLabelStyled>
            <Field
              as={TaskInputStyled}
              type="text"
              id="title"
              name="title"
              maxLength={250}
              placeholder="Enter text"
              onChange={handleChange}
              value={values.title}
            />
            <ErrorMess name="title" component="div" />
          </TaskContainer>

          <TimeWrapper>
            <TaskContainer>
              <TaskLabelStyled htmlFor="start">Start</TaskLabelStyled>
              <Field
                as={TaskInputStyled}
                type="time"
                name="start"
                value={values.start}
                onChange={handleChange}
                step="900"
              />
              <ErrorMess name="start" component="div" />
            </TaskContainer>

            <TaskContainer>
              <TaskLabelStyled htmlFor="end">End</TaskLabelStyled>
              <Field
                as={TaskInputStyled}
                type="time"
                name="end"
                value={values.end}
                onChange={handleChange}
                step="900"
              />
              <ErrorMess name="end" component="div" />
            </TaskContainer>
          </TimeWrapper>

          <RadioButtonContainer>
            <RadioButtonGorup>
              <RadioButtonLabel>
                <Field
                  as={RadioButtonInput}
                  type="radio"
                  name="priority"
                  value="low"
                  checked={values.priority === 'low'}
                  onChange={handleChange}
                />
                Low
              </RadioButtonLabel>
            </RadioButtonGorup>
            <RadioButtonGorup>
              <RadioButtonLabel>
                <Field
                  as={RadioButtonInput}
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={values.priority === 'medium'}
                  onChange={handleChange}
                />
                Medium
              </RadioButtonLabel>
            </RadioButtonGorup>
            <RadioButtonGorup>
              <RadioButtonLabel>
                <Field
                  as={RadioButtonInput}
                  type="radio"
                  name="priority"
                  value="high"
                  checked={values.priority === 'high'}
                  onChange={handleChange}
                />
                High
              </RadioButtonLabel>
            </RadioButtonGorup>
            <ErrorMess name="priority" component="div" />
          </RadioButtonContainer>

          <ButtonContainer>
            {editTask.id ? (
              <>
                <EditButton type="submit">
                  <StyledEditIcon color="#fff" size={18} />
                  Edit
                </EditButton>
                <CancelBtn type="button" onClick={onCloseModal}>
                  Cancel
                </CancelBtn>
              </>
            ) : (
              <>
                <AddButton type="submit">
                  <StyledAddIcon color="#fff" size={20} />
                  Add
                </AddButton>
                <CancelBtn type="button" onClick={onCloseModal}>
                  Cancel
                </CancelBtn>
              </>
            )}
          </ButtonContainer>
        </TaskFormStyled>
      )}
    </Formik>
  );
};

export default TaskForm;

