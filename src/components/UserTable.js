import { useFetchUsersQuery } from '../store';
import { useSelector } from 'react-redux';
import { filters } from '../data/const';

function UserTable() {
  const filterData = useSelector((state) => state.users.filterData);
  const { data, error, isLoading } = useFetchUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.error}</p>;
  }

  const filteredUsers = data.filter((user) => {
    return Object.entries(filterData).every(([key, value]) =>
      user[key].toLowerCase().includes(value.toLowerCase())
    );
  });

  const renderedUsers = filteredUsers.map((user) => {
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

  const renderedTableHeaders = filters.map((filter) => <th>{filter}</th>);

  return (
    <table>
      <thead>
        <tr>{renderedTableHeaders}</tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

export default UserTable;
