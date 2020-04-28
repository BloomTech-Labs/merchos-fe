import React from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  display: flex;
  width: 210px;
  justify-content: flex-end;
`;

const OriginalPrice = styled.text`
  color: #00000;
  font-size: 2rem;
`;

const ItemTotal = () => {
  return (
    <div>
      <TotalContainer>
        <OriginalPrice>$16.99</OriginalPrice>
      </TotalContainer>
    </div>
  );
};

export default ItemTotal;
