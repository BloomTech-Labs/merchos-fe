import React from "react";
import styled from "styled-components";
import SelectProducts from "./SelectProducts";
import DisplayProduct from "./DisplayProduct";
import ProductData from "./ProductData";

const CreateProducts = () => {
  const ProductContainer = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    background: rgba(0, 0, 0, 0.9);
  `;

  const CreationModal = styled.div`
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 27%;
    height: 72%;
    border-radius: 30px;
  `;
  return (
    <div>
      <ProductContainer>
        <CreationModal>
          <SelectProducts />
          <DisplayProduct />
          <ProductData />
        </CreationModal>
      </ProductContainer>
    </div>
  );
};

export default CreateProducts;
