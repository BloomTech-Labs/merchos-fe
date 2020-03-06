import React, { useState } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import { onDragEndAction } from "../store/actions/ShopBuilderActions";
import StoreNameForm from "../components/ShopBuilder/StoreNameForm";
import ModalLayout from "../components/ShopBuilder/ModalLayout";
import ListManager from "../components/ShopBuilder/ListManager";
import DragItem from "../components/ShopBuilder/DragItem";
import { setProductIdAction } from "../store/actions/ShopBuilderActions";
import styled from "styled-components";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";

const Button = styled.button`
  font-size: 1.5rem;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
              const interactDropId = index; //index of drop location being interacted with, row in column
              return (
                <ColumnDrag
                  key={column.id}
                  columnId={column.id}
                  index={interactDropId}
                  width="100%"
                  dragAll={true}
                >
                  {RegExp("PRODUCTS_.*").test(column.id) ? (
                    <ColumnDrop
                      key={interactDropId}
                      columnId={`${interactDropId}`}
                      dropHeight={column.height}
                      isProduct={true}
                      type="PRODUCT-AREA"
                    >
                      <ListContainer>
                        <ListManager
                          dragElements={dragElements}
                          rowLimit={column.rowLimit}
                          index={index}
                          interactDropId={interactDropId}
                          setProductIdAction={props.setProductIdAction}
                        />
                      </ListContainer>
                    </ColumnDrop>
                  ) : (
                    <ColumnDrop
                      key={interactDropId}
                      columnId={`${interactDropId}`}
                      dropHeight={column.height}
                      isProduct={false}
                      type="ITEM"
                    >
                      {dragElements.map((draggable, index) => {
                        return (
                          <DragItem
                            key={draggable.id}
                            draggable={draggable}
                            index={index}
                            interactDropId={interactDropId}
                          />
                        );
                      })}
                    </ColumnDrop>
                  )}
                </ColumnDrag>
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
  setProductIdAction
})(ShopBuilder);
//changed name of page of shopbuilder back to ShopBuilder
