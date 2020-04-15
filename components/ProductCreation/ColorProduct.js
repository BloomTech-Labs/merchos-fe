import React, { useState } from "react";

const ColorProduct = () => {
  const [color, setColor] = useState({ background: "#ff0000" });
  return (
    <input
      type="radio"
      name="color"
      value={color.background}
      //   onInput={handleColorChange}
    />
  );
};

export default ColorProduct;
