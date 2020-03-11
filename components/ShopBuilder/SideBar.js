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
  const handleDragStart = e => {
    console.log("E: ", e);
    e.dataTransfer.setData("text/plain", "");
  };
  return (
    <Item>
      <div
        id={`${props.index}`}
        key={props.index}
        draggable={true}
        onDragStart={handleDragStart}
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
