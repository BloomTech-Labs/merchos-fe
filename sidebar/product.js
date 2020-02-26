import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const ProductList = styled.div`
  font-size: 30px;
  display: ${({ open }) => (open === false ? "none" : "block")};
`;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Product = ({ product, index, open }) => {
  console.log(index, "index");
  return (
    <Draggable draggableId={product.id} index={index}>
      {provided => {
        return (
          <Container
            key={product.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ProductList open={open} ref={provided.innerRef}>
              {product.content}
            </ProductList>
          </Container>
        );
      }}
    </Draggable>
  );
};

export default Product;
