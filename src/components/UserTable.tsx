import React from 'react';
import { useAppSelector } from '../hooks/hooks.ts';
import { filters } from '../const.ts';
import { User } from '../types.ts';
import styled from 'styled-components';
import Container from '../styles/Container.tsx';
import SectionTitle from '../styles/SectionTitle.tsx';

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin: var(--spacing-sm);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-md);
  text-align: left;
`;

const TableScroll = styled.div`
  overflow-y: scroll;
`;

const Th = styled.th`
  background-color: var(--clr-primary);
  color: var(--clr-white);
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--clr-grey-light);
  text-transform: capitalize;
`;

const Td = styled.td`
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--clr-grey-light);
  text-transform: capitalize;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: var(--clr-grey-lighter);
  }

  &:hover {
    background-color: var(--clr-grey-medium-light);
  }
`;

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
      <Tr key={id}>
        <Td>{name}</Td>
        <Td>{username}</Td>
        <Td>{email}</Td>
        <Td>{phone}</Td>
      </Tr>
    );
  });

  const renderedTableHeaders = filters.map((filter) => (
    <Th key={filter}>{filter}</Th>
  ));

  return (
    <Container>
      <TableContainer>
        <SectionTitle>User information</SectionTitle>
        <TableScroll>
          <Table>
            <thead>
              <Tr>{renderedTableHeaders}</Tr>
            </thead>
            <tbody>{renderedUsers}</tbody>
          </Table>
        </TableScroll>
      </TableContainer>
    </Container>
  );
};

export default UserTable;
