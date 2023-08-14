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

export const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const fileInputRef = useRef(null);
  const fileListRef = useRef(null);

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
          console.log(values);
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
              <Field id="name" name="name" placeholder="Name" />
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
                dateFormat="yyyy/mm/dd"
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
