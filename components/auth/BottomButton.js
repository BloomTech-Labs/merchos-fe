import React from 'react';

const BottomButton = ({ activeTab }) => {
  if (activeTab === 'Sign In') {
    return <button type='button'>Need an account?</button>;
  } else {
    return <button type='button'>Have an account?</button>;
  }
};

export default BottomButton;
