import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const QtyOption = styled.button`
  height: 35px;
  width: 130px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0751ff;
`;

const QtyLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;
const ItemOptions = () => {
  return (
    <div>
      <QtyOption>
        <QtyLabel>
          Qty: 1 <IoMdArrowDropdown size="2rem" color="#fff" />
        </QtyLabel>
      </QtyOption>
    </div>
  );
};

export default ItemOptions;
