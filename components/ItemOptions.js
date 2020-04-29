import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

import { useDispatch } from "react-redux";
import { updateItemInCart } from "../store/actions/storeCheckout/storeCheckout";

// const QtyOption = styled.button`
//   height: 35px;
//   width: 155px;
//   border-radius: 4px;
//   margin-left: 2%;
//   margin-top: 4%;
//   display: flex;
//   justify-content: space-evenly;
//   background-color: #0751ff;
// `;

// const QtyLabel = styled.label`
//   color: #ffffff;
//   font-size: 1.6rem;
//   font-weight: 500;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .qty-select {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     cursor: pointer;
//     background-color: #0751ff;
//     border: none;
//     color: white;
//     padding: 5px;

//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//   }

//   .qty-select: hover,
//   .qty-select: focus {
//     color: #0751ff;
//     background-color: white;
//   }
// `;

// const SizeOption = styled.button`
//   height: 35px;
//   width: 145px;
//   border-radius: 4px;
//   margin-left: 2%;
//   margin-top: 1%;
//   display: flex;
//   justify-content: space-evenly;
//   background-color: #0751ff;
// `;

// const SizeLabel = styled.label`
//   color: #ffffff;
//   font-size: 1.6rem;
//   font-weight: 500;
// `;

// const ColorOption = styled.button`
//   height: 35px;
//   width: 145px;
//   border-radius: 4px;
//   margin-left: 2%;
//   margin-top: 1%;
//   display: flex;
//   justify-content: space-evenly;
//   background-color: #0751ff;
// `;

// const ColorLabel = styled.label`
//   color: #ffffff;
//   font-size: 1.6rem;
//   font-weight: 500;
// `;

const ItemOptions = props => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    quantity: props.item.itemQty,
    size: props.item.itemSize,
    color: props.item.itemColor
  });

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    dispatch(
      updateItemInCart({
        ...props.item,
        itemQty: parseInt(form.quantity),
        itemSize: form.size,
        itemColor: form.color
      })
    );
  }, [form]);

  return (
    <form>
      <div>
        <label for="quantity">Qty:</label>
        <select id="quantity" value={form.quantity} onChange={changeHandler}>
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
      <div>
        <label for="size">Size:</label>
        <select id="size" value={form.size} onChange={changeHandler}>
          <option value="XS">SM</option>
          <option value="SM">SM</option>
          <option value="MD">MD</option>
          <option value="LG">LG</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div>
        <label for="color">Color:</label>
        <select id="color" value={form.color} onChange={changeHandler}>
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Purple">Purple</option>
        </select>
      </div>
    </form>
  );
};

export default ItemOptions;
