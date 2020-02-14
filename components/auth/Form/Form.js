import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import MainInputs from './MainInputs';
import UnderForm from './UnderForm';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px 0px;
`;

const AuthForm = ({ activeTab, submitHandler }) => {
  // handles state for current form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberBox: false
  });

  // handles any changes to the form below
  const changeHandler = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  // set current for data based on current tab the user is on
  useEffect(() => {
    // if the active tab is Sign In
    if (activeTab === 'Sign In') {
      // set form data for sign in page back to empty strings
      setFormData({
        email: '',
        password: '',
        rememberBox: false
      });
    } else {
      // if not, set the registration form data to empty strings
      setFormData({
        email: '',
        password: ''
      });
    }
  }, [activeTab]);

  return (
    <Form onSubmit={e => submitHandler(e, formData)}>
      <MainInputs changeHandler={changeHandler} formData={formData} />
      {activeTab === 'Sign In' ? (
        <UnderForm formData={formData} changeHandler={changeHandler} />
      ) : null}
      <button type='submit'>Sign In</button>
    </Form>
  );
};

export default AuthForm;
