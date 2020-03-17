import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './../../utils/axiosWithAuth';

const NavBar = styled.section`
  display: flex;
  width: 100%;
`;

const InnerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserInput = () => {
  return <button>Button</button>;
};

const ShopNavBar = () => {
  return (
    <NavBar>
      <InnerNavBar>
        <UserInput />
        <div>
          <UserInput />
          <UserInput />
          <UserInput />
        </div>
        <UserInput />
      </InnerNavBar>
    </NavBar>
  );
};

export default ShopNavBar;
