import { createSlice } from "@reduxjs/toolkit";

const Catagoryslice = createSlice({
  name: "catagory",
  initialState: {
    catagory: "All",
  },
  reducers: {
    setCatagory: (state, action) => {
      state.catagory = action.payload;
    },
  },
});

export const { setCatagory } = Catagoryslice.actions;
export default Catagoryslice.reducer;
