import React from "react";
import styled from "styled-components";

const Container = styled.div`
  ${(props) => (props.editProduct ? "" : "display: none;")}
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Modal = styled.div`
  font-size: 1.5rem;
  display: inherit;
  position: absolute;
  width: 200px;
  height: 400px;
  background: rgba(25, 181, 254, 1);
  margin: 15% 50%;
`;

const ModalProducts = (props) => {
  return (
    <Container
      editProduct={props.editProduct}
      onClick={() => {
        props.display((prevState) => !prevState);
      }}
    >
      <Modal>{props.editType}</Modal>
    </Container>
  );
};

export default ModalProducts;
