import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks.ts';
import { useFetchUsersQuery } from './store/index.ts';
import { changeAppStageData } from './store/slices/appStageSlice.ts';
import { LoadingPage } from './pages/LoadingPage/LoadingPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { AppStage } from './types.ts';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary: #b19191;
    --clr-white: #fff;
    --clr-grey-lighter: #f1f1f1;
    --clr-grey-light: #ddd;
    --clr-grey-medium-light: #d1d1d1;
    --clr-grey-medium: #b3b3b3;
    --clr-grey-dark: #333;
    
    --border-radius: 0.5rem;
    --letter-spacing: 0.5px;
    --container-max-width: 1400px;

    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;

    --text-sm: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.5rem;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: var(--letter-spacing);
  }
`;

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
      <GlobalStyle />
      {appStage === AppStage.LOADING ? <LoadingPage /> : null}
      {appStage === AppStage.ERROR ? <ErrorPage /> : null}
      {appStage === AppStage.SUCCESS ? <MainPage data={data} /> : null}
    </>
  );
};

export default App;
