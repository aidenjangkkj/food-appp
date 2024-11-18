import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Immer를 사용하면 직접 수정 가능
    },
    removeToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload.id);
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1); // Immer가 불변성을 관리
      } else {
        console.log("Can't remove the item that is not added to cart");
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = createSelector(
  [selectCartItems, (state, id) => id],
  (items, id) => items.filter(item => item._id === id)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);

export default cartSlice.reducer;
