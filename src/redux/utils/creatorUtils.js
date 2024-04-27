import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/api_key";


//This action creator fetches data from an API endpoint using Axios and returns the data retrieved from the API
export const fetchAsyncCreators = createAsyncThunk('developers/fetch', async(page = 1) => {
    const { data } = await axios.get(`${apiURL.creatorsURL}?${API_KEY}&page=${page}`);
    return data;
})