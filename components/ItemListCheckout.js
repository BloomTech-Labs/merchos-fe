import React from "react";
import styled from "styled-components";
import Router from "next/router";
import ItemOptions from "../components/ItemOptions";
import ItemTotal from "../components/ItemTotal";
import { useDispatch } from "react-redux";

import {
  removeCartItem,
  updateItemInCart
} from "../store/actions/storeCheckout/storeCheckout";

const ItemContainer = styled.div`
  height: 250px;
  width: 800px;
  display: flex;
  border: solid #000000 1px;
`;

const ItemImage = styled.div`
  height: 215px;
  width: 240px;
  border: solid gray 1px;
  margin-left: 2%;
`;

const ItemInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 215px;
  width: 300px;
`;

const ItemTitle = styled.h3`
  font-size: 2.5rem;
  margin-top: 4%;
  margin-left: 2%;
`;

const ItemDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.3;
  margin-top: 2%;
  margin-left: 2%;
`;

const ItemTotalCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 215px;
  margin-top: 2%;
`;

const ItemListCheckout = props => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeCartItem(props.data));
  };

  return (
    <div>
      <ItemContainer>
        <ItemImage />
        <ItemInfoCol>
          <ItemTitle>{props.data.itemTitle}</ItemTitle>
          <ItemDescription>{props.data.itemDescription}</ItemDescription>
          <ItemOptions item={props.data} />
        </ItemInfoCol>
        <ItemTotalCol>
          <ItemTotal deleteItem={deleteItem} />
        </ItemTotalCol>
      </ItemContainer>
    </div>
  );
};

export default ItemListCheckout;
