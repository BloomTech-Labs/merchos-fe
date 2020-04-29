import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { removeCartItem } from "../store/actions/storeCheckout/storeCheckout";

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  align-items: flex-end;
`;

const OriginalPrice = styled.text`
  color: #73be6d;
  font-size: 2.5rem;
`;

const RemoveItem = styled.text`
  color: #0751ff;
  font-size: 2rem;
  padding-top: 75%;
  cursor: pointer;
`;

const ItemTotal = () => {
  const itemDelete = e => {
    const bool = confirm(
      "Are you sure that you would like to remove this item?"
    );
    if (bool == true) {
    }
    e.preventDefault();
    removeCartItem(itemIdInCart);
  };
  return (
    <div>
      <TotalContainer>
        <OriginalPrice>$13.99</OriginalPrice>
        <RemoveItem onClick={itemDelete}>Remove</RemoveItem>
      </TotalContainer>
    </div>
  );
};

export default ItemTotal;
