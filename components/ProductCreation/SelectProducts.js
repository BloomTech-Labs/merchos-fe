import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Bag,
  Cap,
  Mug,
  OuterWear,
  Shirt,
  Poster,
  Pants,
  Kids,
} from "./Icons/icons";
import Axios from "axios";

const Icons = styled.div`
  margin: 35px 0 0 38px;
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

const SVG = styled.svg`
  margin-right: 30px;
  border: 1px solid black;
  width: 60px;
  height: 60px;
  background: ${({ select }) => (select === true ? "blue" : "white")}
  fill: black;
  border-radius: 8px;
  cursor: pointer;
  pointer-events: none;
`;

const SelectProducts = ({ select }) => {
  const [selected, setSelected] = useState(true);

  const toggleSelected = () => {
    select === selected ? setSelected(!selected) : setSelected(!selected);
  };

  console.log(selected);
  return (
    <div>
      <ProductHeading>Pick a Product to Sell:</ProductHeading>
      <Icons>
        <Shirt />
        <SVG select={select} onClick={toggleSelected}>
          <Cap />
        </SVG>
        <OuterWear />
        <Pants />
        <Mug />
        <Bag />
        <Kids />
        <Poster />
      </Icons>
      <ProductTitle>
        <h2>Shirt</h2>
        <h2 style={{ marginLeft: "49px" }}>Hat</h2>
        <h2 style={{ marginLeft: "37px" }}>OuterWear</h2>
        <h2 style={{ marginLeft: "15px" }}>Pants</h2>
        <h2 style={{ marginLeft: "41px" }}>Mug</h2>
        <h2 style={{ marginLeft: "50px" }}>Bag</h2>
        <h2 style={{ marginLeft: "50px" }}>Kid</h2>
        <h2 style={{ marginLeft: "45px" }}>Posters</h2>
      </ProductTitle>
    </div>
  );
};

export default SelectProducts;
