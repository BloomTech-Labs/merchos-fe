import React, { useState } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DropConditions from "../components/ShopBuilder/DropConditions";
import { DragDropContext } from "react-beautiful-dnd";
import PageDroppable from "../components/ShopBuilder/PageDroppable";
import ColumnDrag from "../components/ShopBuilder/ColumnDrag";
import ColumnDrop from "../components/ShopBuilder/ColumnDrop";
import { onDragEndAction } from "../store/actions/ShopBuilderActions";
import StoreNameForm from "../components/ShopBuilder/StoreNameForm";
import ModalLayout from "../components/ShopBuilder/ModalLayout";
import ListManager from "../components/ShopBuilder/ListManager";
import DragItem from "../components/ShopBuilder/DragItem";
import { setProductIdAction } from "../store/actions/ShopBuilderActions";
import styled from "styled-components";
import SideBar from "../components/SidebarBuilder/SideBar";

const Container = styled.div`
  min-height: ${props => props.dropHeight || "100px"};
  ${props => {
    if (props.isProduct) {
      return `display: flex;
              `;
    } else {
      return `display: flex;
              `;
    }
  }}
  flex-wrap: wrap;
  padding: 10px, 0;
  border: ${props =>
    props.isDraggingOver ? "10px dashed rgba(0, 230, 64, 1)" : "none"};
  border: 1px solid black;
  background: transparent;
`;

const Button = styled.button`
  font-size: 1.5rem;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemMargins = styled.div`
  margin: 75px 0 0 0;
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
                <ColumnDrag
                  key={`${interactDropId}`}
                  columnId={column.id}
                  index={interactDropId}
                >
                  <ItemMargins>
                    {RegExp("PRODUCTS_.*").test(column.id) ? (
                      <ColumnDrop
                        key={interactDropId}
                        columnId={`${interactDropId}`}
                        dropHeight={column.height}
                        isProduct={true}
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
                        type="GENERAL"
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
                  </ItemMargins>
                </ColumnDrag>
              );
            })}
          </PageDroppable>
        </DragDropContext>
      </ShopContainer>
    </div>
  );
};
// export default ShopBuilder;
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
