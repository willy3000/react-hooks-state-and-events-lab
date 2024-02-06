import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(true);
  };

  const removeFromCart = () => {
    setInCart(false);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={inCart ? removeFromCart : addToCart}>
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
