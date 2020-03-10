import React from "react";
import ColumnDrop from "./ColumnDrop";
import DragItem from "./DragItem";
import styled from "styled-components";

const Item = styled.div``;

const splitList = (list, limit) => {
  const tempList = Array.from(list);
  const tempArr = [];
  while (tempList.length > 0) {
    tempArr.push(tempList.splice(0, limit));
  }
  return tempArr;
};

const getDropId = dropId => {
  const strArr = dropId.split("-");
  strArr.pop();
  strArr.pop();
  return strArr.join("-");
};

const ListManager = props => {
  return splitList(props.dragElements, props.rowLimit).map((row, index) => {
    const itemsDropIndex = index;
    //columnDropIndex is a combination of the column index and
    //the index of the droppable currently being dragged
    const columnDropIndex = `${props.interactDropId}-${itemsDropIndex}-${props.rowLimit}-PRODUCTS`;
    return (
      <ColumnDrop
        key={columnDropIndex}
        columnId={columnDropIndex}
        dropHeight={props.dropHeight}
        isProduct={true}
        type="PRODUCTS"
      >
        {row.map((draggable, index) => {
          const itemIndex = props.rowLimit * itemsDropIndex + index;
          //columnDropIndex + index is the representation of what column index
          //and droppable index the item is on as well as the index of the draggable
          const dragProductId = `${getDropId(columnDropIndex)}-${itemIndex}`;
          //as this stands setProductIdAction function would reset all the id's of the
          //products after every update of state
          //not really a good idea right now, but the best I got for this double list
          //problem
          if (draggable.id !== dragProductId) {
            props.setProductIdAction(dragProductId);
          }

          return (
            <DragItem
              key={dragProductId}
              draggable={draggable}
              index={index}
              interactDropId={props.interactDropId}
            />
          );
        })}
      </ColumnDrop>
    );
  });
};

export default ListManager;
