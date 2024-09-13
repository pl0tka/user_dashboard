import React from 'react';
import { useFetchUsersQuery } from '../store/index.ts';
import { useAppSelector } from '../hooks/hooks.ts';
import { filters } from '../data/const.ts';
import { User } from '../types.ts';

const UserTable: React.FunctionComponent = () => {
  const filterData = useAppSelector((state) => state.users.filterData);
  const { data, error, isLoading } = useFetchUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    if ('error' in error) {
      return <p>Error: {error.error}</p>;
    } else {
      return <p>Error: {JSON.stringify(error)}</p>;
    }
  }

  const filteredUsers = data!.filter((user: User) => {
    return Object.entries(filterData).every(([key, value]) => {
      return user[key].toLowerCase().includes(value.toLowerCase());
    });
  });

  const renderedUsers = filteredUsers.map((user: User) => {
    const { id, name, username, email, phone } = user;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    );
  });

  const renderedTableHeaders = filters.map((filter) => (
    <th key={filter}>{filter}</th>
  ));

  return (
    <table>
      <thead>
        <tr>{renderedTableHeaders}</tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

export default UserTable;
