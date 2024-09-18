import React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts';
import { changeFilterData } from '../store/slices/usersSlice.ts';
import { filters } from '../const.ts';
import { Filters } from '../types.ts';
import styled from 'styled-components';
import Container from '../styles/Container.tsx';
import SectionTitle from '../styles/SectionTitle.tsx';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: var(--spacing-sm);
  margin: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  background-color: var(--clr-grey-lighter);
  box-shadow: 0px 10px 12px -10px var(--clr-grey-medium);
`;

const ToggleFilterBarButton = styled.button`
  cursor: pointer;
  justify-self: end;
  grid-column: 12;
  font-size: 1.5rem;
  background-color: var(--clr-grey-medium-light);
  color: var(--clr-grey-dark);
  border: 1px solid var(--clr-grey-light);
  border-radius: var(--border-radius);

  &:hover {
    color: var(--clr-grey-light);
    background-color: var(--clr-grey-dark);
  }
`;

const FilterInputContainer = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xs);
  grid-column: 1 / -1;
`;

const FilterInputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Label = styled.label`
  font-size: var(--text-sm);
  color: var(--clr-grey-dark);
  text-transform: capitalize;
`;

const Input = styled.input`
  padding: var(--spacing-xs);
  border: 1px solid var(--clr-grey-light);
  border-radius: var(--border-radius);
  font-size: var(--text-sm);
`;

const UserFilter: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [isFilterBarClosed, setIsFilterBarClosed] = useState<boolean>(false);

  const handleClick = () => {
    setIsFilterBarClosed((prevFilterBarState) => !prevFilterBarState);
  };

  const filterInput = useAppSelector((state) => state.users.filterData);

  const handleChange = (filterInput: string, filterParam: Filters) => {
    dispatch(
      changeFilterData({
        filterParam,
        filterInput,
      })
    );
  };

  const renderedInputs = filters.map((filter) => (
    <FilterInputItem key={filter}>
      <Label htmlFor={filter}>{filter}</Label>
      <Input
        type="text"
        name={filter}
        id={filter}
        placeholder={`Filter by ${filter}`}
        autoComplete='on'
        value={filterInput[filter] ? filterInput[filter] : ''}
        onChange={(event) =>
          handleChange(event.target.value, filter as Filters)
        }
      />
    </FilterInputItem>
  ));

  return (
    <Container>
      <FilterContainer>
        <SectionTitle>Filters</SectionTitle>
        <ToggleFilterBarButton onClick={handleClick}>
          {isFilterBarClosed ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </ToggleFilterBarButton>
        {isFilterBarClosed ? null : (
          <FilterInputContainer>{renderedInputs}</FilterInputContainer>
        )}
      </FilterContainer>
    </Container>
  );
};

export default UserFilter;
