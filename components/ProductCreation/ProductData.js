import React, { useState } from "react";
import styled from "styled-components";

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
const ProductData = ({ imageName }) => {
  const [productData, setProductData] = useState({
    title: imageName,
    description: "",
    price: 0.0,
    sale: 0.0,
  });

  const handleChange = (e) => {
    setProductData({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledLabel htmlFor="title">
          <Header>Title:</Header>
          <InputSize
            name="title"
            onChange={handleChange}
            value={productData.title}
          />
        </StyledLabel>
        <StyledLabel
          htmlFor="description"
          style={{ marginLeft: "-60px", width: "510px" }}
        >
          <Header style={{ marginLeft: "-19px" }}>Description:</Header>
          <InputSize
            name="description"
            onChange={handleChange}
            value={productData.description}
          />
        </StyledLabel>
        <StyledInput htmlFor="price">
          <Header style={{ marginLeft: "-11px" }}>Price:</Header>
          <InputSize
            name="price"
            type="number"
            value={productData.price}
            onChange={handleChange}
            style={{ paddingLeft: "17px" }}
          />
        </StyledInput>
        <StyledInput htmlFor="sale">
          <Header>Sale:</Header>
          <InputSize
            name="sale"
            type="number"
            value={productData.sale}
            onChange={handleChange}
            style={{ paddingLeft: "17px" }}
          />
        </StyledInput>
        <Submit>OK</Submit>
      </StyledForm>
    </>
  );
};

export default ProductData;
