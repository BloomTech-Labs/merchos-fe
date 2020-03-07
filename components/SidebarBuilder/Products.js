import React from "react";
import styled from "styled-components";

const Products = props => {
  const ProductSize = styled.div`
    font-size: 30px;
    display: ${({ open }) => (open === false ? "none" : "block")};
  `;
  console.log(props, "props products");
  return <ProductSize open={props.open}>{props.products.content}</ProductSize>;
};

export default Products;
