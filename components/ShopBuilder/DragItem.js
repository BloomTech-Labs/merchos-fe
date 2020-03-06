import React from "react";
import { connect } from "react-redux";
import {
  changeEleHeightAction,
  deleteElementAction
} from "../../store/actions/ShopBuilderActions";
import ColumnDrag from "./ColumnDrag";
import Element from "./Element";

const DragItem = props => {
  return (
    <ColumnDrag
      columnId={props.draggable.id}
      index={props.index}
      width={props.draggable.width || "100%"}
      dragAll={false}
    >
      <Element
        draggable={props.draggable}
        interactDropId={props.interactDropId}
        changeEleHeight={props.changeEleHeightAction}
        deleteElement={props.deleteElementAction}
      />
    </ColumnDrag>
  );
};

export default connect(null, { changeEleHeightAction, deleteElementAction })(
  DragItem
);
