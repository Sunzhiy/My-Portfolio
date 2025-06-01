import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:"good",
};

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
      setIdFilter: (state,action) => {
        state.id = action.payload;
      }
    }
});

export const { setIdFilter } = filterSlice.actions;
export default filterSlice.reducer;
