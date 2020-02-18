import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
`;

const Element = props => {
  return <Container>{props.dragElement.content}</Container>;
};

export default Element;
