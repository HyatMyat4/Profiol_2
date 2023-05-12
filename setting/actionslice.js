import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: true,
  starmode: true,
  musicmode: true,
};
export const Actionslice = createSlice({
  name: "actionslice",
  initialState,
  reducers: {
    darkmodeEngin: (state, action) => {
      state.darkmode = action.payload;
    },
    starmodeEngin: (state, action) => {
      state.starmode = action.payload;
    },
    musicmodeEngin: (state, action) => {
      state.musicmode = action.payload;
    },
  },
});

export const { darkmodeEngin, starmodeEngin, musicmodeEngin } =
  Actionslice.actions;

export const darkmodeC = (state) => state.actionslice.darkmode;
export const starmodeC = (state) => state.actionslice.starmode;
export const musicmodeC = (state) => state.actionslice.musicmode;

export default Actionslice.reducer;
