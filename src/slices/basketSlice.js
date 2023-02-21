import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //These are actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id)

      let newBasket = [...state.items]

      if (index >= 0) {
        // If index is greater than 0 item is in basket... remove from basket
        newBasket.splice(index, 1)
      } else {
        // If index is less than 0 item is not in basket... let them know
        console.warn(`Cannot remove product with id ${action.payload.id} from basket. Item is not in basket`);
      }
      p
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;