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
  padding: 10px 15px 7.5px;
  border-radius: 10px;
  border: 1.75px solid #9be1ff;
  font-size: 2.5rem;
`;

const MainInputs = ({ changeHandler, formData: { username, password } }) => {
  return (
    <Fragment>
      <InputWrapper>
        <InputLabel htmlFor='username'>Email:</InputLabel>
        <Input
          type='text'
          name='username'
          onChange={changeHandler}
          value={username}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel htmlFor='password'>Password:</InputLabel>
        <Input
          type='password'
          name='password'
          onChange={changeHandler}
          value={password}
          required
        />
      </InputWrapper>
    </Fragment>
  );
};

export default MainInputs;
