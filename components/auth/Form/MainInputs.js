import React, { Fragment } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
`;

const InputLabel = styled.label`
  font-size: 2.5rem;
  padding: 5px 0px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1.75px solid #9BE1FF;
`;

const MainInputs = ({ changeHandler, formData: { email, password } }) => {
  return (
    <Fragment>
      <InputWrapper>
        <InputLabel htmlFor='email'>Email:</InputLabel>
        <Input
          type='text'
          name='email'
          onChange={changeHandler}
          value={email}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel htmlFor='password'>Password:</InputLabel>
        <Input
          type='password'
          name='password'
          onChange={changeHandler}
          value={password}
        />
      </InputWrapper>
    </Fragment>
  );
};

export default MainInputs;