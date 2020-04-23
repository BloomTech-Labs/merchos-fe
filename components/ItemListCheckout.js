import React from "react";
import styled from "styled-components";
import Router from "next/router";

const ItemCard = styled.div`
  height: 250px;
  width: 800px;
  border: solid #000000 1px;
`;

const ItemListCheckout = () => {
  return (
    <div>
      <ItemCard />
    </div>
  );
};

export default ItemListCheckout;
