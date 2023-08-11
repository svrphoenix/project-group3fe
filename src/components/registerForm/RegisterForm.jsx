import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    StyledButton,
    StyledContainer,
    StyledError,
    StyledField,
    StyledForm,
    StyledFormDiv,
    StyledHeader,
    Styledlabel,
    StyledRequired,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email')
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/),
  password: Yup.string()
    .min(8, 'Need to be more than 8 symbols!')
    .required('Please enter your password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usedEmail, setUsedEmail] = useState(false);

    return  (<StyledContainer>
        <StyledHeader>Sign Up</StyledHeader>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={SignupSchema}
            onSubmit={async(values, { resetForm }) => {
                try {
                    const response = await dispatch(
                        register({
                            name: values.name,
                            email: values.email,
                            password: values.password,
                        }));
                    console.log(response.payload);
                    if (response.meta.requestStatus !== "rejected") {
                        resetForm();
                        navigate("/calendar");
                    } else {
                        if (response.payload.includes("409")) {
                            setUsedEmail(true);
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
        
            }}
        >
            {({ errors, touched }) => {
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
                                    (touched.name && 'okay')
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
                                    (touched.name && 'okay')
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
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                    (touched.email && 'okay')
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
                                    (((errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))) || usedEmail) && 'error') ||
                                    (touched.email && 'okay')
                                }
                            />
                            {(errors.email === 'Please enter your email' && touched.email && (
                                <StyledRequired>{errors.email}</StyledRequired>
                            )) ||
                            (errors.email && (errors.email === "This is an ERROR email" || errors.email.includes("match"))&& (
                                <StyledError>This is an ERROR email</StyledError>
                            )) ||
                            (usedEmail && (
                                <StyledError>This user is already exist</StyledError>
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
                                    (touched.password && 'okay')
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
                                    (touched.password && 'okay')
                                }
                            />
                            {(errors.password === 'Please enter your password' &&
                                touched.password && (
                                    <StyledRequired>{errors.password}</StyledRequired>
                                )) ||
                                (errors.password && errors.password.includes('password must match the following') && touched.password && (
                                    <StyledError>This password should contain  at least eight characters and at least one number and one letter</StyledError>
                                )) ||
                                (errors.password && touched.password && (
                                    <StyledError>{errors.password}</StyledError>
                                ))
                            }
                        </StyledFormDiv>
                        <StyledButton type="submit">Sign Up</StyledButton>
                    </StyledForm>
                );
            }}
        </Formik>
    </StyledContainer>)
};

export default RegisterForm;