import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormField,
  Field,
  StyledFormWrapper,
  Form,
  StyledUserName,
  StyledUserDiscription,
  StyledLabelText,
  StyledLabelWrapp,
  StyledBtn,
  StyledDatePicker,
  StyledCalendar,
  Column,
  ErrorMessage,
  StyledErrorText,
  FileInputLabel,
} from './UserForm.styled';
import FileUploadComponent from './FileUploadComponent';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { updateUser } from 'redux/auth/operations';
import { ChevronDownIcon } from './Icons';
import { createIMGElement } from './createIMGElement';

const UserSchema = Yup.object().shape({
  avatar: Yup.string().nullable(),
  name: Yup.string()
    .min(3, 'minimum 3 letters')
    .max(20)
    .required('Please enter your name'),
  birthday: Yup.string().matches(
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/,
    'Please use format yyyy-mm-dd'
  ),
  email: Yup.string()
    .matches(
      /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      'Please use format example@gmail.com'
    )
    .required('Please enter your email'),
  phone: Yup.string().matches(
    /^(\+\d{1,3}|\d{1,3}) \(\d{3}\) \d{3} \d{2} \d{2}$/,
    'Please use format 38 (097) 256 34 77'
  ),
  skype: Yup.string().matches(
    /^(\+\d{1,3}|\d{1,3}) \(\d{3}\) \d{3} \d{2} \d{2}$/,
    'Please use  format 38 (097) 256 34 77'
  ),
});

export const UserForm = () => {
  const { user, error } = useAuth();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(
    new Date(user.birthday) || new Date()
  );
  const [userAvatar, setUserAvatar] = useState(null);
  const [formChanged, setFormChanged] = useState(false);

  const form = useRef(null);
  const fileListRef = useRef(null);

  const todayDate = startDate.toISOString().slice(0, 10);

  const handleFormChange = () => {
    setFormChanged(true);
  };

  const handleFiles = event => {
    const img = createIMGElement(event);
    fileListRef.current.innerHTML = '';
    fileListRef.current.appendChild(img);

    setUserAvatar(event.currentTarget.files[0]);
    handleFormChange();
  };

  useEffect(() => {
    const formFields = form.current.querySelectorAll('input');
    const formFieldsArray = Array.from(formFields);

    const fieldChangeHandler = () => {
      setFormChanged(true);
    };

    formFieldsArray.forEach(field => {
      field.addEventListener('change', fieldChangeHandler);
    });

    return () => {
      formFieldsArray.forEach(field => {
        field.removeEventListener('change', fieldChangeHandler);
      });
    };
  }, [user.name, startDate, user.email, user.phone, user.skype]);

  return (
    <StyledFormWrapper>
      <Formik
        initialValues={{
          avatar: userAvatar,
          name: user.name,
          birthday: todayDate || user.birthday,
          email: user.email,
          phone: user.phone || '',
          skype: user.skype || '',
        }}
        validationSchema={UserSchema}
        validateOnChange={true}
        onSubmit={async (values, { setSubmitting }) => {
          if (formChanged) {
            const data = new FormData(form.current);
            dispatch(updateUser(data));
          }
        }}
      >
        <Form ref={form}>
          <FileInputLabel>
            <FileUploadComponent
              handleFiles={handleFiles}
              fileListRef={fileListRef}
            />
          </FileInputLabel>
          <StyledUserName>{user.name}</StyledUserName>
          <StyledUserDiscription>User</StyledUserDiscription>
          {error && (
            <StyledErrorText>Something went wrong, try again!</StyledErrorText>
          )}
          <StyledLabelWrapp>
            <Column>
              <FormField>
                <StyledLabelText>User Name</StyledLabelText>
                <Field id="name" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </FormField>
              <StyledCalendar>
                <StyledLabelText>Birthday</StyledLabelText>
                <StyledDatePicker
                  selected={startDate}
                  onChange={date => {
                    if (date) {
                      setStartDate(date);
                      handleFormChange();
                    }
                  }}
                  dateFormat="yyyy-MM-dd"
                  name="birthday"
                  placeholderText="yyyy-mm-dd"
                />
                <ChevronDownIcon color="var(--first-Text-Color)" size={18} />
              </StyledCalendar>
              <FormField>
                <StyledLabelText>Email</StyledLabelText>
                <Field
                  id="email"
                  name="email"
                  placeholder="example.com"
                  type="email"
                />
                <ErrorMessage name="email" component="div" />
              </FormField>
            </Column>
            <Column>
              <FormField>
                <StyledLabelText>Phone</StyledLabelText>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="38 (097) 222 33 77"
                  type="tel"
                />
                <ErrorMessage name="phone" component="div" />
              </FormField>
              <FormField>
                <StyledLabelText>Skype</StyledLabelText>
                <Field
                  id="skype"
                  name="skype"
                  placeholder="Add a skype number"
                  type="text"
                />
                <ErrorMessage name="skype" component="div" />
              </FormField>
            </Column>
          </StyledLabelWrapp>
          <StyledBtn type="submit" disabled={!formChanged}>
            Save changes
          </StyledBtn>
        </Form>
      </Formik>
    </StyledFormWrapper>
  );
};
