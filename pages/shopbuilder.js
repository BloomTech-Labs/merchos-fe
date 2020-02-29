import React, { useState } from "react";
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
import ModalLayout from "../components/ShopBuilder/ModalLayout";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.5rem;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ShopBuilder = props => {
  const [displayModal, setDisplayModal] = useState(true);

  const display = e => {
    setDisplayModal(!displayModal);
  };

  return (
    <div>
      <ModalLayout displayModal={displayModal} display={display} />
      <ShopContainer blurContainer={displayModal}>
        <Button onClick={display}>show layout</Button>
        <StoreNameForm />
        {/*holds context for drag and drop can pass in events
       for dragging*/}
        <DragDropContext onDragEnd={props.onDragEndAction}>
          <PageDroppable>
            {props.state.Page.columns.map((column, index) => {
              const dragElements = column.items;
              const clickedOnDropId = index;
              return (
                <ColumnDrop
                  key={index}
                  columnId={`${index}`}
                  direction={
                    RegExp("PRODUCTS_.*").test(column.id)
                      ? "horizontal"
                      : "vertical"
                  }
                  dropHeight={column.height}
                >
                  {/* {dragElements.map((draggable, index) => {
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
                  })} */}
                </ColumnDrop>
              );
            })}
          </PageDroppable>
        </DragDropContext>
      </ShopContainer>
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
//changed name of page of shopbuilder back to ShopBuilder
