import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
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
    removeItem: (state, action) => {
      const { productName } = action.payload;
      const existingItem = state.items.find(item => item.name === productName);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.name !== productName);
      }
    },
    updateQuantity: (state, action) => {
      const { productName, amount } = action.payload;
      const existingItem = state.items.find(item => item.name === productName);
      if (existingItem) {
        existingItem.quantity += amount;
        state.totalQuantity += amount;
        state.totalAmount += existingItem.price * amount;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.name !== productName);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
