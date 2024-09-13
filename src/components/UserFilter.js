import { useDispatch, useSelector } from 'react-redux';
import { changeFilterData } from '../store/slices/usersSlice';
import { filters } from '../data/const';

function UserFilter() {
  const dispatch = useDispatch();

  const filterInput = useSelector((state) => state.users.filterData);

  const handleChange = (filterInput, filterParam) => {
    dispatch(
      changeFilterData({
        filterParam,
        filterInput,
      })
    );
  };

  const renderedInputs = filters.map((filter) => (
    <div key={filter}>
      <label name={filter}>{filter}</label>
      <input
        type="text"
        name={filter}
        placeholder={`Filter by ${filter}`}
        value={filterInput.filterInput}
        onChange={(event) => handleChange(event.target.value, filter)}
      />
    </div>
  ));

  return <div>{renderedInputs}</div>;
}

export default UserFilter;
