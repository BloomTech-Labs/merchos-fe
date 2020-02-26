import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import SideBar from "../sidebar/sidebar";
import { updateState } from "../store/reducers/action";
import Builder from "../sidebar/builder";

const DndBuilder = props => {
  const { data } = props;
  console.log(data, "data");

  const Container = styled.div`
    display: flex;
  `;

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(source);
    console.log(result);
    const column = data.columns[source.droppableId];
    const newProductIds = Array.from(column.productIds);
    newProductIds.splice(source.index, 1);
    newProductIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      productIds: newProductIds
    };
    console.log(newColumn, "newColumn");
    console.log(newProductIds);

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    };
    return updateState(newState);
  };

  return data.columnOrder.map(columnId => {
    const column = data.columns[columnId];
    const products = column.productIds.map(pId => data.product[pId]);
    console.log(column, "columns");

    // console.log(products, "products");

    return (
      <DragDropContext key={column.id} onDragEnd={onDragEnd}>
        <SideBar key={column.id} column={column} products={products} />
      </DragDropContext>
    );
  });
};
const mapStateToProps = state => {
  console.log(state.sidebar, "state");
  return {
    data: state.sidebar
  };
};

export default connect(mapStateToProps, { updateState })(DndBuilder);
