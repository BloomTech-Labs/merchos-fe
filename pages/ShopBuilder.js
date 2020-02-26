import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import { onDragEndAction } from "../store/actions/ShopBuilderActions";
import { changeEleHeightAction } from "../store/actions/ShopBuilderActions";
import { deleteElementAction } from "../store/actions/ShopBuilderActions";
import Element from "../components/ShopBuilder/Element";
import StoreNameForm from "../components/ShopBuilder/StoreNameForm";

const ShopBuilder = props => {
  return (
    // {/*holds context for drag and drop can pass in events
    //    for dragging*/}
    <div>
      <StoreNameForm />
      <DragDropContext onDragEnd={props.onDragEndAction}>
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
                        changeEleHeight={props.changeEleHeightAction}
                        deleteElement={props.deleteElementAction}
                      />
                    </ColumnDrag>
                  );
                })}
              </ColumnDrop>
            );
          })}
        </PageDroppable>
      </DragDropContext>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state.workspace
  };
};

export default connect(mapStateToProps, {
  onDragEndAction,
  changeEleHeightAction,
  deleteElementAction
})(ShopBuilder);
