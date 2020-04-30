import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductData from "./ProductData";
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

const Icons = styled.div`
  margin: 3.5rem 0 0 3.8rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 1920px) {
    margin-top: 1.5rem;
  }
`;

const ProductHeading = styled.h2`
  font-size: 25px;
  position: relative;
  left: 30%;
  width: 36%;
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
  border: 1px solid black;
  width: 50px;
  outline: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
`;

const ImageName = styled.h1`
  font-size: 20px;
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const CarouselContainer = styled.div`
  margin: -12rem auto 0 auto;
  z-index: -100;
  width: 80%;

  @media (max-width: 1920px) {
    margin: -13rem auto 0 auto;
    width: 70%;
    z-index: -100;
  }
`;

const SelectProducts = ({ name }) => {
  const [selected, setSelected] = useState(false);
  const [productName, setProductName] = useState("short-sleeve-shirts");
  const [products, setProducts] = useState([]);
  const [iterator, setIterator] = useState(2);
  const [productId, setProductId] = useState([]);
  const [count, setCount] = useState(0);

  let productIdArray = [];

  const productCall = `https://api.scalablepress.com/v2/categories/${productName}`;
  const idCall = `https://api.scalablepress.com/v2/products/${productId}`;

  useEffect(() => {
    Axios.get(
      `https://api.scalablepress.com/v2/categories/${productName}`
    ).then((data) => {
      const ids = [];
      const promiseArray = [];
      const results = data.data.products.filter((p, i) => {
        if (!p.image) {
          p[i++];
        } else if (i + 1 < iterator * 5 + 1) {
          ids.push(p.id);

          return p.name;
        } else {
          return null;
        }
      });
      setProducts(results);

      ids.forEach((id) => {
        promiseArray.push(
          Axios.get(`https://api.scalablepress.com/v2/products/${id}`)
        );
      });

      Axios.all([...promiseArray])
        .then(Axios.spread((...response) => {}))
        .catch((err) => console.log(err));
    });
  }, [productName]);

  const images = [];
  const pnames = [];
  const getImages = () => {
    products.map((ps, i) => {
      images.push(ps.image.url);
      pnames.push(ps.name);
    });
  };
  getImages();

  let imageTitle = "";

  const callback = (e) => {
    for (let i = 0; i < images.length; i++) {
      if (count === i) {
        imageTitle += pnames[i];
        productIdArray.push(productId[i]);
      }
    }
  };

  const handleClick = (e) => {
    setProductName(e.target.value);
  };

  const increment = () => {
    if (count >= images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 0) {
      setCount(images.length - 1);
    } else {
      setCount(count - 1);
    }
  };

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
        <h2 style={{ marginLeft: "-.6rem" }}>Shirt</h2>
        <h2 style={{ marginLeft: "5.2rem" }}>Hat</h2>
        <h2 style={{ marginLeft: "3rem" }}>OuterWear</h2>
        <h2 style={{ marginLeft: "1.7rem" }}>Shorts</h2>
        <h2 style={{ marginLeft: "3.7rem" }}>Mug</h2>
        <h2 style={{ marginLeft: "4.7rem" }}>Bag</h2>
        <h2 style={{ marginLeft: "5.3rem" }}>Kid</h2>
        <h2 style={{ marginLeft: "4.2rem" }}>Posters</h2>
      </ProductTitle>
      <CarouselContainer>
        {callback()}

        <div>
          <ImageName>{imageTitle}</ImageName>
        </div>

        <Carousel
          images={images}
          count={count}
          incrementCB={increment}
          decrementCB={decrement}
        />
      </CarouselContainer>
      <ProductData image={images[count]} name={name} />
    </div>
  );
};

export default SelectProducts;
