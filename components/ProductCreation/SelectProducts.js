import React from "react";
import { FaTshirt, FaMugHot } from "react-icons/fa";
import styled from "styled-components";

const Icons = styled.div`
  // font-size: 50px;
  // position: relative;
  // top: 50px;
  // left: 50px;
  margin: 35px 0 0 40px;
  display: flex;
  flex-direction: row;
`;

const ProductHeading = styled.h2`
  font-size: 25px;
  position: relative;
  left: 30%;
  width: 35%;
  border-bottom: 1px solid black;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductTitle = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  margin-left: 50px;
`;

const products = ["Shirt", "Pants", "Mugs"];

const SelectProducts = () => {
  return (
    <div>
      <ProductHeading>Pick a Product to Sell:</ProductHeading>
      <Icons>
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            fontSize: "10px",
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaMugHot
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
        <FaTshirt
          style={{
            marginRight: "30px",
            border: "1px solid black",
            width: "80px",
            height: "60px",
            borderRadius: "8px"
          }}
        />
      </Icons>
      <ProductTitle>
        <h2>Shirt</h2>
        <h2 style={{ marginLeft: "53px" }}>Hat</h2>
        <h2 style={{ marginLeft: "37px" }}>OuterWear</h2>
        <h2 style={{ marginLeft: "17px" }}>Pants</h2>
        <h2 style={{ marginLeft: "43px" }}>Mug</h2>
        <h2 style={{ marginLeft: "50px" }}>Bag</h2>
        <h2 style={{ marginLeft: "50px" }}>Kid</h2>
        <h2 style={{ marginLeft: "45px" }}>Posters</h2>
      </ProductTitle>
    </div>
  );
};

export default SelectProducts;
