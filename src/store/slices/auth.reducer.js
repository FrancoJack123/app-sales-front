import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { addUserInfo } = authSlice.actions;
export const selectUserState = (state) => state.userState;
export default authSlice.reducer;
