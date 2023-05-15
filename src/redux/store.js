import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "./pizzaSlice";
import { pizzaCartReducer } from "../components/Cart/pizzaCardSlice";


const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    pizzaCart: pizzaCartReducer,
  }
});

export default store;