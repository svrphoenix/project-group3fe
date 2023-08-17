import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage, useFormik } from 'formik';
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
} from './UserForm.styled';
import { FileUploadComponent, createElement } from './FileUploadComponent';
import { useRef, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { formatDate } from './formatDate';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import { ChevronDownIcon } from './Icons';

const UserSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(3, 'minimum 3 letters')
  //   .max(20)
  //   .required('Please enter your name'),
  // birthday: Yup.string().matches(
  //   /^d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/
  // ),
  // email: Yup.string()
  //   .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
  //   .required('Please enter your email'),
  // phone: Yup.string().matches(/^38 \(\d{3}\) \d{3} \d{2} \d{2}$/),
  // skype: Yup.string().matches(
  //   /^(\+\d{1,3}\s?)?(?:\(\d{1,4}\)|\d{1,4})\s?\d{1,4}-?\d{1,4}$/
  // ),
});

export const UserForm = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(
    new Date() || new Date(user.birthday)
  );
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPhone, setUserPhone] = useState(user.phone || '');
  const [userSype, setUserSype] = useState(user.skype || '');
  const [userAvatar, setUserAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const fileListRef = useRef(null);
  const form = useRef(null);

  // const todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);
  // console.log(user);
  // console.log(startDate);

  const handleFiles = event => {
    const img = createElement(event);
    fileListRef.current.innerHTML = '';
    fileListRef.current.appendChild(img);

    setUserAvatar(event.currentTarget.files[0]);
  };

  return (
    <StyledFormWrapper>
      <Formik
        initialValues={{
          avatar: '',
          name: userName,
          birthday: '',
          email: '',
          phone: '',
          skype: '',
        }}
        validationSchema={UserSchema}
        onSubmit={async values => {
          const data = new FormData(form.current);
          dispatch(updateUser(data));
          for (let obj of data) {
            console.log(obj);
          }
          console.log(values);

          const formattedDate = formatDate(startDate);
          // console.log(formattedDate);
          // 38 (123) 456 78 90
          //  birthday: '',
          // birthdayRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/;
        }}
      >
        <Form ref={form}>
          <FormField>
            <FileUploadComponent
              handleFiles={handleFiles}
              fileInputRef={fileInputRef}
              fileListRef={fileListRef}
            />
          </FormField>
          <StyledUserName>{user.name}</StyledUserName>
          <StyledUserDiscription>User</StyledUserDiscription>
          <StyledLabelWrapp>
            <Column>
              <FormField>
                <StyledLabelText>User Name</StyledLabelText>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={userName}
                  onChange={evt => {
                    setUserName(evt.target.value);
                  }}
                />
              </FormField>
              <StyledCalendar>
                <StyledLabelText>Birthday</StyledLabelText>
                <StyledDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  name="birthday"
                />
                <ChevronDownIcon color="#111111" size={18} />
              </StyledCalendar>
              <FormField>
                <StyledLabelText>Email</StyledLabelText>
                <Field
                  id="email"
                  name="email"
                  placeholder="example.com"
                  type="email"
                  value={userEmail}
                  onChange={evt => setUserEmail(evt.target.value)}
                />
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
                  value={userPhone}
                  onChange={evt => setUserPhone(evt.target.value)}
                />
              </FormField>
              <FormField>
                <StyledLabelText>Skype</StyledLabelText>
                <Field
                  id="skype"
                  name="skype"
                  placeholder="38 (097) 222 33 77"
                  type="text"
                  value={userSype}
                  onChange={evt => setUserSype(evt.target.value)}
                />
              </FormField>
            </Column>
          </StyledLabelWrapp>
          <StyledBtn type="submit">Save changes</StyledBtn>
        </Form>
      </Formik>
    </StyledFormWrapper>
  );
};

// <ErrorMessage name="name" component="div" />;
