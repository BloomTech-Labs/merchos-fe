import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form';
import Tab from './Tab';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: gray;
  width: 40%;
`;

const TabBar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const AuthModal = () => {
  const [activeTab, setActiveTab] = useState('Sign In');

  const tabHandler = data => {
    setActiveTab(data);
  };

  const submitHandler = (e, data) => {
    e.preventDefault();
    if (activeTab === 'Sign In') {
      console.log('sign in', data);
    } else if (activeTab === 'Sign Up') {
      console.log('sign up', data);
    }
  };
  return (
    <ModalContainer>
      <Modal>
        <TabBar>
          <Tab tabHandler={tabHandler} isActive={activeTab}>
            Sign In
          </Tab>
          <Tab tabHandler={tabHandler} isActive={activeTab}>
            Sign Up
          </Tab>
        </TabBar>
        <Form activeTab={activeTab} submitHandler={submitHandler} />
        {activeTab === 'Sign In' ? (
          <button type='button'>Need an account?</button>
        ) : (
          <button type='button'>Have an account?</button>
        )}
      </Modal>
    </ModalContainer>
  );
};

export default AuthModal;
