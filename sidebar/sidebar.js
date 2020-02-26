import React, { useState } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Product from "./product";

const DnDContainer = styled.div`
  position: fixed;
  height: 100%;
  width: ${({ open }) => (open === true ? "5%" : "0")};
  border: 1px solid black;
  background: red;
  border-radius: 10px;
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

const SideBar = ({ products, column }) => {
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
  console.log(products, "sidebar");
  console.log(column, "sidebar");
  return (
    <DnDContainer open={openSideBar}>
      <Droppable droppableId={column.id}>
        {provided =>
          products.map((product, index) => (
            <div
              key={index}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Product
                key={index}
                product={product}
                index={index}
                open={openSideBar}
              />
              {provided.placeholder}
            </div>
          ))
        }
      </Droppable>
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

export default SideBar;
