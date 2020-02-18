import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import Element from "../components/ShopBuilder/Element";

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
  const columnArrVal = Object.values(props.state.Page.columns);
  const columnArrKey = Object.keys(props.state.Page.columns);
  return (
    <DragDropContext>
      <PageDroppable>
        {columnArrKey.map((key, index) => {
          const dragElement = columnArrVal[index][0];
          return (
            <ColumnDrop key={key} columnId={key} dragElement={dragElement}>
              <ColumnDrag columnId={dragElement.id}>
                <Element dragElement={dragElement} />
              </ColumnDrag>
            </ColumnDrop>
          );
        })}
      </PageDroppable>
    </DragDropContext>
  );
};

ShopBuilder.getInitialProps = ({ store }) => {
  return { store };
};

const mapStateToProps = state => {
  return {
    state: state.workspace
  };
};

export default connect(mapStateToProps)(ShopBuilder);
