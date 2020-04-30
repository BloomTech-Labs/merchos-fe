import React from "react";
import SideNav from "./SideNav";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  padding-top: 2%;

  height: 100%;
  list-style: none;

  width: 15%;

  background: #f3f3ff;
`;

const SideBar = props => (
  <Side>

  </Side>
);

export default SideBar;
