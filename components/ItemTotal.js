import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { removeCartItem } from "../store/actions/storeCheckout/storeCheckout";

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  align-items: flex-end;
`;

const OriginalPrice = styled.p`
  color: #73be6d;
  font-size: 2.5rem;
`;

const RemoveItem = styled.button`
  color: #0751ff;
  font-size: 2rem;
  padding-top: 75%;
  cursor: pointer;
`;

const ItemTotal = props => {

  return (
    <div>
      <TotalContainer>
        <OriginalPrice>$19.99</OriginalPrice>
        <RemoveItem onClick={props.deleteItem}>Remove</RemoveItem>
      </TotalContainer>
    </div>
  );
};

export default ItemTotal;
