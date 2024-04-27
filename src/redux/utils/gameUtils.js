import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncGames = createAsyncThunk('games/fetch', async(page = [10]) => {
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}`);
    return data;
});

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    return data;
})

export const fetchAsyncSearchGames = createAsyncThunk('games/search', async (query) => {

  
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&search=${query}`);
    return data;

    
});
console.log(fetchAsyncSearchGames)

const initialState = {
    games: [],
    loading: false,
    error: null,
};

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncGames.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAsyncGames.fulfilled, (state, action) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(fetchAsyncGames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
           
    },
});

export default gameSlice.reducer;