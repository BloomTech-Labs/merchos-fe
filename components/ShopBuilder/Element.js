import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

const Container = styled.div`
  height: ${props => props.height};
  text-align: center;
  font-size: 2rem;
  margin-top: 1px;
  background: rgba(137, 196, 244, 1);
`;

const CloseIcon = styled(IoIosCloseCircle)`
  position: absolute;
  right: 0px;
  font-size: 25px;
`;

const Element = props => {
  return (
    <Container height={props.draggable.height}>
      <CloseIcon
        onClick={() =>
          props.deleteElement(props.interactDropId, props.draggable.id)
        }
      />

      {props.draggable.content}
    </Container>
  );
};

export default Element;
