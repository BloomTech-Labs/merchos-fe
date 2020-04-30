import React from "react";
import styled from "styled-components";
import SelectProducts from "./SelectProducts";

const CreateProducts = ({ name }) => {
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
    height: 70vh;
    border-radius: 30px;

    @media (max-width: 1920px) {
      height: 80vh;
      top: 40%;
    }
  `;
  return (
    <div>
      <ProductContainer>
        <CreationModal>
          <SelectProducts name={name} />
        </CreationModal>
      </ProductContainer>
    </div>
  );
};

export default CreateProducts;
