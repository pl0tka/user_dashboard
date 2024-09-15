import React from 'react';
import { useAppSelector } from '../hooks/hooks.ts';
import { filters } from '../const.ts';
import { User } from '../types.ts';

type UserTableProps = {
  data: Array<User>;
};

const UserTable: React.FunctionComponent<UserTableProps> = ({ data }) => {
  const filterData = useAppSelector((state) => state.users.filterData);
  let filteredUsers = data;

  filteredUsers = data!.filter((user: User) => {
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
