import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { IoIosArrowBack } from "react-icons/io";

import ItemList from "../components/ItemListCheckout";

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
  return (
    <div>
      <Head>
        <Link onClick={() => window.history.back()}>
          <IoIosArrowBack size="4rem" color="#0751ff" />
          Back To Shop
        </Link>
        <Title>Checkout</Title>
      </Head>
      <Items>Items:</Items>
      <ItemContainer>
        <ItemList />
      </ItemContainer>
    </div>
  );
};

export default TestCheckout;
