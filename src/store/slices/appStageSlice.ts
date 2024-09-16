import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStage } from '../../types.ts';

export interface AppStageState {
  appStage: AppStage;
}
const initialState: AppStageState = {
  appStage: AppStage.LOADING,
};

const appStageSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeAppStageData(state, action: PayloadAction<AppStage>) {
      state.appStage = action.payload;
    },
  },
});

export const { changeAppStageData } = appStageSlice.actions;
export const appStageReducer = appStageSlice.reducer;
