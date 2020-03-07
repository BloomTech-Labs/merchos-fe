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
import SideBar from "../components/SidebarBuilder/SideBar";

const Button = styled.button`
  font-size: 1.5rem;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ListContainer = styled.div`
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
          <SideBar />
          <PageDroppable>
            {props.state.Page.columns.map((column, index) => {
              const dragElements = column.items;
              const interactDropId = index; //index of drop location being interacted with, row in column
              return (
                <ColumnDrop
                  key={interactDropId}
                  columnId={`${interactDropId}`}
                  dropHeight={column.height}
                  isProduct={false}
                >
                  {RegExp("PRODUCTS_.*").test(column.id) ? (
                    <ListContainer>
                      <ListManager
                        dragElements={dragElements}
                        rowLimit={column.rowLimit}
                        index={index}
                        interactDropId={interactDropId}
                        setProductIdAction={props.setProductIdAction}
                      />
                    </ListContainer>
                  ) : (
                    dragElements.map((draggable, index) => {
                      return (
                        <DragItem
                          key={draggable.id}
                          draggable={draggable}
                          index={index}
                          interactDropId={interactDropId}
                        />
                      );
                    })
                  )}
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
  setProductIdAction
})(ShopBuilder);
//changed name of page of shopbuilder back to ShopBuilder
