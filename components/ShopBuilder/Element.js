import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

const Container = styled.div`
  height: ${props => props.height};
  text-align: center;
  font-size: 2rem;
  margin-top: 1px;
`;

const CloseIcon = styled(IoIosCloseCircle)`
  position: absolute;
  right: 0px;
  font-size: 25px;
`;

const Element = props => {
  return (
    <div>
      <CloseIcon
        onClick={() =>
          props.deleteElement(props.clickedOnDropId, props.clickedOnDragId)
        }
      />
      <Container
        height={props.draggable.height}
        onClick={() => {
          props.changeEleHeight(props.clickedOnDropId, props.clickedOnDragId);
        }}
      >
        {props.draggable.content}
      </Container>
    </div>
  );
};

export default Element;
