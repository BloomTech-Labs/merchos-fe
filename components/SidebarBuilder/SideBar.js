import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import Products from "./Products";
import DragProduct from "./DragProduct";

const DnDContainer = styled.div`
  position: fixed;
  height: 100%;
  width: ${({ open }) => (open === true ? "3%" : "0")};
  border: 1px solid black;
  background: aqua;
  border-radius: 10px;
  z-index: 1;
`;

const ToggleButton = styled.button`
  position: absolute;
  left: 80%;
  top: 50%;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  outline-shadow: none;
  outline: none;
`;

const SideBar = props => {
  const { data } = props;
  const [openSideBar, setOpenSideBar] = useState(true);
  const [arrow, setArrow] = useState("<");

  const toggleSideBar = () => {
    if (openSideBar === true) {
      setOpenSideBar(false);
      setArrow(">");
    } else {
      setOpenSideBar(true);
      setArrow("<");
    }
  };

  return (
    <DnDContainer
      open={openSideBar}
      // key={products.id}
      // columnId={products.id}
      // index={index}
    >
      {data.SideBar.column.map((column, index) => {
        const dragProducts = column.items;
        return (
          <Droppable
            droppableId={data.SideBar.id}
            key={index}
            isDropDisabled={true}
          >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {dragProducts.map((products, index) => {
                  return (
                    <DragProduct
                      columnId={products.id}
                      index={index}
                      key={products.id}
                    >
                      <Products open={openSideBar} products={products} />
                      {props.children}
                    </DragProduct>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}
      <ToggleButton
        onClick={e => {
          toggleSideBar();
        }}
      >
        {arrow}
      </ToggleButton>
    </DnDContainer>
  );
};

const mapStateToProps = state => {
  return {
    data: state.workspace
  };
};

export default connect(mapStateToProps, {})(SideBar);
