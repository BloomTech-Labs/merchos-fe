import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  min-height: ${props => props.dropHeight || "100px"};
  ${props => {
    if (props.isProduct) {
      return `display: flex;
              `;
    } else {
      return `display: flex;
              `;
    }
  }}
  flex-wrap: wrap;
  padding: 10px, 0;
  border: ${props =>
    props.isDraggingOver ? "10px dashed rgba(0, 230, 64, 1)" : "none"};
  border: 1px solid black;
  background: transparent;
`;

const ColumnDrop = props => {
  return (
    <Droppable
      droppableId={props.columnId}
      type={props.type || "DEFAULT"}
      direction={props.isProduct ? "horizontal" : "vertical"}
    >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          dropHeight={props.dropHeight}
          isProduct={props.isProduct}
        >
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default ColumnDrop;
