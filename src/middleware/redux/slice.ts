import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VerboseState {
  isMaskShow: boolean;
}

const initialState: VerboseState = {
  isMaskShow: false,
};

export const verboseSlice = createSlice({
  name: 'verbose',
  initialState,
  reducers: {
    setMaskShow: (state, action: PayloadAction<boolean>) => {
      state.isMaskShow = action.payload;
    },
  },
});

export const { setMaskShow } = verboseSlice.actions;

export default verboseSlice.reducer;
