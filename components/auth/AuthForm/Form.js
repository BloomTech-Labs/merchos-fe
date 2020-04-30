import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// components
import MainInputs from './MainInputs';
import UnderForm from './UnderForm';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px 50px;
`;

const SubmitButton = styled.button`
  margin: 0px;
  font-size: 3rem;
  border-radius: 10px;
  background: #82daff;
  border: none;
  padding: 15px;
  color: white;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  text-align: center;
  padding: 15px 0px;
  font-size: 2rem;
  color: red;
`

const ErrorHandling = ({ activeTab }) => {
  // get form state from redux
  const err = useSelector((state) => state.authInterface);
  if (activeTab === 'Sign In') {
    return <ErrorMessage>{err.loginErr}</ErrorMessage>;
  } else if (activeTab === 'Sign Up') {
    return <ErrorMessage>{err.regErr}</ErrorMessage>;
  }
};

const AuthForm = ({ activeTab, submitHandler }) => {
  // handles state for current form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberBox: false,
  });

  // handles any changes to the form below
  const changeHandler = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // set current for data based on current tab the user is on
  useEffect(() => {
    // if the active tab is Sign In
    if (activeTab === 'Sign In') {
      // set form data for sign in page back to empty strings
      setFormData({
        username: '',
        password: '',
        rememberBox: false,
      });
    } else {
      // if not, set the registration form data to empty strings
      setFormData({
        username: '',
        password: '',
      });
    }
  }, [activeTab]);

  return (
    <Form onSubmit={(e) => submitHandler(e, formData)}>
      <MainInputs changeHandler={changeHandler} formData={formData} />
      {activeTab === 'Sign In' ? (
        <UnderForm
          changeHandler={changeHandler}
          setFormData={setFormData}
          formData={formData}
        />
      ) : null}
      <ErrorHandling activeTab={activeTab} />
      <SubmitButton type='submit' id='auth-submit'>
        {activeTab === 'Sign In' ? 'Sign In' : 'Sign Up'}
      </SubmitButton>
    </Form>
  );
};

export default AuthForm;
