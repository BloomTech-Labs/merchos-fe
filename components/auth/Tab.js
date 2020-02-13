import React from 'react';
import styled from 'styled-components';

const ActiveTab = styled.li`
  cursor: pointer;
  background: ${({ isActive, current }) =>
    isActive === current ? 'red' : null};
  width: 100%;
  text-align: center;
  padding: 20px 0px;
`;

const Tab = ({ children, tabHandler, isActive }) => {
  return (
    <ActiveTab
      isActive={isActive}
      current={children}
      onClick={() => tabHandler(children)}
    >
      {children}
    </ActiveTab>
  );
};

export default Tab;
