import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapStateToprops = ({ cart: { cartItems } }) => {
  return {
    itemCount: cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    ),
  };
};

export default connect(mapStateToprops, {
  toggleCartHidden,
})(CartIcon);
