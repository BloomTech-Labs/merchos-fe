import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SignInValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 10px 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0px;
  }

  input[type='checkbox'] + span {
    display: flex;
    align-items: center;
    background: white;
    margin-left: 5px;
    border: 2px solid #82daff;
    cursor: pointer;
    transition: 0.2s;
    height: 20px;
    width: 20px;
  }

  input[type='checkbox']:checked + span {
    background: #82daff;
  }
`;

const Input = styled.input`
  display: none;
`;

const NewBox = styled.span`
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #82daff;
  cursor: pointer;
`;

const UnderForm = ({ changeHandler, setFormData, formData }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      rememberBox: isChecked
    });
  }, [isChecked]);

  return (
    <SignInValues id="underform-values">
      <InputWrapper>
        <label htmlFor='rememberBox'>Remember Me?</label>
        <span>
          <Input
            type='checkbox'
            name='rememberBox'
            checked={isChecked}
            onChange={changeHandler}
          />
          <NewBox onClick={checkHandler}></NewBox>
        </span>
      </InputWrapper>
      <Link href=''>
        <Anchor>Forgot Password?</Anchor>
      </Link>
    </SignInValues>
  );
};

export default UnderForm;
