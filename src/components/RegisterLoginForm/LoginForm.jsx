import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as SC from './RegisterLoginForm.styled';
import { login } from 'redux/auth/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SVG } from 'images';
import { Loader } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
import { toast } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8D9698',
    },
  },
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email')
    .matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),
  password: Yup.string()
    .min(8, 'Need to be more than 8 symbols!')
    .required('Please enter your password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [noUser, setNoUser] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const { isLoading, isLoggedIn, error } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitted(true);
    dispatch(login({ email: values.email, password: values.password }));
    if (isLoggedIn) {
      resetForm();
      navigate('/calendar');
    }
  };

  useEffect(() => {
    if (error.status&&isSubmitted) {
      if (error.status === 401 || error.status === 403) {
        setNoUser(true);
      } else {
        toast(error.message)
      }
    } 
  }, [error.message, error.status, isSubmitted]);

  return (
    <SC.StyledContainer>
      <SC.StyledHeader>Log In</SC.StyledHeader>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={true}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <>
              {isLoading && <Loader />}
              <SC.StyledForm>
                <SC.StyledFormDiv>
                  <SC.Styledlabel
                    htmlFor="email"
                    $validate={
                      (errors.email === 'Please enter your email' &&
                        touched.email &&
                        'empty') ||
                      (((errors.email &&
                        (errors.email === 'This is an ERROR email' ||
                          errors.email.includes('match'))) ||
                        noUser) &&
                        'error') ||
                      (touched.email && 'okay')
                    }
                  >
                    Email
                  </SC.Styledlabel>
                  <SC.StyledFieldContainer
                    $validate={
                      (errors.email === 'Please enter your email' &&
                        touched.email &&
                        'empty') ||
                      (((errors.email &&
                        (errors.email === 'This is an ERROR email' ||
                          errors.email.includes('match'))) ||
                        noUser) &&
                        'error') ||
                      (touched.email && 'okay')
                    }
                  >
                    <SC.StyledField
                      name="email"
                      type="email"
                      placeholder="nadiia@gmail.com"
                    />
                    {((errors.email &&
                      (errors.email === 'This is an ERROR email' ||
                        errors.email.includes('match'))) ||
                      noUser) && (
                      <SC.StyledIcon>
                        <SVG.ErrorAuth />
                      </SC.StyledIcon>
                    )}
                    {touched.email && !errors.email && !noUser && (
                      <SC.StyledIcon>
                        <SVG.GoodAuth />
                      </SC.StyledIcon>
                    )}
                  </SC.StyledFieldContainer>

                  {(errors.email === 'Please enter your email' &&
                    touched.email && (
                      <SC.StyledRequired>{errors.email}</SC.StyledRequired>
                    )) ||
                    (errors.email &&
                      (errors.email === 'This is an ERROR email' ||
                        errors.email.includes('match')) && (
                        <SC.StyledError>This is an ERROR email</SC.StyledError>
                      )) ||
                    (noUser && (
                      <SC.StyledError>
                        Email or password is uncorrect
                      </SC.StyledError>
                    )) ||
                    (touched.email && (
                      <SC.StyledCorrect>
                        This is an CORRECT email
                      </SC.StyledCorrect>
                    ))}
                </SC.StyledFormDiv>
                <SC.StyledFormDiv>
                  <SC.Styledlabel
                    htmlFor="password"
                    $validate={
                      (errors.password === 'Please enter your password' &&
                        touched.password &&
                        'empty') ||
                      (((errors.password && touched.password) || noUser) &&
                        'error') ||
                      (touched.password && 'okay')
                    }
                  >
                    Password
                  </SC.Styledlabel>
                  <SC.StyledFieldContainer
                    $validate={
                      (errors.password === 'Please enter your password' &&
                        touched.password &&
                        'empty') ||
                      (((errors.password && touched.password) || noUser) &&
                        'error') ||
                      (touched.password && 'okay')
                    }
                  >
                    <SC.StyledField
                      name="password"
                      type={!visibility ? 'password' : 'text'}
                      placeholder="• • • • • • •"
                    />
                    <SC.StyledButtonVisibility
                      type="button"
                      onClick={() => {
                        setVisibility(!visibility);
                      }}
                    >
                      <ThemeProvider theme={theme}>
                        {!visibility ? (
                          <Visibility color="primary" />
                        ) : (
                          <VisibilityOff color="primary" />
                        )}
                      </ThemeProvider>
                    </SC.StyledButtonVisibility>
                  </SC.StyledFieldContainer>
                  {(errors.password === 'Please enter your password' &&
                    touched.password && (
                      <SC.StyledRequired>{errors.password}</SC.StyledRequired>
                    )) ||
                    (errors.password &&
                      errors.password.includes(
                        'password must match the following'
                      ) &&
                      touched.password && (
                        <SC.StyledErrorPassword>
                          Password should contain at least 1 number and 1 letter
                        </SC.StyledErrorPassword>
                      )) ||
                    (errors.password && touched.password && (
                      <SC.StyledError>{errors.password}</SC.StyledError>
                    )) ||
                    (noUser && (
                      <SC.StyledError>
                        Email or password is uncorrect
                      </SC.StyledError>
                    )) ||
                    (touched.password && (
                      <SC.StyledCorrect>
                        This is an CORRECT password
                      </SC.StyledCorrect>
                    ))}
                </SC.StyledFormDiv>
                <SC.StyledButton type="submit">
                  Log In
                  <SVG.LoginWhiteIcon />
                </SC.StyledButton>
              </SC.StyledForm>
            </>
          );
        }}
      </Formik>
    </SC.StyledContainer>
  );
};

export default LoginForm;
