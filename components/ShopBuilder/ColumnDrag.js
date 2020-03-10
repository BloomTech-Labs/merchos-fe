import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  ${props => {
    if (props.width) {
      return `width: ${props.width};`;
    } else {
      return "flex-grow: 1;";
    }
  }}

  height: max-content;
  position: relative;
  background: transparent;
`;

const ColumnDrag = props => {
  return (
    <Draggable
      draggableId={props.columnId}
      index={props.index}
      isDragDisabled={props.isLive}
    >
      {(provided, snapshot) => (
        <Container width={props.width}>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.children}
          </div>
        </Container>
      )}
    </Draggable>
  );
};

const mapStateToProps = state => {
  return {
    isLive: state.workspace.Page.isLive
  };
};

export default connect(mapStateToProps, null)(ColumnDrag);
