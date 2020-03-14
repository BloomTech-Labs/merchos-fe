import React from "react";
import styled from "styled-components";

const ProductSize = styled.div`
  font-size: 30px;
  display: ${({ open }) => (open === false ? "none" : "block")};
`;
const Products = props => {
  return <ProductSize open={props.open}>{props.products.content}</ProductSize>;
};

export default Products;
