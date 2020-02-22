import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
  margin-top: 1px;
`;

const Element = props => {
  return props.dragElement.map(element => {
    return <Container>{element.content}</Container>;
  });
};

export default Element;
