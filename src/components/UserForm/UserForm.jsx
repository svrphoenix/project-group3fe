import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage } from 'formik';
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
} from './UserForm.styled';
import { FileUploadComponent, createElement } from './FileUploadComponent';
import { useRef, useState } from 'react';
import useAuth from 'hooks/useAuth';
import { formatDate } from './formatDate';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';

const UserSchema = Yup.object().shape({
  // name: Yup.string().required('Please enter your name'),
  // phone: Yup.string().required(),
  // email: Yup.string()
  //   .email('This is an ERROR email')
  //   .required('Please enter your email')
  //   .matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),
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
  console.log(user);
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
          avatarURL: '',
          name: '',
          birthday: '',
          email: '',
          phone: '',
          skype: '',
        }}
        validationSchema={UserSchema}
        onSubmit={async values => {
          const data = new FormData(form.current);
          dispatch(updateUser(data));
          // for (let obj of data) {
          //   console.log(obj);
          // }
          // console.log(userAvatar);
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

          // dispatch(updateUser(data));
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
                dateFormat="yyyy-MM-dd"
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
