import React, { useState, useEffect } from "react";

const FetchProducts = () => {
  const [productName, setProductName] = useState("zip-hoodies");
  const [products, setProducts] = useState([]);

  const getFirstFive = (products, n) => {
    if (products == null) return void 0;
    if (n == null) return products[0];
    if (n < 0) return [];
    return products.slice(0, n);
  };

  useEffect(() => {
    Axios.get(
      `https://api.scalablepress.com/v2/categories/${productName}`
    ).then((data) => {
      const arr = [];
      console.log(data);
      arr.push(data.data.products);
      console.log(arr);
      setProducts([arr]);

      console.log(products);
    });
  }, []);

  return <>hello</>;
};

export default FetchProducts;
