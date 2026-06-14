import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.items.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },
    removeFromCart: (state, action) => {
      const { productName } = action.payload;
      const existingItem = state.items.find(item => item.name === productName);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.name !== productName);
      }
    },
    increaseQuantity: (state, action) => {
      const { productName } = action.payload;
      const existingItem = state.items.find(item => item.name === productName);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { productName } = action.payload;
      const existingItem = state.items.find(item => item.name === productName);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.name !== productName);
        } else {
          existingItem.quantity -= 1;
        }
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
