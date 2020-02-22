import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Element from "./Element";
import ProductList from "./ProductList";
import { ListManager } from "react-beautiful-dnd-grid";

const Container = styled.div`
  position: relative;
  height: ${props => (props.colId === "Products" ? "200px" : props.height)};
  background: ${props => {
    switch (props.colId) {
      case "firstColumn":
        return `rgba(255, 0, 0, ${props.isDragging ? "0.1" : "1"})`;
      case "secondColumn":
        return `rgba(240, 255, 0, ${props.isDragging ? "0.1" : "1"})`;
      default:
        return "pink";
    }
  }};
`;

const DragPart = styled.div`
  z-index: 1;
  height: 20px;
  background: blue;
  width: 100%;
`;

const ProductContainer = styled.div`
  margin: 0 auto;
`;

//this function is not useful right now
const dragEnd = function(...dragVal) {
  console.log("DRAG_VAL: ", dragVal);
};

const ColumnDrag = props => {
  return (
    <Draggable draggableId={props.columnId} index={props.index}>
      {(provided, snapshot) => (
        <Container
          colId={props.columnId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          height={props.dragElement[0].height}
        >
          <DragPart {...provided.dragHandleProps}></DragPart>
          {props.dndContainer !== "Products" ? (
            <Element dragElement={props.dragElement} />
          ) : (
            <ProductContainer>
              <ListManager
                items={props.dragElement}
                direction="horizontal"
                maxItems={3}
                render={item => <ProductList item={item} />}
                onDragEnd={dragEnd}
              />
            </ProductContainer>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default ColumnDrag;
