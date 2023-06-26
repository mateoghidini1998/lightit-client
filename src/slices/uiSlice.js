import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveSuccess: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSaveSuccess: (state) => {
      state.saveSuccess = !state.saveSuccess;
    },
  },
});

export const { toggleSaveSuccess } = uiSlice.actions;

export default uiSlice.reducer;
