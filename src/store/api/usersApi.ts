import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../types.ts';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query<Array<User>, void>({
        query: () => {
          return {
            url: 'users',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery } = usersApi;
export { usersApi };
