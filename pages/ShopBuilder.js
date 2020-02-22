import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import { onDragEnd } from "../store/actions/ShopBuilderActions";

const ShopBuilder = props => {
  const columnArr = Object.entries(props.state.Page.columns);
  return (
    <div>
      {/*holds context for drag and drop can pass in events
         for dragging*/}
      <DragDropContext onDragEnd={props.onDragEnd}>
        <PageDroppable>
          {columnArr.map((entry, index) => {
            const droppableContainer = entry[0];
            const dndContainer = entry[1].id;
            const dragElement = entry[1].items;
            const type = entry[1].type;
            return (
              <ColumnDrop
                key={droppableContainer}
                columnId={droppableContainer}
                dragElement={dragElement[0]}
                type={type}
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
      <button></button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state.workspace
  };
};

export default connect(mapStateToProps, { onDragEnd })(ShopBuilder);
