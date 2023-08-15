import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage } from 'formik';
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
} from './UserForm.styled';
import { FileUploadComponent, createElement } from './FileUploadComponent';
import { useRef, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { formatDate } from './formatDate';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';

export const UserForm = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPhone, setUserPhone] = useState(user.phone || '');
  const [userSype, setUserSype] = useState(user.skype || '');
  const fileInputRef = useRef(null);
  const fileListRef = useRef(null);

  // const todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);
  console.log(user);
  // console.log(startDate);

  const handleFiles = event => {
    const img = createElement(event);
    fileListRef.current.innerHTML = '';
    fileListRef.current.appendChild(img);
  };

  return (
    <StyledFormWrapper>
      <Formik
        initialValues={{
          avatarURL: '',
          addavatar: '',
          name: '',
          birthday: '',
          email: '',
          phone: '',
          skype: '',
        }}
        onSubmit={async values => {
          console.log(typeof userName, userName);
          // console.log(startDate);
          // console.log(userEmail);
          // console.log(userPhone);
          // console.log(userSype);
          const formattedDate = formatDate(startDate);
          // console.log(formattedDate);
          // 38 (123) 456 78 90
          //  birthday: '',
          // birthdayRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/;
          const body = {
            name: userName,
            email: userEmail,
            phone: userPhone,
            skype: userSype,
          };

          dispatch(updateUser(body));
        }}
      >
        <Form>
          <FormField>
            <FileUploadComponent
              handleFiles={handleFiles}
              fileInputRef={fileInputRef}
              fileListRef={fileListRef}
            />
          </FormField>
          <StyledUserName>Nadiia Doe</StyledUserName>
          <StyledUserDiscription>User</StyledUserDiscription>
          <StyledLabelWrapp>
            <FormField>
              <StyledLabelText>User Name</StyledLabelText>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                value={userName}
                onChange={evt => setUserName(evt.target.value)}
              />
              <ErrorMessage name="name" component="div" />
            </FormField>

            <FormField>
              <StyledLabelText>Birthday</StyledLabelText>
              {/* <Field
                // type="date"
                id="birthday"
                name="birthday"
                placeholder="25/08/1995"
              /> */}
              <StyledDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                name="birthday"
              />
              <ErrorMessage name="birthday" component="div" />
            </FormField>

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
              <ErrorMessage name="email" component="div" />
            </FormField>

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
              <ErrorMessage name="phone" component="div" />
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
              <ErrorMessage name="skype" component="div" />
            </FormField>

            <StyledBtn type="submit">Save changes</StyledBtn>
          </StyledLabelWrapp>
        </Form>
      </Formik>
    </StyledFormWrapper>
  );
};
