import React from "react";
import styled from "styled-components";
import SelectProducts from "./SelectProducts";

const CreateProducts = () => {
  const ProductContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  `;

  const CreationModal = styled.div`
    border: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    height: 74vh;
    border-radius: 30px;
  `;
  return (
    <div>
      <ProductContainer>
        <CreationModal>
          <SelectProducts />
        </CreationModal>
      </ProductContainer>
    </div>
  );
};

export default CreateProducts;
