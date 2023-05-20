import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://644a573379279846dce57c9e.mockapi.io/pizza/products";

const params = "?sortBy=price&order=asc";

const fetchPath = async path => {
  try {
    const res = await axios.get(path);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchWithParams = createAsyncThunk("pizza/params", async (params) => {
  return await fetchPath(BASE_URL + `?${params}`);
});


export const pizzaData = createAsyncThunk("pizza/product", async (params) => {
  return await fetchPath(BASE_URL + params);
});