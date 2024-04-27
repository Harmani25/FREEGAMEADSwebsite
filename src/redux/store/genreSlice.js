import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGenres } from "../utils/genreUtils";

const initialState = {
    genres: [],
    genresStatus: STATUS.WAITING
}

const genreSlice = createSlice({
    name: "genre",
    initialState,
    extraReducers: (buildcase) => {
        buildcase.addCase(fetchAsyncGenres.pending, (state) => {
            state.genresStatus = STATUS.LOADING;
        })

        buildcase.addCase(fetchAsyncGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresStatus = STATUS.SUCCEED;
        })

        buildcase.addCase(fetchAsyncGenres.rejected, (state) => {
            state.genresStatus = STATUS.FAILED;
        })
    },
    
});

export const selectAllGenres = (state) => state.genre.genres.results;
export const selectAllGenresStatus = (state) => state.genre.genresStatus;

export default genreSlice.reducer;