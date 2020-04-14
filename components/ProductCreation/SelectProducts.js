import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "merch_components";
import Axios from "axios";
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
import DisplayProduct from "./DisplayProduct";

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

const Button = styled.button`
  margin-right: 30px;
  ::nth:child(1) {
    margin-right: 100px;
  }
  border: 1px solid black;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
`;

const SelectProducts = ({ select }) => {
  const [selected, setSelected] = useState(false);
  const [productName, setProductName] = useState("short-sleeve-shirts");
  const [products, setProducts] = useState([]);
  const [iterator, setIterator] = useState(2);
  const [tempArray, setTempArray] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.scalablepress.com/v2/categories/${productName}`
    ).then((data) => {
      console.log(data);
      setProducts(data.data.products);
      setTempArray(
        data.data.products.filter((p, i) => {
          if (!p.image) {
            p[i++];
          } else if (i + 1 < iterator * 5 + 1) {
            console.log("reach this");
            return p.image.url;
          } else {
            return null;
          }
        })
      );
    });
  }, [productName]);

  const toggleSelected = () => {
    setSelected(ture);
  };

  const handleClick = (e) => {
    setProductName(e.target.value);
    console.log(e.target.value);
  };
  console.log(selected);
  console.log("temparry", tempArray);
  return (
    <div>
      <ProductHeading>Pick a Product to Sell:</ProductHeading>
      <Icons>
        <Button
          select={selected}
          onClick={handleClick}
          value="short-sleeve-shirts"
        >
          <Shirt />
        </Button>
        <Button select={selected} onClick={handleClick} value="hats">
          <Cap />
        </Button>
        <Button select={selected} onClick={handleClick} value="outerwear">
          <OuterWear />
        </Button>
        <Button select={selected} onClick={handleClick} value="shorts">
          <Pants />
        </Button>
        <Button select={selected} onClick={handleClick} value="mugs">
          <Mug />
        </Button>
        <Button select={selected} onClick={handleClick} value="small-bags">
          <Bag />
        </Button>
        <Button select={selected} onClick={handleClick} value="youth-t-shirts">
          <Kids />
        </Button>
        <Button select={selected} onClick={handleClick} value="posters">
          <Poster />
        </Button>
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

      <div style={{ marginTop: "-116px", zIndex: -100 }}>
        <Carousel images={tempArray.map((pic) => pic.image.url)} />
      </div>
    </div>
  );
};

export default SelectProducts;
