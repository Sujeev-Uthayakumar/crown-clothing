import CartActionTypes from "./cartTypes";
import cartTypes from "./cartTypes";

export const toggleCartHidden = () => ({ type: cartTypes.TOGGLE_CART_HIDDEN });

export const addItem = (item) => ({ type: cartTypes.ADD_ITEM, payload: item });

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
