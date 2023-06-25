import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../slices/authSlice';
import { diagnosisSlice } from '../slices/diagnosisSlice';
import { userDiagnoseSlice } from '../slices/userDiagnose';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    diagnosis: diagnosisSlice.reducer,
    userDiagnose: userDiagnoseSlice.reducer,
  },
});
