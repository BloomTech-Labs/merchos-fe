import React, { Fragment } from 'react';

const MainInputs = ({ changeHandler, formData: { email, password } }) => {
  return (
    <Fragment>
      <label htmlFor='email'>Email:</label>
      <input type='text' name='email' onChange={changeHandler} value={email} />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        name='password'
        onChange={changeHandler}
        value={password}
      />
    </Fragment>
  );
};

export default MainInputs;
