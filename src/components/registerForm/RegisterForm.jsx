import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    StyledButton,
    StyledContainer,
    StyledError,
    StyledField,
    StyledForm,
    StyledFormDiv,
    StyledHeader,
    StyledIconLogin,
    Styledlabel,
    StyledRequired,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email'),
  password: Yup.string()
    .min(8, 'Need to be more than 8 symbols!')
    .required('Please enter your password'),
});

export const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return  (<StyledContainer>
        <StyledHeader>Sign Up</StyledHeader>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={SignupSchema}
            onSubmit={async(values, { resetForm }) => {
                try {
                    const response = await dispatch(
                        register({
                            name: values.name,
                            email: values.email,
                            password: values.password,
                        }));
                    if (response.meta.requestStatus !== "rejected") {
                        resetForm();
                        navigate("/calendar");
                    } else {
                        alert(response.error.message);
                    }
                } catch (error) {
                    console.log(error)
                }
        
            }}
        >
            {({ errors, touched, isValid }) => {
                console.log(isValid);
                return (
                    <StyledForm>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="name"
                                $validate={
                                    (errors.name === 'Please enter your name' &&
                                        touched.name &&
                                        'empty') ||
                                    (errors.name && touched.name && 'error') ||
                                    null
                                }
                            >
                                Name
                            </Styledlabel>
                            <StyledField
                                name="name"
                                placeholder="Enter your name"
                                $validate={
                                    (errors.name === 'Please enter your name' &&
                                        touched.name &&
                                        'empty') ||
                                    (errors.name && touched.name && 'error') ||
                                    null
                                }
                            />
                            {(errors.name === 'Please enter your name' && touched.name && (
                                <StyledRequired>{errors.name}</StyledRequired>
                            )) ||
                                (errors.name && touched.name && (
                                    <StyledError>{errors.name}</StyledError>
                                ))}
                        </StyledFormDiv>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="email"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (errors.email === 'This is an ERROR email' && 'error')
                                }
                            >
                                Email
                            </Styledlabel>
                            <StyledField
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                $validate={
                                    (errors.email === 'Please enter your email' &&
                                        touched.email &&
                                        'empty') ||
                                    (errors.email === 'This is an ERROR email' && 'error')
                                }
                            />
                            {(errors.email === 'Please enter your email' && touched.email && (
                                <StyledRequired>{errors.email}</StyledRequired>
                            )) ||
                                (errors.email === 'This is an ERROR email' && (
                                    <StyledError>{errors.email}</StyledError>
                                ))}
                        </StyledFormDiv>
                        <StyledFormDiv>
                            <Styledlabel
                                htmlFor="password"
                                $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    null
                                }
                            >
                                Password
                            </Styledlabel>
                            <StyledField
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                $validate={
                                    (errors.password === 'Please enter your password' &&
                                        touched.password &&
                                        'empty') ||
                                    (errors.password && touched.password && 'error') ||
                                    null
                                }
                            />
                            {(errors.password === 'Please enter your password' &&
                                touched.password && (
                                    <StyledRequired>{errors.password}</StyledRequired>
                                )) ||
                                (errors.password && touched.password && (
                                    <StyledError>{errors.password}</StyledError>
                                ))}
                        </StyledFormDiv>
                        <StyledButton type="submit">Sign Up
                            {/* <img src="../../../public/favicon/favicon-32x32.png" alt=""></img> */}
                            <StyledIconLogin>
                                {/* <symbol id="icon-login" viewBox="0 0 32 32">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3.2" d="M20 4h1.6c2.24 0 3.36 0 4.216.436a3.996 3.996 0 0 1 1.748 1.748C28 7.04 28 8.16 28 10.4v11.2c0 2.24 0 3.36-.436 4.216a4.001 4.001 0 0 1-1.748 1.748C24.96 28 23.84 28 21.6 28H20M13.333 9.333 20 16m0 0-6.667 6.667M20 16H4"/>
    </symbol> */}
                                {/* <use href="../../../public/sprite.svg#icon-login"></use> */}
                            </StyledIconLogin>
                        </StyledButton>
                    </StyledForm>
                );
            }}
        </Formik>
    </StyledContainer>)
};