import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  min-height: ${props => props.dropHeight || "100px"};
  ${props => {
    if (props.direction === "horizontal") {
      return `display: flex;`;
    } else {
      return `display: flex;
              flex-wrap: wrap;`;
    }
  }}
  padding: 10px, 0;
  border: ${props =>
    props.isDraggingOver ? "10px dashed rgba(0, 230, 64, 1)" : "none"};
  background: white;
`;

const ColumnDrop = props => {
  return (
    <Droppable
      droppableId={props.columnId}
      type="ITEMS"
      direction={props.direction}
    >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          direction={props.direction}
          dropHeight={props.dropHeight}
        >
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default ColumnDrop;
