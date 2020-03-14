import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  width: 100px;
  height: 100px;
  background: green;
`;

const SideBar = props => {
  const handleDragStart = (e, setDragId) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setDragId(e.target.id);
  };
  return (
    <Item>
      <div
        id={`${props.itemId}`}
        draggable={true}
        onDragStart={e => {
          handleDragStart(e, props.setDragId);
        }}
        unselectable="on"
        className="droppable-element"
      >
        {props.content}
      </div>
    </Item>
  );
};

const mapStateToProps = state => {
  return {
    sidebar: state.workspace.SideBar
  };
};

export default connect(mapStateToProps, null)(SideBar);
