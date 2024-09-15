import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks.ts';
import { useFetchUsersQuery } from './store/index.ts';
import { changeAppStageData } from './store/slices/appStageSlice.ts';
import { LoadingPage } from './pages/LoadingPage/LoadingPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { AppStage } from './types.ts';

const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const appStage = useAppSelector((state) => state.app.appStage);

  const { data = [], error } = useFetchUsersQuery();
  useEffect(() => {
    if (data.length > 0) {
      dispatch(changeAppStageData(AppStage.SUCCESS));
    }
    if (error) {
      dispatch(changeAppStageData(AppStage.ERROR));
    }
  }, [data, error, dispatch]);

  return (
    <>
      {appStage === AppStage.LOADING ? <LoadingPage /> : null}
      {appStage === AppStage.ERROR ? <ErrorPage /> : null}
      {appStage === AppStage.SUCCESS ? <MainPage data={data} /> : null}
    </>
  );
};

export default App;
