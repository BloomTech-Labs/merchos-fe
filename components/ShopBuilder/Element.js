import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => props.height};
  text-align: center;
  font-size: 2rem;
  margin-top: 1px;
`;

const Element = props => {
  return (
    <Container
      height={props.draggable.height}
      onClick={() => {
        props.changeEleHeight(props.clickedOnDropId, props.clickedOnDragId);
      }}
    >
      {props.draggable.content}
    </Container>
  );
};

export default Element;
