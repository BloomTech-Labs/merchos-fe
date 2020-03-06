import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  height: max-content;
  width: ${props => props.width};
  position: relative;
  background: transparent;
`;

const TopHandleBar = styled.div`
  position: relative;
  height: 30px;
  ${props => {
    if (props.dragAll) {
      return `display: ${props.mouseOver ? "static" : "none"};`;
    } else {
      return null;
    }
  }}

  background: orange;
`;

// const BottomHandleBar = TopHandleBar`
// top: auto;
// bottom: 0;
// `;

// const LeftHandleBar = TopHandleBar`
// top: auto;
// left: 0;
// `;

// const RightHandleBar = TopHandleBar`
// top: auto;
// right: 0;
// `;

const ColumnDrag = props => {
  const [showHandles, setShowHandles] = useState(false);

  const showDragHandles = e => {
    setShowHandles(!showHandles);
  };

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
            <div onMouseEnter={showDragHandles} onMouseLeave={showDragHandles}>
              <TopHandleBar
                {...provided.dragHandleProps}
                mouseOver={showHandles}
                dragAll={props.dragAll}
              />
              {props.children}
            </div>
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
