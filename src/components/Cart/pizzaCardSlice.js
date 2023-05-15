import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  pizzas: []
};


const pizzaCartSlice = createSlice({
  name: 'pizzaCart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const findPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);

      if (findPizza) {
        findPizza.count++;
      } else {
        state.pizzas.push({
          ...action.payload,
          count: 1,
          size: "",
          dough: "",
          bort: ""
        });
      }
      state.totalPrice = state.pizzas.reduce((sum, pizza) => {
        return sum + pizza.price * pizza.count;
      }, 0);
    },
    removeFromCart(state, action) {
      const findPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);

      if (findPizza && findPizza.count > 1) {
        findPizza.count--;
      } else {
        state.pizzas = state.pizzas.filter(pizza => pizza.id !== action.payload.id);
      }
      state.totalPrice = state.pizzas.reduce((sum, pizza) => {
        return sum + pizza.price * pizza.count;
      }, 0);
    },
    selectSize(state, action) {
      const findPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);
      if (findPizza) {
        findPizza.size = action.payload.size;
      }
    },
    selectDough(state, action) {
      const findPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);
      if (findPizza) {
        findPizza.dough = action.payload.dough;
      }
    },
    selectBort(state, action) {
      const findPizza = state.pizzas.find(pizza => pizza.id === action.payload.id);
      if (findPizza) {
        findPizza.bort = action.payload.bort;
      }
    },
  }
});

export const { addToCart, removeFromCart, selectSize, selectDough, selectBort } = pizzaCartSlice.actions;
export const pizzaCartReducer = pizzaCartSlice.reducer;