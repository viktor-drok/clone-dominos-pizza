import { createSlice } from '@reduxjs/toolkit';
import { pizzaData } from '../fetch/getData';

const initialState = {
  pizza: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pizzaData.fulfilled, (state, action) => {
        console.log(action);
        state.pizza = action.payload;
      });
  }
});

// export const { } = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;