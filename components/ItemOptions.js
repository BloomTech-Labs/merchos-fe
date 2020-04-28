import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const QtyOption = styled.button`
  height: 35px;
  width: 155px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
  background-color: #0751ff;
`;

const QtyLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .qty-select {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: #0751ff;
    border: none;
    color: white;
    padding: 5px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .qty-select: hover,
  .qty-select: focus {
    color: #0751ff;
    background-color: white;
  }
`;

const SizeOption = styled.button`
  height: 35px;
  width: 145px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  background-color: #0751ff;
`;

const SizeLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ColorOption = styled.button`
  height: 35px;
  width: 145px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  background-color: #0751ff;
`;

const ColorLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ItemOptions = () => {
  return (
    <div>
      <QtyOption>
        <QtyLabel>
          Qty:
          <div className="qty-select">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <IoMdArrowDropdown size="2rem" color="#fff" />
        </QtyLabel>
      </QtyOption>
      <SizeOption>
        <SizeLabel>
          Size:
          <select>
            <option value="XS">SM</option>
            <option value="SM">SM</option>
            <option value="MD">MD</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          {/* <IoMdArrowDropdown size="2rem" color="#fff" /> */}
        </SizeLabel>
      </SizeOption>
      <ColorOption>
        <ColorLabel>
          Color:
          <select>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Purple">Purple</option>
          </select>
          {/* <IoMdArrowDropdown size="2rem" color="#fff" /> */}
        </ColorLabel>
      </ColorOption>
    </div>
  );
};

export default ItemOptions;
