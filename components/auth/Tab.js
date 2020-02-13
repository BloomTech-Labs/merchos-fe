import React from 'react';
import styled from 'styled-components';

const ActiveTab = styled.li`
  cursor: pointer;
  padding: 10px;
  background: red;
`;

const TabStyle = styled.li`
  cursor: pointer;
  padding: 10px;
`;

const Tab = ({ children, tabHandler, isActive }) => {
  // if the active tab is equal to the child passed in
  if (isActive === children) {
    // render the following component, which is considered the 'active' tab
    return (
      <ActiveTab onClick={() => tabHandler(children)}>{children}</ActiveTab>
    );
  } else {
    // else, render the non-active component
    return <TabStyle onClick={() => tabHandler(children)}>{children}</TabStyle>;
  }
};

export default Tab;
