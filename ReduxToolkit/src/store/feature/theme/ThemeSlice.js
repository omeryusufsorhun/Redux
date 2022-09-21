import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;
export const { setTheme } = ThemeSlice.actions;
