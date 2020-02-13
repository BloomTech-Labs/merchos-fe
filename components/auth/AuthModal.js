import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabBar = styled.ul``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UnderForm = styled.div`
  display: flex;
`;

const AuthModal = () => {
  return (
    <div>
      <Modal>
        <TabBar>
          <li>Sign In</li>
          <li>Sign Up</li>
        </TabBar>
        <Form>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' />
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
        <button>Need an account?</button>
      </Modal>
    </div>
  );
};

export default AuthModal;
