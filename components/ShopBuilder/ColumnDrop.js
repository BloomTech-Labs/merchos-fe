import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px, 0;
  height: ${props => props.height + 1};
  border: 1px solid black;
  background: ${props => (props.isDraggingOver ? "#7befb2" : "#d3d3d3")};
`;

const ColumnDrop = props => {
  return (
    <Droppable droppableId={props.columnId} type={props.type}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          height={props.dragElement.height}
          isDraggingOver={snapshot.isDraggingOver}
          colId={props.columnId}
        >
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default ColumnDrop;
