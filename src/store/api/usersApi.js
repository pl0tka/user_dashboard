import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    // baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: 'users.json',
            // url: 'users',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery } = usersApi;
export { usersApi };
