import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './../../utils/axiosWithAuth';

const NavBar = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #e3e6ec;
  padding: 10px 20px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.31);
`;

const InnerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-shadow: inset 1.69px 3.38px 3.37829px rgba(0, 0, 0, 0.25),
    inset -1.69px -3.38px 3.37829px rgba(255, 255, 255, 0.6);
  border-radius: 25px;
`;

const UserButton = styled.button`
  box-shadow: 3.38px 3.37829px 3.37829px rgba(0, 0, 0, 0.25),
    -3.387px -3.37829px 3.37829px rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  border: 0px;
  font-size: 2.5rem;
  padding: 10px;
  font-family: Roboto;
  font-weight: medium;
  width: 150px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus {
    outline: 0;
  }
`;

const UserInput = ({ title }) => {
  return <UserButton>{title}</UserButton>;
};

const ShopNavBar = () => {
  return (
    <NavBar>
      <InnerNavBar>
        <UserInput title='Back Office' />
        <div>
          <UserInput title='Save' />
          <UserInput title='Preview' />
          <UserInput title='Publish' />
        </div>
        <UserInput title='Sign In' />
      </InnerNavBar>
    </NavBar>
  );
};

export default ShopNavBar;
