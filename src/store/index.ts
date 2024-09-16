import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './api/usersApi.ts';
import { usersReducer } from './slices/usersSlice.ts';
import { appStageReducer } from './slices/appStageSlice.ts';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    app: appStageReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchUsersQuery } from './api/usersApi.ts';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
