import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  symptoms: [],
  isLoading: false,
  diagnosis: null,
};

export const getSymptoms = createAsyncThunk(
  'diagnosis/getSymptoms',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:8000/api/symptoms');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDiagnosis = createAsyncThunk(
  'diagnosis/getDiagnosis',
  async ({ symptoms }, { rejectWithValue }) => {
    const body = { symptoms };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:8000/api/diagnosis',
        body,
        config
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSymptoms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSymptoms.fulfilled, (state, action) => {
        state.isLoading = false;
        /* const startIndex = action.payload.indexOf('[');
        const symptomArrayString = action.payload.substring(startIndex);
        const symptomsList = JSON.parse(symptomArrayString); */
        state.symptoms = action.payload;
        console.log(state.symptoms);
      })
      .addCase(getSymptoms.rejected, (state, action) => {
        state.isLoading = false;
        state.symptoms = [];
        console.log(action.payload);
      })
      .addCase(getDiagnosis.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiagnosis.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.diagnosis = action.payload;
      })
      .addCase(getDiagnosis.rejected, (state, action) => {
        state.isLoading = false;
        state.diagnosis = null;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = diagnosisSlice.actions;

export default diagnosisSlice.reducer;
