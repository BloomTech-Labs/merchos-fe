import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Form from './AuthForm/Form';
import Tab from './Tab';
import BottomButton from './BottomButton';

// Redux actions
import { authModalController } from '../../store/actions/userInterface/authModalController';
import { authorizeUser } from '../../store/actions/userAuth/userAuthActions';
import { useDispatch } from 'react-redux';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: fixed;
  z-index: 10;
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

const XButton = styled.button`
  border: 1px solid #82daff;
  background: transparent;
  position: absolute;
  border-radius: 50%;
  color: #82daff;
  font-size: 1.5rem;
  top: 5px;
  right: 5px;
  cursor: pointer;
  transition: 0.2s;

  // testing hover animation
  &:hover {
    color: blue;
    border: 1px solid blue;
  }
`;

const AuthModal = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('Sign In');
  const tabHandler = data => {
    setActiveTab(data);
  };

  const submitHandler = (e, data) => {
    e.preventDefault();
    dispatch(authorizeUser(activeTab, data));
  };
  return (
    <ModalContainer>
      <Modal>
        <XButton
          type='button'
          onClick={() => dispatch(authModalController('close'))}
        >
          x
        </XButton>
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
