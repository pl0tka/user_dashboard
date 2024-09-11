import { useFetchUsersQuery } from '../store';

function UserTable() {
  const { data, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderedUsers = data.map((user) => {
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

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

export default UserTable;
