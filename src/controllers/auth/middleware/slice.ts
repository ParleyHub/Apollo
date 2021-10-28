import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
  refreshToken: string;
}

const initialState: AuthState = {
  token: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.refreshToken = action.payload;
    },
  },
});

export const { incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
