import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://644a573379279846dce57c9e.mockapi.io/pizza/products";


const pizzaData = createAsyncThunk("pizza/product", async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }

});

export default pizzaData;