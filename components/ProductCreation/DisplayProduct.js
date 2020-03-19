import React, { useState } from "react";
import styled from "styled-components";
import { CirclePicker } from "react-color";
import ProductData from "./ProductData";
import ColorProduct from "./ColorProduct";

const DisplayProduct = () => {
  const StyledProduct = styled.div`
    height: 100px;
    width: 100px;
    top: 20%;
    left: 30%;
    margin: 60px 0 0 170px;
    position: relavtive;
  `;

  const ProductTitle = styled.h2`
    font-size: 20px;
    display: flex;
    flex-direction: row;
    width: 400px;
    margin-bottom: 10px;
    font-weight: bold;
  `;

  const Image = styled.img`
    height: 400px;
    width: 400px;
    position: absolute;
    left: 22%;
    border: 3px solid aqua;
    border-radius: 30px;
    background: #fefefe;
    filter: blur;

    // &:before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   mix-blend-mode: hue;
    //   background: blue;
    // }
  `;

  const Random = styled.div`
    width: 400px;
    height: 400px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: red;
      // mix-blend-mode: hue;
    }
  `;
  const [product, setProduct] = useState({
    title: "",
    price: "0.0"
  });

  console.log(product);

  const handleChange = e => {
    e.preventDefault();
    setProduct({ [e.target.name]: e.target.value });
  };
  const handleColorChange = e => {
    setColor({ background: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <>
      {/* <CirclePicker color={color.color} onChangeComplete={handleColorChange} /> */}
      <StyledProduct>
        <ProductTitle>Big teeshirt name just to see: $6.00</ProductTitle>
        <Random>
          <Image
            src={
              "https://images.topman.com/i/TopMan/TM71T66MWHT_F_1.jpg?$Zoom$"
            }
          />
        </Random>
        <ColorProduct />
      </StyledProduct>
    </>
  );
};

export default DisplayProduct;
