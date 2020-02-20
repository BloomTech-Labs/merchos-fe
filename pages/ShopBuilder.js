import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import { Item } from "merch_components";
import { onDragEnd } from "../store/actions/ShopBuilderActions";

// This is an example of state, just to help me remember what it looks like, delete later
// const initialState = {
//   Page: {
//     id: "Page",
//     title: "Workspace",
//     columns: {
//       //This is where the page columns are held which is the layout of the page
//       firstColumn: [{ id: "box1", content: "gosadft stuff" stuff: 'asfdsf}]
//     }
//   }
// };

const ShopBuilder = props => {
  const columnArr = Object.entries(props.state.Page.columns);
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <PageDroppable>
        {columnArr.map((entry, index) => {
          const droppableContainer = entry[0];
          const dndContainer = entry[1].id;
          const dragElement = entry[1].items;
          return (
            <ColumnDrop
              key={droppableContainer}
              columnId={droppableContainer}
              dragElement={dragElement[0]}
            >
              <ColumnDrag
                columnId={dndContainer}
                dragElement={dragElement}
                index={index}
                dndContainer={dndContainer}
              />
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

export default connect(mapStateToProps, { onDragEnd })(ShopBuilder);
