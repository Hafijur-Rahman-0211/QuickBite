import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlices'; // Ensure this path is correct

const store = configureStore({
    reducer: {
        cart: cartReducer, // Use 'cartReducer' to maintain clarity
    },
});

export default store;
