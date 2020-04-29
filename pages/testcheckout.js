import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

import ItemList from "../components/ItemListCheckout";
import Totals from "../components/cartCheckout/totals";

const Head = styled.div`
  display: flex;
  width: 45%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-left: 2%;
`;

const Link = styled.h3`
  font-size: 2rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  color: #0751ff;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding-top: 2%;
  color: #000000;
`;

const Items = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  justify-content: start;
  margin-top: 1%;
  margin-left: 2%;
  color: #000000;
`;

const ItemContainer = styled.div`
  margin-top: 1%;
  margin-left: 2%;
`;

const TestCheckout = () => {
  const cart = useSelector(state => state.cartCheckoutReducer.cart);
  console.log(cart);
  return (
    <div>
      <Head>
        <Link onClick={() => window.history.back()}>
          <IoIosArrowBack size="4rem" color="#0751ff" />
          Back To Shop
        </Link>
        <Title>Checkout</Title>
      </Head>
      <div>
        <div>
          <Items>Items:</Items>
          <ItemContainer>
            {cart.length > 0
              ? cart.map(item => (
                  <ItemList key={item.itemIdInCart} data={item} />
                ))
              : "Your cart is empty"}
          </ItemContainer>
        </div>
        <Totals />
      </div>
    </div>
  );
};

export default TestCheckout;
