import React from "react";
import styled from "styled-components";
import Router from "next/router";
import ItemOptions from "../components/ItemOptions";

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
  margin-top: 2%;
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

const ItemListCheckout = () => {
  return (
    <div>
      <ItemContainer>
        <ItemImage />
        <ItemInfoCol>
          <ItemTitle> A Really Cool Shirt</ItemTitle>
          <ItemDescription>
            A really cool shirt! This is the best item ever. You should look
            really cool when you wear it. High quality, buy it now!
          </ItemDescription>
          <ItemOptions />
        </ItemInfoCol>
      </ItemContainer>
    </div>
  );
};

export default ItemListCheckout;
