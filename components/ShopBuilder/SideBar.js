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
  box-sizing: border-box;
  margin: 15px;
  border-radius: 15px;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #8e9093;
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

  const handleClick = e => {
    props.setDisplayModal(prevState => !prevState);
  };

  const generateSideBar = () => {
    if (props.itemId === "theme") {
      return (
        <div id={`${props.itemId}`} onClick={handleClick}>
          <DragItemContainer>
            <SideBarItemName>{props.content}</SideBarItemName>
          </DragItemContainer>
        </div>
      );
    } else {
      return (
        <div
          id={`${props.itemId}`}
          draggable={true}
          onDragStart={e => {
            handleDragStart(e, props.setDragId);
          }}
          unselectable="on"
        >
          <DragItemContainer>
            <SideBarItemName>{props.content}</SideBarItemName>
          </DragItemContainer>
        </div>
      );
    }
  };

  return generateSideBar();
};

const mapStateToProps = state => {
  return {
    sidebar: state.workspace.SideBar
  };
};

export default connect(mapStateToProps, null)(SideBar);
