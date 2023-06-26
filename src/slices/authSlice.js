import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
  access_token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: null,
};

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { access_token } = getState().auth;
      if (access_token) {
        setAuthToken(access_token);
        const res = await axios.get('http://localhost:8000/api/auth/me');
        return res.data;
      } else {
        throw new Error('No access token found');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
      const body = JSON.stringify(user);
      const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        body,
        config
      );
      dispatch(loadUser());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    const body = { email, password };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/login',
        body,
        config
      );
      localStorage.setItem('token', res.data.access_token);
      dispatch(loadUser(res.data));
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.access_token = null;
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = state.access_token ? true : false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.access_token);
        state.access_token = action.payload.access_token;
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token;
        state.isLoading = false;
        state.isAuthenticated = true;
        console.log(state.isAuthenticated);
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
