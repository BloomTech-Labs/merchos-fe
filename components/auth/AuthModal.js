import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form/Form';
import Tab from './Tab';
import BottomButton from './BottomButton';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background: gray;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 35%;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 0px 76.1254px rgba(0, 0, 0, 0.12);
  color: #82daff;
  min-height: 400px;
  position: relative;
`;

const TabBar = styled.ul`
  display: flex;
  justify-content: space-between;
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
        <BottomButton activeTab={activeTab} tabHandler={tabHandler} />
      </Modal>
    </ModalContainer>
  );
};

export default AuthModal;
