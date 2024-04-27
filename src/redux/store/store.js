import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import creatorReduce from "./creatorSlice";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        creator: creatorReduce
    }
});

export default store;