import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  error?: string | null;
  errorMessage?: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state: AuthState) => {
      state.isLoggedIn = true;
      return state;
    },
    loginError: (state: AuthState, action: any) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.errorMessage = action.payload;
    }
  }
});


const { actions, reducer } = authSlice;

export const { loginSuccess, loginError } = actions;

export default reducer;

