import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const DragProduct = props => {
  return (
    <Draggable draggableId={props.columnId} index={props.index}>
      {provided => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.children}
          </Container>
        );
      }}
    </Draggable>
  );
};

export default DragProduct;
