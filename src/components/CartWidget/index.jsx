import React, {useContext} from "react";
import WidgetIcon from "../Icons/Widget";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {

  const {count, cart} = useContext(CartContext);

  return (
    <div className="cart">
      <NavLink to="/cart">
        <WidgetIcon />
      </NavLink>
      <sup className="cart__index">{count}</sup>
    </div>
  );
};

export default CartWidget;
