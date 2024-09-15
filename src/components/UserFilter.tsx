import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts';
import { changeFilterData } from '../store/slices/usersSlice.ts';
import { filters } from '../const.ts';
import { Filters } from '../types.ts';

const UserFilter: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

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
    <div key={filter}>
      <label htmlFor={filter}>{filter}</label>
      <input
        type="text"
        name={filter}
        placeholder={`Filter by ${filter}`}
        value={filterInput[filter] ? filterInput[filter] : ''}
        onChange={(event) =>
          handleChange(event.target.value, filter as Filters)
        }
      />
    </div>
  ));

  return <div>{renderedInputs}</div>;
};

export default UserFilter;
