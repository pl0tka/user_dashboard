import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    filterData: {},
  },
  reducers: {
    changeFilterData(state, action) {
      state.filterData[action.payload.filterParam] = action.payload.filterInput;
    },
  },
});

export const { changeFilterData } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
