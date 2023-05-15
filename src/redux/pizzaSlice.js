import { createSlice } from '@reduxjs/toolkit';
import pizzaData from '../fetch/getData';

const initialState = [];

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(pizzaData.fulfilled, (state, action) => {
        if (state.length === 0) {
          return state.concat(action.payload);
        }
      });

  }
});

// export const { } = pizzaCardSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;