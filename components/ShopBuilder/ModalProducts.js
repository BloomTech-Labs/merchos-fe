import React from "react";
import { connect } from "react-redux";
import { setImageAction } from "../../store/actions/ShopBuilderActions";
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
  function handlFiles(e) {
    props.setImageAction(
      URL.createObjectURL(e.target.files[0]),
      Number(props.editId)
    );
  }

  function editModalType() {
    switch (props.editType) {
      case "image":
        return (
          <label>
            Choose File:
            <input
              type="file"
              accept="image/png, image/jpeg"
              name={props.editId}
              onChange={(e) => handlFiles(e)}
            />
          </label>
        );
      default:
        return <div>broken</div>;
    }
  }

  return (
    <Container
      editProduct={props.editProduct}
      onClick={() => {
        props.display((prevState) => !prevState);
      }}
    >
      <Modal>{editModalType()}</Modal>
    </Container>
  );
};

export default connect(null, { setImageAction })(ModalProducts);
