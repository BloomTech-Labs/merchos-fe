import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${props => props.height};
  background: #7d34eb;
  font-size: 2rem;
`;

const ProductList = props => {
  return (
    <Container height={props.item.height}>
      <p>{props.item.content}</p>
    </Container>
  );
};

export default ProductList;
