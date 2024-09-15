import React from 'react';
import UserFilter from '../../components/UserFilter.tsx';
import UserTable from '../../components/UserTable.tsx';
import { User } from '../../types.ts';

type MainPageProps = {
  data: Array<User>;
};

export const MainPage: React.FunctionComponent<MainPageProps> = ({ data }) => {
  return (
    <>
      <UserFilter />
      <UserTable data={data} />
    </>
  );
};
