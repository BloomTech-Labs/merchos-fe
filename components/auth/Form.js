import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UnderForm = styled.div`
  display: flex;
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
      <label htmlFor='email'>Email:</label>
      <input
        type='text'
        name='email'
        onChange={changeHandler}
        value={formData.email}
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        name='password'
        onChange={changeHandler}
        value={formData.password}
      />
      {/* check for the active tab, if it's Sign In, render the following components */}
      {activeTab === 'Sign In' ? (
        <UnderForm>
          <div>
            <label htmlFor='rememberBox'>Remember Me?</label>
            <input
              type='checkbox'
              name='rememberBox'
              value={formData.rememberBox}
              onChange={changeHandler}
            />
          </div>
          <Link href=''>
            <a>Forgot Password?</a>
          </Link>
        </UnderForm>
      ) : null}
      <button type='submit'>Sign In</button>
    </Form>
  );
};

export default AuthForm;
