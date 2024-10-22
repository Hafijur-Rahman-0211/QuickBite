// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        // Update existing item quantity
        itemInCart.quantity += action.payload.quantity;
      } else {
        // Add new item to the cart
        state.cart.push({ ...action.payload });
      }
    },
    updateCartQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateCartQuantity, removeFromCart, clearCart } = cartSlice.actions;

// Create a selector to calculate total items in the cart
export const selectTotalCartItems = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
