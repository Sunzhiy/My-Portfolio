import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./createSlice";

const store = configureStore({
    reducer: {
        filter:filterReducer,
    },
});

export default store;