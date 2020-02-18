import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => props.height};
  border: 1px solid black;
  background: ${props => (props.isDraggingOver ? "#7befb2" : "#d3d3d3")};
`;

const ColumnDrop = props => {
  return (
    <Droppable droppableId={props.columnId}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          height={props.dragElement.height}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default ColumnDrop;
