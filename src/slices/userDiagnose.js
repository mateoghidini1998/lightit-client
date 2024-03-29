import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  userDiagnoses: [],
  userDiagnose: null,
};

export const getUserDiagnosis = createAsyncThunk(
  'userDiagnose/getUserDiagnosis',
  async (user_id, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/userdiagnose/${user_id}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUserDiagnose = createAsyncThunk(
  'userDiagnose/createUserDiagnose',
  async (userDiagnose, { rejectWithValue }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const body = JSON.stringify(userDiagnose);
      const res = await axios.post(
        'http://localhost:8000/api/userdiagnose',
        body,
        config
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserDiagnose = createAsyncThunk(
  'userDiagnose/deleteUserDiagnose',
  async (diagnose_id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/userdiagnose/${diagnose_id}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userDiagnoseSlice = createSlice({
  name: 'userDiagnose',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserDiagnose.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUserDiagnose.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDiagnoses.push(action.payload);
      state.userDiagnose = action.payload;
    });
    builder.addCase(createUserDiagnose.rejected, (state) => {
      state.isLoading = false;
      state.userDiagnose = null;
    });
    builder.addCase(getUserDiagnosis.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserDiagnosis.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDiagnoses = action.payload;
    });
    builder.addCase(getUserDiagnosis.rejected, (state) => {
      state.isLoading = false;
      state.userDiagnoses = [];
    });
    builder.addCase(deleteUserDiagnose.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserDiagnose.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedDiagnosisId = action.meta.arg;
      state.userDiagnoses = state.userDiagnoses.filter(
        (diagnose) => diagnose.id !== deletedDiagnosisId
      );
    });
    builder.addCase(deleteUserDiagnose.rejected, (state) => {
      state.isLoading = false;
      state.userDiagnose = null;
    });
  },
});

export const {} = userDiagnoseSlice.actions;

export default userDiagnoseSlice.reducer;
