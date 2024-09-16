import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '../../types.ts';

export interface FilterState {
  filterData: {
    [key in Filters]?: string;
  };
}
const initialState: FilterState = {
  filterData: {},
};

type PayloadItemType = {
  filterParam: Filters;
  filterInput: string;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeFilterData(state, action: PayloadAction<PayloadItemType>) {
      state.filterData[action.payload.filterParam] = action.payload.filterInput;
    },
  },
});

export const { changeFilterData } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
