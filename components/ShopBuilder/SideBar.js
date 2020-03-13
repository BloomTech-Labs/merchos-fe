import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const DragItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  width: 100px;
  height: 100px;
  background: #aaacb1;
  color: white;
  box-sizing:border-box;
  margin: 20px;
  border-radius: 15px;
  box-shadow: -2px -2px 6px 2px #FFF, 2px 2px 6px 2px #8e9093;
`;

const SideBarItemName = styled.div`
cursor: pointer;
`;


const SideBar = props => {
  const handleDragStart = e => {
    e.dataTransfer.setData("text/plain", "");
  };
  return (
      <div
        id={`${props.index}`}
        key={props.index}
        draggable={true}
        onDragStart={handleDragStart}
        unselectable="on"
        className="droppable-element"
      >
    <DragItemContainer>
        <SideBarItemName>{props.content}</SideBarItemName>
    </DragItemContainer>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    sidebar: state.workspace.SideBar
  };
};

export default connect(mapStateToProps, null)(SideBar);
