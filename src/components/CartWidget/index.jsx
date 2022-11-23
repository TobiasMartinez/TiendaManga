import React from "react";
import WidgetIcon from "../Icons/Widget";

const CartWidget = () => {
  return (
    <div className="cart">
      <WidgetIcon />
      <sup className="cart__index">2</sup>
    </div>
  );
};

export default CartWidget;
