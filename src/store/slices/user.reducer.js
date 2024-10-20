import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    singIn: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    resetUserState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const { singIn, resetUserState } = userSlice.actions;
export const selectUserState = (state) => state.userState;
export default userSlice.reducer;
