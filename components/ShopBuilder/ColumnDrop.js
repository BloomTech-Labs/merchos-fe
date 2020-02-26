import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100px;
  ${props => {
    if (props.direction === "horizontal") {
      return `display: flex;`;
    } else {
      return `display: flex;
              flex-wrap: wrap;`;
    }
  }}
  padding: 10px, 0;
  border: 1px solid black;
  background: ${props => (props.isDraggingOver ? "#7befb2" : "#d3d3d3")};
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
        >
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default ColumnDrop;
