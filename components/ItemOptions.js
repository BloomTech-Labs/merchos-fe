import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

import { useDispatch } from "react-redux";
import { updateItemInCart } from "../store/actions/storeCheckout/storeCheckout";

const QtyOption = styled.div`
  height: 35px;
  width: 155px;
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

const SizeOption = styled.div`
  height: 35px;
  width: 155px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0751ff;
`;

const SizeLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ColorOption = styled.div`
  height: 35px;
  width: 155px;
  border-radius: 4px;
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0751ff;
`;

const ColorLabel = styled.label`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

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
        <QtyOption>
          <QtyLabel>
            <label htmlFor="quantity">Qty:</label>

            <select
              id="quantity"
              value={form.quantity}
              onChange={changeHandler}
            >
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
          </QtyLabel>
        </QtyOption>
      </div>
      <div>
        <SizeOption>
          <SizeLabel>
            <label htmlFor="size">Size:</label>

            <select id="size" value={form.size} onChange={changeHandler}>
              <option value="XS">SM</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </SizeLabel>
        </SizeOption>
      </div>
      <div>
        <ColorOption>
          <ColorLabel>
            <label htmlFor="color">Color:</label>
            <select id="color" value={form.color} onChange={changeHandler}>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
              <option value="Purple">Purple</option>
            </select>
          </ColorLabel>
        </ColorOption>
      </div>
    </form>
  );
};

export default ItemOptions;
