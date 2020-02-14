import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SignInValues = styled.div`
  display: flex;
`;

const UnderForm = ({ changeHandler, formData: { rememberBox } }) => {
  return (
    <SignInValues>
      <div>
        <label htmlFor='rememberBox'>Remember Me?</label>
        <input
          type='checkbox'
          name='rememberBox'
          value={rememberBox}
          onChange={changeHandler}
        />
      </div>
      <Link href=''>
        <a>Forgot Password?</a>
      </Link>
    </SignInValues>
  );
};

export default UnderForm;
