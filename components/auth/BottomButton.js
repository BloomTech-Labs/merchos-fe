import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  margin: 15px 0px;
  background: none;
  border: none;
  color: #82daff;
  position: absolute;
  bottom: 0;
  font-size: 2rem;
`;

const BottomButton = ({ activeTab, tabHandler }) => {
  const changePage = () => {
    if (activeTab === 'Sign In') {
      tabHandler('Sign Up');
    } else {
      tabHandler('Sign In');
    }
  };
  return (
    <Button type='button' onClick={changePage}>
      {activeTab === 'Sign In' ? 'Need an account?' : 'Have an account?'}
    </Button>
  );
};

export default BottomButton;
