import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { connect } from "react-redux";
import { updateItem } from "../../store/actions/ShopBuilderActions";

const StyledInput = styled.label`
  font-size: 25px;
  width: 450px;
  position: relative;
  display: flex;
  border-color: black;
  outline: 0 none;

  &:after {
    content: "$";
    font-size: 16px;
    position: absolute;
    left: 61px;
    top: 7px;
    z-index: 1;
  }
`;

const StyledLabel = styled.label`
  font-size: 25px;
  width: 450px;
  position: relative;
  display: flex;
`;

const StyledForm = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 70%;
  left: 13%;
  width: 334px;
`;

const InputSize = styled.input`
  height: 30px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1920px) {
    margin-bottom: 10px;
  }
`;

const Submit = styled.button`
  width: 155px;
  height: 65px;
  border-radius: 10px;
  font-size: 20px;
  margin: auto 179px;
  outline: none;
  color: white;
  background: blue;
  cursor: pointer;
`;
const Header = styled.h3`
  font-weight: bold;
`;
const ProductData = (props) => {
  const [colors, setColors] = useState([]);

  const { image, name } = props;

  const [productData, setProductData] = useState({
    itemName: "",
    itemCost: 0.0,
    saleCost: 0.0,
    onSale: false,
    imageSrc: "",
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      imageSrc: image,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateItem(productData, name);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">
          <Header>Title:</Header>
          <InputSize
            name="itemName"
            onChange={handleChange}
            value={productData.itemName}
          />
        </StyledLabel>
        <StyledLabel
          htmlFor="description"
          style={{ marginLeft: "-60px", width: "510px" }}
        ></StyledLabel>
        <StyledInput htmlFor="price">
          <Header style={{ marginLeft: "-11px" }}>Price:</Header>
          <InputSize
            name="itemCost"
            type="number"
            value={productData.itemCost}
            onChange={handleChange}
            style={{ paddingLeft: "17px" }}
          />
        </StyledInput>
        <StyledInput htmlFor="sale">
          <Header>Sale:</Header>
          <InputSize
            name="saleCost"
            type="number"
            value={productData.saleCost}
            onChange={handleChange}
            style={{ paddingLeft: "17px" }}
          />
        </StyledInput>

        <Submit>OK</Submit>
      </StyledForm>
    </>
  );
};

export default connect(null, { updateItem })(ProductData);
