import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  height: max-content;
  width: ${props => props.width};
  position: relative;
  background: ${props =>
    props.isDragging ? "rgba(137, 196, 244, 0.5)" : "rgba(137, 196, 244, 1)"}
  }};
`;

const ColumnDrag = props => {
  return (
    <Draggable draggableId={props.columnId} index={props.index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
          width={props.width}
        >
          {props.children}
        </Container>
      )}
    </Draggable>
  );
};

export default ColumnDrag;
