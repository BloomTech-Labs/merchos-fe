import React from "react";
import styled from "styled-components";

const ActiveTab = styled.li`
  cursor: pointer;
  background: ${({ isActive, current }) =>
    isActive === current ? "#82DAFF" : "#FFFFFF"};
  color: ${({ isActive, current }) =>
    isActive === current ? "#FFFFFF" : "#82DAFF"};
  width: 100%;
  text-align: center;
  padding: 15px 0px;
  margin: 20px;
  border-radius: 15px;
  font-size: 2.5rem;
  font-weight: bold;
  transition: 0.2s;
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
