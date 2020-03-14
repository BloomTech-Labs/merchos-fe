import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const DragItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  width: 88px;
  height: 88px;
  background: #aaacb1;
  color: white;
  box-sizing:border-box;
  margin: 15px;
  border-radius: 15px;
  box-shadow: -2px -2px 6px 2px #FFF, 2px 2px 6px 2px #8e9093;
`;

const SideBarItemName = styled.div`
cursor: pointer;
font-size: 1vw;
margin: 1vh;
`;


const SideBar = props => {
  const handleDragStart = (e, setDragId) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setDragId(e.target.id);
  };
  return (
      <div
        id={`${props.itemId}`}
        draggable={true}
        onDragStart={e => {
          handleDragStart(e, props.setDragId);
        }}
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
