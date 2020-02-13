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
  const [activeTab, setActiveTab] = useState('');

  const tabHandler = data => {
    setActiveTab(data);
  };

  console.log(activeTab);
  return (
    <ModalContainer>
      <Modal>
        <TabBar>
          <Tab tabHandler={tabHandler}>Sign Up</Tab>
          <Tab tabHandler={tabHandler}>Sign In</Tab>
        </TabBar>
        <Form activeTab={activeTab} />
        <button type='button'>Need an account?</button>
      </Modal>
    </ModalContainer>
  );
};

export default AuthModal;
