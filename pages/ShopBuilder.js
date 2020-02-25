import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import { onDragEnd } from "../store/actions/ShopBuilderActions";
import { changeEleHeight } from "../store/actions/ShopBuilderActions";
import Element from "../components/ShopBuilder/Element";
import ProductList from "../components/ShopBuilder/ProductList";
import { ListManager } from "react-beautiful-dnd-grid";

const ProductContainer = styled.div`
  margin: 0 auto;
  background: red;
`;

const ShopBuilder = props => {
  //const columnArr = Object.entries(props.state.Page.columns);
  return (
    // {/*holds context for drag and drop can pass in events
    //    for dragging*/}
    <DragDropContext onDragEnd={props.onDragEnd}>
      <PageDroppable>
        {props.state.Page.columns.map((column, index) => {
          const dragElements = column.items;
          const clickedOnDropId = index;
          return (
            <ColumnDrop
              key={index}
              columnId={`${index}`}
              direction={column.id === "Products" ? "horizontal" : "vertical"}
            >
              {dragElements.map((draggable, index) => {
                return (
                  <ColumnDrag
                    key={draggable.id}
                    columnId={draggable.id}
                    index={index}
                    width={draggable.width || "100%"}
                  >
                    <Element
                      draggable={draggable}
                      clickedOnDropId={clickedOnDropId}
                      clickedOnDragId={index}
                      changeEleHeight={props.changeEleHeight}
                    />
                  </ColumnDrag>
                );
              })}
            </ColumnDrop>
          );
        })}
      </PageDroppable>
    </DragDropContext>
  );
};

const mapStateToProps = state => {
  return {
    state: state.workspace
  };
};

export default connect(mapStateToProps, { onDragEnd, changeEleHeight })(
  ShopBuilder
);
