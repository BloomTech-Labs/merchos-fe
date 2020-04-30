import React from "react";
import { connect } from "react-redux";
import {
  setImageAction,
  setCarouselAction,
} from "../../store/actions/ShopBuilderActions";
import styled from "styled-components";
import CreateProducts from "../ProductCreation/CreateProducts";

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

const ModalComponents = (props) => {
  function handleImage(e) {
    props.setImageAction(
      URL.createObjectURL(e.target.files[0]),
      Number(props.editId)
    );
  }
  function handleCarousel(e) {
    const tempImageArr = [];
    [...e.target.files].map((file) => {
      tempImageArr.push(URL.createObjectURL(file));
    });
    props.setCarouselAction(tempImageArr, Number(props.editId));
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
              onChange={(e) => handleImage(e)}
            />
          </label>
        );
      case "carousel":
        return (
          <label>
            Choose Files:
            <input
              type="file"
              accept="image/png, image/jpeg"
              name={props.editId}
              onChange={(e) => handleCarousel(e)}
              multiple
            />
          </label>
        );
      case "product-container":
        return (
          <div onClick={(e) => e.stopPropagation()}>
            <CreateProducts name={Number(props.editId)} />;
          </div>
        );
      default:
        return <div>No component available</div>;
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

export default connect(null, { setImageAction, setCarouselAction })(
  ModalComponents
);
