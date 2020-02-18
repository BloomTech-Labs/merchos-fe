import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => (props.colId === "box1" ? "150px" : "50px")};
  background: ${props => {
    switch (props.colId) {
      case "box1":
        return `rgba(255, 0, 0, ${props.isDragging ? "0.1" : "1"})`;
      case "box2":
        return `rgba(240, 255, 0, ${props.isDragging ? "0.1" : "1"})`;
      default:
        return "rgba(0, 0, 0, 1)";
    }
  }};
`;

const ColumnDrag = props => {
  return (
    <Draggable draggableId={props.columnId} index={0}>
      {(provided, snapshot) => (
        <Container
          colId={props.columnId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {props.children}
        </Container>
      )}
    </Draggable>
  );
};

export default ColumnDrag;
