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

const AuthForm = ({ activeTab }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const changeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setFormData({
      email: '',
      password: ''
    });
  }, [activeTab]);

  return (
    <Form>
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
      <UnderForm>
        <div>
          <label htmlFor='remember'>Remember Me?</label>
          <input type='checkbox' name='remember' />
        </div>
        <Link href=''>
          <a>Forgot Password?</a>
        </Link>
      </UnderForm>
      <button type='submit'>Sign In</button>
    </Form>
  );
};

export default AuthForm;
